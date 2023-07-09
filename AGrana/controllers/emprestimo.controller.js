const Emprestimo = require('../entidades/emprestimo');
const Associado = require('../entidades/associado');

class EmprestimoController{
    constructor(){
        this.emprestimo = new Emprestimo();
        this.associado = new Associado();
    }

    async getAll(){
        const resp = await this.emprestimo.getAll();
        return resp;
    }

    async getById(id){
        const resp = await this.emprestimo.getById(id);
        return resp;
    }

    async getByVendedor(id){
        const resp = await this.emprestimo.getByVendedor(id);
        return resp;
    }

    async getByAssociado(id){
        const resp = await this.emprestimo.getByAssociado(id);
        return resp;
    }

    async create(obj){
        const emprestimo = obj;
        const idAssociado = obj.idAssociado;
        
        const associado = (await this.associado.getById(idAssociado))[0];

        const validacao = await validarEmprestimo(associado, emprestimo);

        if(validacao.sucesso){
            await this.emprestimo.create(emprestimo);
            const updateAssociado = {
                nome: associado.nome,
                cpf: associado.cpf,
                dataNasc: associado.dataNasc,
                salario: associado.salario,
                endividamento: associado.endividamento + emprestimo.valorParcela
            }
            await this.associado.update(idAssociado, updateAssociado);
            return {
                sucesso: true,
                emprestimo: emprestimo,
                msg: "Empréstimo registrado com sucesso!"
            }
        } else {
            return validacao
        }
    }

    async pagar(id){
        const emprestimo = (await this.emprestimo.getById(id))[0];
        const associado = (await this.associado.getById(emprestimo.idAssociado))[0];
        
        if(emprestimo.status == "Liquidado"){
            return {
                sucesso: false,
                msg: "Este contrato já foi liquidado."
            }
        }

        emprestimo.parcelasPagas = emprestimo.parcelasPagas + 1;

        const updateEmprestimo = {
            idVendedor: emprestimo.idVendedor,
            idAssociado: emprestimo.idAssociado,
            valor: emprestimo.valor,
            valorParcela: emprestimo.valorParcela,
            parcelas: emprestimo.parcelas,
            parcelasPagas: emprestimo.parcelasPagas,
            taxa: emprestimo.taxa,
            status: emprestimo.parcelasPagas == emprestimo.parcelas ? "Liquidado" : "Em aberto"
        }

        await this.emprestimo.update(id, updateEmprestimo);

        if(emprestimo.parcelasPagas == emprestimo.parcelas){
            const updateAssociado = {
                nome: associado.nome,
                cpf: associado.cpf,
                dataNasc: associado.dataNasc,
                salario: associado.salario,
                endividamento: associado.endividamento - emprestimo.valorParcela
            }
            await this.associado.update(emprestimo.idAssociado, updateAssociado);
        }

        return {
            sucesso: true,
            msg: emprestimo.parcelasPagas == emprestimo.parcelas ? "Pagamento efetuado e contrato liquidado" : `Pagamento efetuado, ${emprestimo.parcelas - emprestimo.parcelasPagas} parcelas restantes.`
        }
    }
}

async function validarEmprestimo(associado, emprestimo){

    const { parcelas, valorParcela } = emprestimo;
    const { salario, endividamento } = associado;

    if ( parcelas > 24 ){
        return {
            sucesso: false,
            msg: "A quantidade de parcelas excede o máximo permitido"
        }
    } else if ( (endividamento + valorParcela)/salario > 0.3 ){
        return {
            sucesso: false,
            msg: "Esta venda excede o limite de endividamento do associado."
        }
    } else {
        return {
            sucesso: true
        }
    }
}

module.exports = new EmprestimoController();
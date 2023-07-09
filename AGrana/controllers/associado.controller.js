const Associado = require('../entidades/associado');

class AssociadoControlelr {
    constructor(){
        this.associado = new Associado();
    }

    async getAll(){
        const resp = await this.associado.getAll();
        return resp;
    }

    async getById(id){
        const resp = await this.associado.getById(id);
        return resp;
    }

    async create(obj){
        const resp = await this.associado.create(obj)
        return resp;
    }

    async update(id, obj){
        const resp = await this.associado.update(id, obj)
        return resp;
    }

    async delete(id){
        const resp = await this.associado.delete(id)
        return resp;
    }

}

module.exports = new AssociadoControlelr();
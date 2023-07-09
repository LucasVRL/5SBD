const Entidade = require('./entidade');
const model = require('../models/emprestimo.model');
const EmprestimoService = require('../services/emprestimo.service');

class Emprestimo extends Entidade{
    constructor(){
        super();
        this.model = model;
        this._emprestimoSevice = new EmprestimoService();
    }

    async getByVendedor(id) {
        return await this._emprestimoSevice.getByVendedor(this, id);
    }

    async getByAssociado(id) {
        return await this._emprestimoSevice.getByAssociado(this, id);
    }
}

module.exports = Emprestimo;
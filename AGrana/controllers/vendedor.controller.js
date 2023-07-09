const Vendedor = require('../entidades/vendedor');

class VendedorController {
    constructor(){
        this.vendedor = new Vendedor();
    }

    async getAll(){
        const resp = await this.vendedor.getAll();
        return resp;
    }

    async getById(id){
        const resp = await this.vendedor.getById(id);
        return resp;
    }

    async create(obj){
        const resp = await this.vendedor.create(obj)
        return resp;
    }

    async update(id, obj){
        const resp = await this.vendedor.update(id, obj)
        return resp;
    }

    async delete(id){
        const resp = await this.vendedor.delete(id)
        return resp;
    }

}

module.exports = new VendedorController();
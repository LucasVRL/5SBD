const BaseService = require('../services/base.service');

class Entidade{
    constructor(){
        this.service = new BaseService();
    }

    async getAll() {
        return await this.service.getAll(this);
    }

    async getById(id) {
        return await this.service.getById(this, id);
    }

    async create(obj){
        return await this.service.create(this, obj);
    }

    async update(id, obj){
        return await this.service.update(this, id, obj);
    }   

    async delete(id){
        return await this.service.delete(this, id);
    }
}

module.exports = Entidade;
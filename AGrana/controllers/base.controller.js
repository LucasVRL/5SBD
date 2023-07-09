const BaseService = require('../services/base.service');

class BaseController{

    constructor(){
        this.service = new BaseService();
    }

    async getAll(entity){
        const resp = await this.service.getAll(entity);
        return resp;
    }

    async getById(entity, id){
        const resp = await this.service.getById(entity, id);
        return resp;
    }

    async create(entity, obj){
        const resp = await this.service.create(entity, obj)
        return resp;
    }

    async update(entity, id, obj){
        const resp = await this.service.update(entity, id, obj)
        return resp;
    }

    async delete(entity, id){
        const resp = await this.service.delete(entity, id)
        return resp;
    }

}

module.exports = BaseController;
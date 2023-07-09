const Entidade = require('./entidade');
const model = require('../models/vendedor.model');

class Vendedor extends Entidade{
    constructor(){
        super();
        this.model = model;
    }
}

module.exports = Vendedor;
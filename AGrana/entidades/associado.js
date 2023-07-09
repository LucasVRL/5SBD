const Entidade = require('./entidade');
const model = require('../models/associado.model');

class Associado extends Entidade{
    constructor(){
        super();
        this.model = model;
    }
}

module.exports = Associado;
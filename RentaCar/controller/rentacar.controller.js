const service = require('../service/rentacar.service');

module.exports = {
    getCarros : async (req, res) => {
        try{
            const carros = await service.getCarros();
            res.send({
                sucesso: true,
                carros: carros
            })
        } catch (err) {
            res.send({
                sucesso: false,
                carros: [],
                erro: err
            })
        }
    },
    
    getCarroById : async (req, res) => {
        try{
            const idCarro = req.params.id;
            const carro = await service.getCarroById(idCarro);
            res.send({
                sucesso: true,
                carro: carro
            })
        } catch (err) {
            res.send({
                sucesso: true,
                carro: [],
                erro: err
            })
        }
    },
    
    createCarro : async (req, res) => {
        try{
            const { modelo, marca, ano, cor } = req.body;
            const resp = await service.createCarro(modelo, marca, ano, cor);
            res.send({
                sucesso: true,
                carroCriado: resp.dataValues
            })
        } catch (err){
            res.send({
                sucesso: false,
                carroCriado: [],
                erro: err
            })
        }  
    },
    
    updateCarro : async (req, res) => {
        try{    
            const { modelo, marca, ano, cor } = req.body;
            const idCarro = req.params.id;
            await service.updateCarro(idCarro, modelo, marca, ano, cor);
            res.send({
                sucesso: true
            })
        } catch (err) {
            res.send({
                sucesso: false,
                erro: err
            })
        }
    },
    
    deleteCarro : async (req, res) => {
        try{
            const idCarro = req.params.id;
            await service.deleteCarro(idCarro);
            res.send({
                sucesso: true
            })
        } catch (err) {
            res.send({
                sucesso: false,
                erro: err
            })
        }   
    }
}


const express = require('express');
const router = express.Router();
const controller = require('../controllers/associado.controller');

router.get('/', async (req, res) => {
    try{
        const resp = await controller.getAll();
        res.send({
            sucesso: true,
            associados: resp
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const resp = await controller.getById(id);
        res.send({
            sucesso: true,
            associado: resp
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.post('/', async (req, res) => {
    try{
        const obj = req.body;
        const resp = await controller.create(obj);
        res.send({
            sucesso: true,
            associado: resp.dataValues
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }   
});

router.put('/:id', async (req, res) => {
    try{
        const obj = req.body;
        const id = req.params.id;
        const resp = await controller.update(id, obj)
        res.send({
            sucesso: true,
            associado: resp.dataValues
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const resp = await controller.delete(id);
        res.send({
            sucesso: true,
            associado: resp.dataValues
        });
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

module.exports = router;

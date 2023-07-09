const express = require('express');
const router = express.Router();
const controller = require('../controllers/emprestimo.controller');

router.post('/', async (req, res) => {
    try{
        const obj = req.body
        const resp = await controller.create(obj);
        res.send(resp)
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.post('/pagarparcela/', async (req, res) => {
    try{
        const idEmprestimo = req.body.id
        const resp = await controller.pagar(idEmprestimo);
        res.send(resp)
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.get('/', async(req, res) => {
    try{
        const resp = await controller.getAll();
        res.send({
            sucesso: true,
            emprestimo: resp
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.get('/vendedor/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const resp = await controller.getByVendedor(id);
        res.send({
            sucesso: true,
            emprestimo: resp
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.get('/associado/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const resp = await controller.getByAssociado(id);
        res.send({
            sucesso: true,
            emprestimo: resp
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

router.get('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const resp = await controller.getById(id);
        res.send({
            sucesso: true,
            emprestimo: resp
        })
    } catch (e) {
        res.send({
            sucesso: false,
            erro: e
        })
    }
});

module.exports = router;

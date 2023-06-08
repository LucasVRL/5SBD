const express = require('express');
const router = express.Router();
const controller = require('../controller/rentacar.controller');

router.get('/:id', (req, res) => {
    controller.getCarroById(req, res);
});

router.get('/', (req, res) => {
    controller.getCarros(req, res);
});

router.post('/', (req, res) => {
    controller.createCarro(req, res);
});

router.put('/:id', (req, res) => {
    controller.updateCarro(req, res);
});

router.delete('/:id', (req, res) => {
    controller.deleteCarro(req, res);
});

module.exports = app => app.use('/rentacar', router);

const vendedorRouter = require('./vendedor.routes');
const associadoRouter = require('./associado.routes');
const emprestimoRouter = require('./emprestimo.routes');

module.exports = (app) => {
    app.use('/agrana/vendedor', vendedorRouter);
    app.use('/agrana/associado', associadoRouter);
    app.use('/agrana/emprestimo', emprestimoRouter);
}


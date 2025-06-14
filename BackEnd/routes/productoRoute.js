import express from 'express';
const route = express.Router();
import productoController from '../controllers/productoController.js';
// const productoModel = require('../models/productoModel.js')

route.post('/', productoController.create);
route.get('/:id', productoController.getOne);
route.get('/', productoController.getAll);
route.put('/:id', productoController.update);
route.delete('/:id', productoController.delete);

export default route;
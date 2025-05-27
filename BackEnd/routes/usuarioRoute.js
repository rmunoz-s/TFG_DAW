import express from 'express';
const route = express.Router();
import { registrarUsuario, loginUsuario,obtenerUsuario, actualizarUsuario } from '../controllers/usuarioController.js';

route.post('/registro', registrarUsuario);
route.post('/login', loginUsuario);
route.get('/:id', obtenerUsuario);
route.put('/:id', actualizarUsuario);
export default route;
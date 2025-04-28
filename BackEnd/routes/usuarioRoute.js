import express from 'express';
const route = express.Router();
import { registrarUsuario, loginUsuario } from '../controllers/usuarioController.js';

route.post('/registro', registrarUsuario);
route.post('/login', loginUsuario);

export default route;
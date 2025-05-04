import mongoose from 'mongoose';
import usuarioSchema from '../schemas/usuarioSchema.js';

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;
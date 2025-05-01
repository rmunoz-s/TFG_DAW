import mongoose from 'mongoose';
import carritoSchema from '../schemas/carritoSchema.js';

const Carrito = mongoose.model('Carrito', carritoSchema);
export default Carrito;
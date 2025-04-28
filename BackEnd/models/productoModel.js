import mongoose from 'mongoose';
import Producto from '../schemas/productoSchema.js';

class productoModelo{
    async create(producto){
        return await Producto.create(producto);
    }

    async getAll(){
        return await Producto.find();
    }

    async getOne(id){
        return await Producto.findById(id);
    }

    async delete(id){
        return await Productp.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });
    }

    async update(id, producto){
        return await Producto.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, producto , {new: true});
    }
}

export default new productoModelo;
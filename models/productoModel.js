// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name : {type: String, required: true},
//     description: String,
//     price :{ type: Number, required: true},
//     stcok: {type: Number, default: 0},
// })

// module.exports = mongoose.model('productoModel, productSchema');
import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";
class productoModelo{
    async create(producto){
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.insertOne(producto);
    }

    async getAll(){
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.find({}).toArray();
    }

    async getOne(id, producto){
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.findOne({_id : new ObjectId(id)}, producto);
    }

    async delete(id){
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.deleteOne({ _id : new ObjectId(id)});
    }

    async update(id, producto){
        const colProductos = dbClient.db.collection('productos');
        return await colProductos.updateOne({_id : new ObjectId(id)}, {$set: producto});
    }
}

export default new productoModelo;
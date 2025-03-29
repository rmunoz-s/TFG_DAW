// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name : {type: String, required: true},
//     description: String,
//     price :{ type: Number, required: true},
//     stcok: {type: Number, default: 0},
// })

// module.exports = mongoose.model('productoModel, productSchema');
import dbCient from "../config/dbCient.js";
class productoModelo{
    async create(producto){
        const colProductos = dbCient.db.collection('productos');
        return await colProductos.insertOne(producto);
    }
}

export default new productoModelo;
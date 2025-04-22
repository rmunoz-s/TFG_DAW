import mongoose from "mongoose";

// const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    name : {
        type: String, 
        required: true
    },
    description: String,
    price :{ 
        type: Number, 
        required: true},
    stock: 
    {type: Number, 
        default: 0},
}) 
export default mongoose.model('productos',  productoSchema);
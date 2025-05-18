import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  shortDescription:{
    type: String,
    required: true
  },
  longDescription:{
    type:String,
    required: true
  },
  sections:{
    type: [{title: String, content: String}]
    
  },
  features: {
    type: [String],
    default: []
  },
   specifications: {
    type: [String],
    default: []
  },
 
  images: {
  type: [
    {
      id: { type: String, required: true },
      url: { type: String, required: true }
    }
  ],
  default: []
},

  category: {
    type: String,
    enum: ['interior', 'exterior', 'jardinería', 'smart'],
    default: 'smart'
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default productoSchema;

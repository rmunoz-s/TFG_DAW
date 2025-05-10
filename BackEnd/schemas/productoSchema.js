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
  features: {
    type: [String],
    default: []
  },
  imageUrl: {
    type: String,
    default: 'default-pot.jpg'
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

import mongoose from 'mongoose';

const carritoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
    unique: true
  },
  items: [{
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Producto',
      required: true
    },
    cantidad: {
      type: Number,
      required: true,
      min: 1,
      max:10,
      default: 1
    }
  }],
  total: {
    type: Number,
    default: 0,
    min: 0
  }
}, { timestamps: true });


// middleware para calcular el total
carritoSchema.pre('save', async function(next) {
    if (this.isModified('items')) {
      const populatedCart = await this.populate('items.producto');
      this.total = populatedCart.items.reduce((acc, item) => {
        return acc + (item.producto.price * item.cantidad);
      }, 0);
    }
    next();
  });
  

export default carritoSchema;
import Carrito from '../models/carritoModel.js';
import Producto from '../models/productoModel.js';

export const obtenerCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findOne({ usuario: req.usuario.id })
      .populate('items.producto');
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const agregarAlCarrito = async (req, res) => {
  try {
    const producto = await Producto.getOne(req.body.productoId);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    let carrito = await Carrito.findOne({ usuario: req.usuario.id });
    
    if (!carrito) {
      carrito = new Carrito({ usuario: req.usuario.id, items: [] });
    }

    const itemExistente = carrito.items.find(item => item.producto.equals(req.body.productoId));
    
    if (itemExistente) {
      itemExistente.cantidad += 1;
    } else {
      carrito.items.push({ producto: req.body.productoId, cantidad: 1 });
    }

    carrito.total = carrito.items.reduce((total, item) => total + (producto.precio * item.cantidad), 0);
    
    await carrito.save();
    res.json(carrito);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  
};

export const eliminarDelCarrito = async (req, res) => {
    try {
      const { productoId } = req.params;
      
      const carrito = await Carrito.findOne({ usuario: req.usuario.id });
      carrito.items = carrito.items.filter(item => 
        item.producto.toString() !== productoId
      );
      
      await carrito.save();
      res.json({ success: true, data: carrito });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  };
  
  export const vaciarCarrito = async (req, res) => {
    try {
      const carrito = await Carrito.findOneAndUpdate(
        { usuario: req.usuario.id },
        { $set: { items: [], total: 0 } },
        { new: true }
      );
      res.json({ success: true, data: carrito });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
}
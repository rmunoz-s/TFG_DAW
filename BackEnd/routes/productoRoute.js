import express from 'express';
const route = express.Router();
import productoController from '../controllers/productoController.js';
import upload from '../middlewares/uploadMiddleware.js';


route.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`; // Ruta de la imagen subida
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

route.post('/', productoController.create);
route.get('/:id', productoController.getOne);
route.get('/', productoController.getAll);
route.put('/:id', productoController.update);
route.delete('/:id', productoController.delete);

export default route;
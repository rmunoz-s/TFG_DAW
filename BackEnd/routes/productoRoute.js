import express from 'express';
const route = express.Router();
import productoController from '../controllers/productoController.js';
import upload from '../middlewares/uploadMiddleware.js';


route.post('/upload', upload.array('images', 5), async (req, res) => {
  try {
    const ids = Array.isArray(req.body.ids) ? req.body.ids : [req.body.ids];

    const images = req.files.map((file, index) => ({
      id: ids[index] || `img${index + 1}`,
      url: `/uploads/${file.filename}`
    }));

    res.status(200).json({ images });
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
import { Router } from 'express';
import { obtenerCarrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito}
 from '../controllers/carritoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.use(authMiddleware);
router.get('/', obtenerCarrito);
router.post('/agregar', agregarAlCarrito);
router.delete('/:productoId', eliminarDelCarrito);
router.delete('/', vaciarCarrito);

export default router;
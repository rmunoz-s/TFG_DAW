import { Router } from 'express';
import { obtenerCarrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, disminuirCantidad }
 from '../controllers/carritoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.use(authMiddleware);
router.get('/', obtenerCarrito);
router.post('/agregar', agregarAlCarrito);
router.delete('/:productoId', eliminarDelCarrito);
router.delete('/', vaciarCarrito);
router.post('/disminuir', disminuirCantidad);

export default router;
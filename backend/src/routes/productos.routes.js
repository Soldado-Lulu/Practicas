import {Router} from 'express';
import {obtenerProductoPoId } from '../controllers/productos.controller.js';

const router = Router();

router.get('/:id', obtenerProductoPoId);

export default router;
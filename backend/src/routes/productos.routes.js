import {Router} from 'express';
import {obtenerProductoPorId } from '../controller/productos.controller.js';

const router = Router();

router.get('/:id', obtenerProductoPorId);

export default router;
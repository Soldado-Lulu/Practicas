import {
  buscarProductoPorId
} from '../services/productos.service.js';

export const obtenerProductoPorId = (req, res) => {
  const { id } = req.params;

  const producto = buscarProductoPorId(id);

  if (!producto) {
    return res.status(404).json({
      message: 'Producto no encontrado'
    });
  }

  return res.status(200).json({
    data: producto
  });
};
import { productos } from '../data/productos.js';

export const buscarProductoPorId = (id) => {
  const producto = productos.find(
    producto => producto.id === Number(id)
  );

  return producto;
};
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./productos.css";

const Productos = () => {
  const { datos, carrito, setCarrito } = useContext(dataContext);

  const comprarCelular = (producto) => {
    // Verificar si el producto ya está en el carrito
    const existeEnCarrito = carrito.find((item) => item.id === producto.id);

    if (existeEnCarrito) {
      // Si existe en el carrito, actualiza la cantidad
      const nuevoCarrito = carrito.map((item) => {
        if (item.id === producto.id) {
          return {
            ...item,
            cantidad: item.cantidad + 1, // Aumenta la cantidad
          };
        }
        return item;
      });

      setCarrito(nuevoCarrito);
    } else {
      // Si no existe en el carrito, agrégalo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return datos.map((producto) => {
    return (
      <div key={producto.id}>
        <img
          className="img-productos"
          src={producto.img}
          alt="imagen del producto"
        />
        <h3>{producto.name}</h3>
        <h4>{producto.descripcion}</h4>
        <button onClick={() => comprarCelular(producto)}>COMPRAR</button>
      </div>
    );
  });
};

export default Productos;



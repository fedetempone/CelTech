import { useContext } from "react";
import Navbar from "../NavBar/Navbar";
import { dataContext } from "../Context/DataContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./carrito.css";

function formatearPrecio(precio) {
  const precioRedondeado = Math.round(precio * 100) / 100;
  return precioRedondeado.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

const CarritoRender = () => {
  const { carrito, setCarrito } = useContext(dataContext);

  const aumentarCantidad = (producto) => {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === producto.id) {
        return {
          ...item,
          cantidad: item.cantidad + 1,
        };
      }
      return item;
    });
    setCarrito(nuevoCarrito);
  };

  const disminuirCantidad = (producto) => {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === producto.id) {
        const nuevaCantidad = item.cantidad - 1;
        return {
          ...item,
          cantidad: nuevaCantidad >= 1 ? nuevaCantidad : 1,
        };
      }
      return item;
    });
    setCarrito(nuevoCarrito);
  };

  const eliminarProducto = (producto) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      <Navbar />
      <div className="carritoContainer">
        {carrito.map((producto) => (
          <div className="carritoRender" key={producto.id}>
            <div className="carritoImagen">
              <img src={producto.img} alt="imagen de producto" />
            </div>
            <div className="carritoInfo">
              <h3 className="nombre">{producto.name}</h3>
              <div className="cantidad">
                <button
                  className="restar"
                  onClick={() => disminuirCantidad(producto)}
                >
                  -
                </button>
                <input type="text" value={producto.cantidad} readOnly />
                <button
                  className="sumar"
                  onClick={() => aumentarCantidad(producto)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="precio">
              <div className="eliminar">
                <FontAwesomeIcon icon={faTrash} onClick={() => eliminarProducto(producto)} />
              </div>
              <h5 className="price">{formatearPrecio(producto.precio * producto.cantidad)}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarritoRender;

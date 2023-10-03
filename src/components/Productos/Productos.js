import { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../Context/DataContext";
import "./productos.css";

const Productos = () => {
  const { datos, carrito, setCarrito } = useContext(dataContext);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [messagePosition, setMessagePosition] = useState({ top: 0, left: 0 });
  const buttonRefs = useRef([]);

  const comprarCelular = (producto, index) => {
    const existeEnCarrito = carrito.find((item) => item.id === producto.id);
    const buttonPosition = buttonRefs.current[index].getBoundingClientRect();

    if (existeEnCarrito) {
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
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    setMessagePosition({
      top: buttonPosition.top + window.scrollY,
      left: buttonPosition.left + window.scrollX,
    });

    setSuccessMessage(`${producto.name} ha sido añadido al carrito exitosamente.`);
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
      setSuccessMessage("");
    }, 3000);
  };

  return datos.map((producto, index) => {
    return (
      <div key={producto.id}>
        <img
          className="img-productos"
          src={producto.img}
          alt="imagen del producto"
        />
        <h3>{producto.name}</h3>
        <h4>{producto.descripcion}</h4>
        <button
          className="css-button-sliding-to-bottom--blue"
          onClick={() => comprarCelular(producto, index)}
          ref={(button) => (buttonRefs.current[index] = button)}
        >
          COMPRAR
        </button>
        {showSuccessMessage && (
          <div className="productAddedSuccessfully"
            style={{
              top: `${messagePosition.top}px`,
              left: `${messagePosition.left}px`,
            }}
          >
            {successMessage}
            <div>
              <Link to='/carrito'><button className="css-button-shadow-border-sliding--grey">IR AL CARRITO</button></Link>
            </div>
          </div>
        )}
      </div>
    );
  });
};

export default Productos;



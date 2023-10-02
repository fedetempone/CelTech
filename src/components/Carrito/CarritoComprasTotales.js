import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const formatearPrecio = (precio) => {
  return precio.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const CarritoComprasTotales = () => {
  const { carrito } = useContext(dataContext);

  // Calcular el precio total teniendo en cuenta la cantidad de cada producto
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
    0
  );

  if (total === 0) {
    return <h2>Carrito de compras Vacío</h2>;
  } else {
    return (
      <div className="carritoTotal">
        <h3>Total a Pagar: {formatearPrecio(total)}</h3>
      </div>
    );
  }
};

export default CarritoComprasTotales;

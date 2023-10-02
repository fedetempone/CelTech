import { createContext, useState } from "react";
import productosData from "../../productos.json"; // Ruta relativa al archivo JSON

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [datos, setDatos] = useState(productosData);
    const [carrito, setCarrito] = useState([]);
    
    return (
        <dataContext.Provider value={{ datos, carrito, setCarrito }}>
            {children}
        </dataContext.Provider>
    );
}

export default DataProvider;


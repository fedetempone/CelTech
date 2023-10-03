import { createContext, useState } from "react";
import productosData from "../../productos.json";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [datos] = useState(productosData); 
    const [carrito, setCarrito] = useState([]);
    
    return (
        <dataContext.Provider value={{ datos, carrito, setCarrito }}>
            {children}
        </dataContext.Provider>
    );
}

export default DataProvider; 



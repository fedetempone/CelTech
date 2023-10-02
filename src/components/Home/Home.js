import Navbar from "../NavBar/Navbar";
import Productos from "../Productos/Productos";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
    <>
        <Navbar/>
        <Banner/>
        <div className="productos-container">
            <Productos/>
        </div>
    </>
    )
}

export default Home;

//no me esta subiendo el proyecto como corresponde...... eliminar cambio luego
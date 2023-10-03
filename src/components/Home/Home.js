import Navbar from "../NavBar/Navbar";
import Productos from "../Productos/Productos";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <div className="productos-container">
                <Productos />
            </div>
            <Footer />
        </>
    )
}

export default Home;

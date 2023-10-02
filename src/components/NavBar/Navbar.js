import "../NavBar/navBar.css"
import { Link } from "react-router-dom"
import imgLogo from "../img/logo.png"
import imgCart from "../img/cart.png"

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <img className="imgLogo" src={imgLogo} alt="" />
        <Link className="carrito-link" rel="stylesheet" to={"/carrito"}><img className="imgCarrito" src={imgCart} alt="carrito de compras" /></Link>
      </nav>
    </div>
  )
}

export default Navbar
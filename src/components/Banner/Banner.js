import "./banner.css";
import imgBanner from "../img/banner3.jpg"

function Banner() {
  return (
    <div className="container-banner">
      
        <h2>CONECTA, INSPIRA, AVANZA<br></br>Descrube todo sobre nuestros celulares</h2>
      
      <img src={imgBanner} alt="" />
    </div>
  )
}

export default Banner;
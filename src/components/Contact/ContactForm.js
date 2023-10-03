import React, { useState } from "react";
import "./contactForm.css"; 
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('FORMULARIO ENVIADO MUCHAS GRACIAS');
    console.log("Formulario enviado:", formData);
  };

  return (
    <>
        <Navbar/>
        <div className="contact-form-container">
        <h2>Contacto</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit" className="submit-button">
            Enviar
            </button>
        </form>
        </div>
        <div className="footerRenderContainer">
          <Footer/>
        </div>
    </>
  );
};

export default ContactForm;

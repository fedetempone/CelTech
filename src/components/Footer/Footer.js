import React from 'react'
import logo from '../img/logo.png'
import './footer.css'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="footerContainer">
                    <div className="logoFooter">
                        <img src={logo} alt="" />
                    </div>
                    <div className="copyrigth">
                        <p>All Rights reserved 2023</p>
                        <p>Federico Tempone &copy;</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
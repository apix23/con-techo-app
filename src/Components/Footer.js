import React from 'react'

const Footer = () => {
    return (
        <footer class="container-fluid">
            <div className="container footer-container">
                <div className="row footer-elements">
                    <div className="col">
                        <p>ConTecho</p>
                        <a href="#"><p>Quienes Somos</p></a>
                        <a href="#"><p>Cómo funciona</p></a>
                        <a href="#"><p>La calculadora social</p></a>
                    </div>

                    <div className="col">
                        <p>Descubre</p>
                        <a href="#"><p>Viviendas en Barcelona</p></a>
                        <a href="#"><p>Soy propietario</p></a>
                    </div>

                    <div className="col">
                        <p>Contacto</p>
                        <p>Centro de ayuda</p>
                        <p>765 432 229</p>
                        <p>somos@contecho.com</p>
                    </div>

                    <div className="col">
                        <div className="icons-container">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                        <a href="#"><p>Aviso Legal</p></a>
                        <a href="#"><p>Política de privacidad</p></a>
                        <a href="#"><p>Política de cookies</p></a>
                    </div>
                </div>
                <hr/>
                <svg width="35" height="47" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7658 34.9606H35V16.2069L17.5 0L0 16.2069V34.9606H5.27397L5.27397 47L16.7658 34.9606ZM8.75079 38.2123L15.3233 31.3266H31.5232V17.8423L17.5 4.8553L3.47682 17.8423V31.3266H8.75079L8.75079 38.2123Z" fill="white"/>
                </svg>

            </div>    
        </footer>
    )
}

export default Footer

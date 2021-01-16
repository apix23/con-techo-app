import React from 'react';
import CheckmarksCard from './Components/CheckmarksCard';
import peopleBanner from './images/carlos-20ruiz-16-0 1.png';
import PrimaryButton from './Components/PrimaryButton';
import fundacioArrels from './images/fundacio-arrels.png';
import fundacioLibre from './images/fundacio-libre.png';
import ContactForm from './Components/ContactForm';
import ContactSection from './Components/ContactSection';
import { Link} from 'react-router-dom';

const HomePage = () => {
    const searchFuntion = () =>{
        ;
    }
    return (
        <div className="home-page">

            <div className="jumbotron image-container">
                <div className="image-central-text">
                <p>ConTecho</p>
                
                <h1 className="display-4 ">Inmobiliaria con <br/> impacto social</h1>

                </div>
            </div>

            <section className="container information-section">
                <div className="search-menu">
                    <div className="buy-rent-container">
                        <button>Comprar</button>
                        <button>Alquilar</button>
                    </div>
                    <input type="text" placeholder="Localidad"/>
                    <Link to="search"><button className="btn-search" onClick={searchFuntion}>Buscar</button></Link>
                </div>
                <h2 className="section-paragraph">Desde ConTecho queremos que <strong>nuestro proyecto</strong> tenga un impacto en la <br/> sociedad y en la calidad de vida de las personas más desfavorecidas</h2>
                
                <svg width="70" height="23" viewBox="0 0 70 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.730767 0.999997L35.1385 21.6667L69 1" stroke="black"/>
                </svg>

                <h1>¿Cómo podemos ayudarte?</h1>

                <div className="cards-container">
                    <CheckmarksCard 
                        image = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17634e108a2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17634e108a2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        title = "Propietario"
                        items = {["Incentivos fiscales", "Amplia cartera de clientes", "Ayude a una causa social"]}
                        buttonText = "Vender"           
                    />

                    <CheckmarksCard 
                        image = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17634e108a2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17634e108a2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        title = "Comprador"
                        items = {["Amplia oferta de viviendas", "Las mejores condiciones", "Un impacto social real"]}
                        buttonText = "Comprar"           
                    />

                    <CheckmarksCard 
                        image = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17634e108a2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17634e108a2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        title = "Inquilino"
                        items = {["Una comisión 100% social", "Pisos a su medida", "Un asesor personalizado"]}
                        buttonText = "Alquilar"           
                    />
                </div>
            </section>

            <section className="container-fluid social-impact">
                <h1>¡Nuestro impacto social!</h1>

                <div className="social-impact-items-container">
                    <div className="social-impact-item">
                        <h1>151</h1>
                        <h2>Pisos alquilados</h2>

                    </div>


                    <div className="social-impact-item">
                        <h1>10.000</h1>
                        <h2>Contribución</h2>
                    </div>

                    <div className="social-impact-item">
                        <h1>151</h1>
                        <h2>Familias ayudadas</h2>
                    </div>
                </div>
                <svg viewBox="0 0 1437 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M568.28 200.611C1270.67 219.897 1221.19 0.499859 1437 0.499878L1437 362.133L0 362.133C86.8187 339.203 124.525 188.427 568.28 200.611Z" fill="#6186AE"/>
                </svg>
            </section>
            
            <section className="container people">
                <h1>Esto va de personas</h1>
                <h2>Descubre como impactamos en la vida de Paco</h2>

                <div className="row">
                    <div className="col">
                        <figure>
                            <blockquote>
                            Es asombroso ver que con una pequeña donación puedes cambiar el mundo de una persona. Y así dar ejemplo a los más jóvenes de la casa enseñándoles el valor de la solidaridad.
                            </blockquote>
                            <figcaption>Paco Rodríguez Benítez</figcaption>
                        </figure>
                    </div>
                    <div className="col">
                        <img src={peopleBanner} alt="People Banner"/>
                    </div>
                </div>
            </section>
            <section className="carrusel-image-container">
                <h2>Encuentra tu nuevo hogar</h2>
                <PrimaryButton size="small" content="Ver todas las viviendas"/>
            </section>
            
            <section className="collaborators-container">
                <h2>Colaboradores</h2>
                <div className="collaborators-logos">
                <img src={fundacioArrels} alt="Logo Fundacio Arrels" className="arrels"/>
                <img src={fundacioLibre} alt="Logo Fundacio Mambre" className="mambre"/>

                </div>
            </section>

            <ContactSection />
        </div>
    )
}

export default HomePage;

import React from 'react';

const HomePage = () => {
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

            </div>
            <p className="section-paragrah">Desde ConTecho queremos que <strong>nuestro proyecto</strong> tenga un impacto en la <br/> sociedad y en la calidad de vida de las personas más desfavorecidas</p>
            <h3>¿Cómo podemos ayudarte?</h3>
            <i class="fas fa-chevron-down"></i>
        </section>
        </div>
    )
}

export default HomePage;

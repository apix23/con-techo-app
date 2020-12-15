import React from 'react'
import mainBanner from './images/aboutUsMainBanner.png'
import value1 from './images/value-1.png'
import value2 from './images/value-2.png'
import value3 from './images/value-3.png'
import value4 from './images/value-4.png'
import socialImpact from './images/values-picture.png'

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="container-fluid description">
                <div className="row">
                    <div className="col-6 offset-1">
                        <h1>ConTecho, la primera inmobiliaria con valores de impacto social</h1>

                        <p class="font-weight-bold">ConTecho nace de la necesidad y la inquietud de resolver una situación que crece a gran velocidad: el sinhogarismo. </p>

                        <p>Una realidad que aunque muchos no la quieran ver, existe y está más cerca de lo que creen. </p>

                        <p>Por otro lado nos encontramos con el abuso de precios que ejerce el sector inmobiliario y el descontento que genera en la sociedad por lo que queremos ofrecer una vivienda digna y equitativa para todos</p>
                    </div>
                    <div className="col-5">
                        <img src={mainBanner} alt="Main Banner"/>
                    </div>
                </div>
            </section>

            <section className="values-container">
                <h1 className="text-center">Nuestros valores</h1>

                <div className="container d-flex flex-column">
                    <div className="value-items-row">
                        <div className="value-item d-flex">
                            <img className="mr-3" src={value1} alt="value picture"/>
                            <div>
                                <p className="font-weight-bold mt-3">Confianza</p>
                                <p>Hablamos claro y con transparencia para generar confianza en los diferentes niveles de comunicación. Queremos ser cohherentes con lo que pensamos, sentimos y hacemos.</p>
                            </div>
                        </div>

                        <div className="value-item d-flex">
                            <img className="mr-3" src={value2} alt="value picture"/>
                            <div>
                                <p className="font-weight-bold mt-3">Compromiso</p>
                                <p>Tenemos una responsabilidad con cada uno de nuestros actos para conseguir reducir el sinhogarismo y garantizar una vivienda digna a las personas sin hogar.</p>
                            </div>
                        </div>
                    </div>

                    <div className="value-items-row">
                        <div className="value-item d-flex">
                            <img className="mr-3" src={value3} alt="value picture"/>
                            <div>
                                <p className="font-weight-bold mt-3">Impacto</p>
                                <p>Promovemos una vivienda justa y digna para tod@s</p>
                            </div>
                        </div>

                        <div className="value-item d-flex">
                            <img className="mr-3" src={value4} alt="value picture"/>
                            <div>
                                <p className="font-weight-bold mt-3">Innovación</p>
                                <p>Implementamos la creatividad en nuestro modelo de negocio para dar soluciones diferentes a una problemática social</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container ecosystem-container">
                <h1>Cómo lo hacemos - nuestro ecosistema</h1>
                <p>Tenemos en el corazón de nuestro negocio el propósito de ayudar<br/>a las personas más desfavorecidas, los sin techo. </p>
                <img src={socialImpact} alt=""/>
            </section>
        </div>
    )
}

export default AboutUs

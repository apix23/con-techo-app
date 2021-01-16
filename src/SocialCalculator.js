import React from 'react'

function SocialCalculator() {
    return (
        <>
            <section className="container-fluid calculator-container">
                <p className="goToAparments">&lt;&lt; Ver todos los pisos</p>
                <h1>Calcula <br/> tu impacto %</h1>
                <hr/>
                <div className="input-radio-container">
                    <div className="d-flex">
                        <input type="radio" id="buy" name="rent-buy"/>
                        <label htmlFor="buy">COMPRA</label>
                    </div>
                    <div className="d-flex">
                        <input type="radio" id="rent" name="rent-buy"/>
                        <label htmlFor="rent">ALQUILER</label>
                    </div>
                </div>
                <p>Escribe aquí el valor del piso para calcular 
                <br/> el valor de tu aportación</p>
                <input type="text"/>
            </section>
            
            <section className="comission-container">
                <p>1700€</p>
                <p><strong>Esta es tu comisión.</strong> <br/> 
                Destinamos el total a la causa social</p>
            </section>
            <section className="destination-comission-container">
                <h2>A qué va destinada tu comisión</h2>

                <div className="division-comission">
                    <div className="tramits-partner-social">
                        <p>Trámites</p>
                        <p>700 <br/> <span>eur.</span></p>
                        <p>Todos los gastos están<br/> siempre justificados.</p>
                    </div>
                    <div className="tramits-partner-social">
                    <p>Partner social</p>
                        <p>1000 <br/> <span>eur.</span></p>
                        <p>Destinado a dar vivienda <br/>
                        a personas sin hogar. </p>
                    </div>
                </div>
                <h2>Cómo impacta el porcentaje</h2>
                <div className="grafics-container">

                </div>
            </section>
        </>
    )
}

export default SocialCalculator

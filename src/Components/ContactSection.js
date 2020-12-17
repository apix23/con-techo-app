import React from 'react'
import ContactForm from './ContactForm'
import contactImage from '../images/form-banner.png'

const ContactSection = () => {
    return (
        <section className="contact-container">
            <div className="contact-container-flex">
                <aside>
                    <div className="contact-container-text">
                        <h2>¿Tienes alguna pregunta?</h2>
                        <p>Rellena el formulario y nos pondremos en <br/> contacto contigo lo antes posible.</p>
                    </div>
                    <img src={contactImage} alt=""/>
                </aside>
                <ContactForm/>
            </div>
        </section>
    )
}

export default ContactSection

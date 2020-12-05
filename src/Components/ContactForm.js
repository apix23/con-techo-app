import React from 'react'
import PrimaryButton from './PrimaryButton'

const ContactForm = () => {
    return (
        <div class="contact-form shadow-and-border-radius">
            <h2>Contáctanos</h2>

            <div class="alert alert-success" role="alert">
                ¡Gracias! Pronto nos pondremos en contacto contigo.
            </div>

            <form>
                <div class="form-check form-check-inline mt-2 mb-4">
                    <input
                        class="form-check-input"
                        type="radio"
                        id="propietario-radio"
                        value="propietario"
                    />
                    <label class="form-check-label" for="propietario-radio">Soy propietario</label>
                </div>

                <div class="form-check form-check-inline mt-2 mb-4">
                    <input
                        class="form-check-input"
                        type="radio"
                        id="inquilino-radio"
                        value="inquilino"
                    />
                    <label class="form-check-label" for="inquilino-radio">Soy inquilino</label>
                </div>

                <div class="form-group">
                    <label for="name-input">Nombre</label>
                    <input
                        type="text"
                        class="form-control"
                        id="name-input"
                    />
                </div>

                <div class="form-group">
                    <label for="email-input">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email-input"
                    />
                </div>

                <div class="form-group">
                    <label for="phone-input">Número de teléfono</label>
                    <input
                        type="text"
                        class="form-control"
                        id="phone-input"
                    />
                </div>

                <div class="form-check mt-2 mb-4">
                    <input
                        class="form-check-input"
                        type="radio"
                        id="politica-privacidad-radio"
                        value="politica-privacidad"
                    />
                    <label class="form-check-label" for="politica-privacidad-radio">Acepto la <a href="#">política de privacidad</a></label>
                </div>

                <PrimaryButton size="big" content="Solicitar información"/>
            </form>
        </div>
    )
}

export default ContactForm

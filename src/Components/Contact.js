import React from "react";
import ContactForm from "./ContactForm";
import contactImage from "../images/form-banner.png";

const Contact = () => {
  return (
    <section className="contact-container">
      <aside>
        <div className="contact-container-text">
          <h2>¬øTienes alguna pregunta?</h2>
          <p>
            Rellena el formulario y nos pondremos en <br /> contacto contigo lo
            antes posible.
          </p>
        </div>
        <img src={contactImage} alt="" />
      </aside>
      <ContactForm />
    </section>
  );
};

export default Contact;

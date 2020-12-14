import React from "react";
// import { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, Button } from "react-bootstrap";
import "./App.css";
import PrimaryButton from "./Components/PrimaryButton";

const SendContact = () => (
  <div className="derecha">
    <div className="contact-form shadow-and-border-radius">
      <h2>Contáctanos</h2>

      <div class="alert alert-success" role="alert">
        ¡Gracias! Pronto nos pondremos en contacto contigo.
      </div>

      <form>
        <div class="form-group">
          <label for="phone-input">Número de teléfono</label>
          <input type="text" class="form-control" id="phone-input" />
        </div>

        <div class="form-check mt-2 mb-4">
          <input
            class="form-check-input"
            type="radio"
            id="politica-privacidad-radio"
            value="politica-privacidad"
          />
          <label class="form-check-label" for="politica-privacidad-radio">
            Acepto{" "}
            <a href="#">
              Al dejar mi contacto acepta nuestra política de privacidad
            </a>
          </label>
        </div>

        <PrimaryButton size="big" content="Solicitar información" />
      </form>
    </div>
  </div>
);
export default SendContact;

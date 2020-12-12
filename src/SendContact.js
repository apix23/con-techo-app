import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import PrimaryButton from "./Components/PrimaryButton";

const SendContact = () => (
  <>
    <div className="MostLittle">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <PrimaryButton size="big" content="Enviar la solicitud"/>
      </Form>
    </div>
  </>
);

export default SendContact;

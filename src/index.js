import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ShortDescription from "./ShortDescription";
import Description from "./Description";
import Characteristic from "./Characteristic";
import Maps from "./Maps";
import Credentials from "./Credentials";
import SendContact from "./SendContact";
import Dropdowns from "./Dropdowns";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;
ReactDOM.render(
  <React.StrictMode>
    <Dropdowns />
    <SendContact />

    <App />
    <ShortDescription />
    <Description />
    <Characteristic />
    <div>
      <Maps
        googleMapURL={mapURL}
        containerElement={<div style={{ height: "350px", width: "600px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>cargando</p>}
      />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

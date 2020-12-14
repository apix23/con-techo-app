import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import "./App.css";
import FilterItem from "./Components/FilterItem";

const Dropdowns = () => (
  <div className="row justify-content-around">
    <FilterItem filterName="Barcelona" filterOptions={["Madrid", "Sevilla"]} />
    <FilterItem filterName="Alquilar" filterOptions={["Comprar"]} />
    <FilterItem
      filterName="Barcelona"
      filterOptions={["Barcelona", "Madrid", "Sevilla"]}
    />
    <FilterItem
      filterName="Barcelona"
      filterOptions={["Barcelona", "Madrid", "Sevilla"]}
    />
  </div>
);

export default Dropdowns;

import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import "./App.css";
import FilterItem from "./Components/FilterItem";

const Dropdowns = () => (
  <div class="container button-container mt-4 mb-5">
    <div class="row justify-content-between">
      <div class="btn-group button-container-left">
        <FilterItem
          filterName="Barcelona"
          filterOptions={["Madrid", "Sevilla"]}
        />
        <FilterItem filterName="Alquilar" filterOptions={["Comprar"]} />
        <FilterItem
          filterName="Precio"
          filterOptions={["Barcelona", "Madrid", "Sevilla"]}
        />
        <FilterItem
          filterName="Habitaciones"
          filterOptions={["Barcelona", "Madrid", "Sevilla"]}
        />
        <FilterItem
          filterName="Mas filtros"
          filterOptions={["Barcelona", "Madrid", "Sevilla"]}
        />
      </div>
      <FilterItem
        filterName="Ordenar por"
        filterOptions={["Barcelona", "Madrid", "Sevilla"]}
      />
    </div>
  </div>
);

export default Dropdowns;

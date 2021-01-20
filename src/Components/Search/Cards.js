import React, { Fragment, useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "../Pagination";
import FilterItem from "../FilterItem";

const Cards = () => {
  const [pisos, setPisos] = useState([]);

  const getPisos = async () => {
    try {
      const response = await fetch("http://localhost:5000/db/pisos");
      const jsonData = await response.json();
      console.log(jsonData);
      setPisos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPisos();
  }, []);

  return (
    <Fragment>
      <div className="container mt-4">
        <div className="d-flex align-items-center">
          <p>ConTecho</p>
          <p className="mx-2">{" > "}</p>
          <p>Barcelona Provincia</p>
          <p className="mx-2">{" > "}</p>
          <p>
            <strong>Barcelona</strong>
          </p>
        </div>
        <div>
          <h3>620 casas y pisos en alquiler en Barcelona provincia</h3>
        </div>
        <div className="mt-4 d-flex align-items-center">
          <div className="my-0 mr-2">
            <FilterItem
              filterName={"Barcelona"}
              filterOptions={["Barcelona", "Madrid", "Sevilla"]}
            />
          </div>
          <div className="my-0 mr-2">
            <FilterItem
              filterName={"Alquilar"}
              filterOptions={["Comprar", "Alquilar"]}
            />
          </div>
          <div className="my-0 mr-2">
            <FilterItem
              filterName={"Precio"}
              filterOptions={[
                "0€ - 300€",
                "300€ - 500€",
                "500€ - 1000€",
                "1000€ - 1500€",
                "1500€ - 2000€",
                "2000€ +",
              ]}
            />
          </div>
          <div className="my-0 mr-2">
            <FilterItem
              filterName={"Habitaciones"}
              filterOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
          </div>
          <div className="my-0 mr-2">
            <FilterItem
              filterName={"Más filtros"}
              filterOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            />
          </div>
          <div className="my-0 ml-auto">
            <FilterItem
              filterName={"Ordenar por"}
              filterOptions={["Localización", "Tipo", "Precio", "Habitaciones"]}
            />
          </div>
        </div>
        <div className="row mt-4">
          {pisos.map((piso) => {
            return <Card piso={piso} />;
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center my-4">
        <Pagination numberOfPages={10} activePage={1} />
      </div>
    </Fragment>
  );
};

export default Cards;

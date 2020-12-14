import React, { Fragment, useState, useEffect } from "react";
import Card from "./Card";

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
        <div className="row">
          {pisos.map((piso) => {
            return <Card piso={piso} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;

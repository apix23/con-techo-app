import React, { Fragment, useState, useEffect } from "react";

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
            return (
              <div
                key={piso.id}
                className="col-md-6 col-lg-4 my-4 d-flex align-items-center justify-content-center"
              >
                <div
                  className="p-0"
                  style={{
                    width: "346px",
                    height: "377px",
                    boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    id={`carouselExampleControls${piso.id}`}
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div
                        class="carousel-item active"
                        style={{ height: "225px", overflow: "hidden" }}
                      >
                        <img
                          className="d-block h-100"
                          src={`http://localhost:5000/db/pisos/${piso.general.pics[0]}`}
                          alt="Card image cap"
                        ></img>
                      </div>
                      {piso.general.pics.map((pic, i) => {
                        if (i !== 0) {
                          console.log(i);
                          return (
                            <div
                              class="carousel-item"
                              style={{ height: "225px", overflow: "hidden" }}
                            >
                              <img
                                className="d-block h-100"
                                src={`http://localhost:5000/db/pisos/${piso.general.pics[i]}`}
                                alt="Card image cap"
                              ></img>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <a
                      class="carousel-control-prev"
                      href={`#carouselExampleControls${piso.id}`}
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href={`#carouselExampleControls${piso.id}`}
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{piso.general.price} €/mes</h5>
                    <p className="lead">{`${piso.general.room} hab | ${piso.general.surface} m | ${piso.general.floor}`}</p>
                    <p className="card-text">{piso.general.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;

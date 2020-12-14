import React, { Fragment, useState, useEffect } from "react";

const Card = ({ piso }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Card;

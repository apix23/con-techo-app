import React, { useState } from "react";
import "./App.css";
// //import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "react-bootstrap";
import img from "../src/img/apartamentos-noluna.jpg";
import SendContact from "./SendContact";
const Carousel = () => (
  <div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={img} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img} alt="Third slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col">
          <SendContact />
        </div>
      </div>
    </div>
  </div>
);

export default Carousel;

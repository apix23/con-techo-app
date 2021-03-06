import React from "react";
import logo from "../images/header-logo.png";
import OutlineButton from "./SecondaryOutlineButton";
import OrangeSecondaryButton from "./SecondaryOrangeButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <a class="navbar-brand" href="#">
            <Link to="/"><img src={logo} className="header-logo" alt="ConTecho logo" /></Link>
          </a>

          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Propietarios
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/AboutUs">
                Quiénes Somos
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="Calculadora-social">
                Calculadora social
              </Link>
            </li>
          </ul>

          <div className="button-container">
            <OutlineButton content="Contáctanos" />
            <OrangeSecondaryButton content="Donar" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

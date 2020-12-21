import React from "react";
import Dropdowns from "./Dropdowns";
import Carousel from "./Carousel";
import ShortDescription from "./ShortDescription";
import Description from "./Description";
import Characteristic from "./Characteristic";
import Maps from "./Maps";
import credentials from "./credentials";
import SocialCalculatorButton from "./SocialCalculatorButton";
const ProductPage = () => {
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

  return (
    <div>
      <div className="container">
        <div className="row">
          <Dropdowns />
          <Carousel />
        </div>
        <div className="row">
          <div className="col-sm-7">
            <ShortDescription />
            <SocialCalculatorButton />
            <Description />
            <Characteristic />
            <div>
              <Maps
                googleMapURL={mapURL}
                containerElement={
                  <div style={{ height: "350px", width: "600px" }} />
                }
                mapElement={<div style={{ height: "100%" }} />}
                loadingElement={<p>cargando</p>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

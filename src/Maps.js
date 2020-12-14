import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <div>
      <div>
        <h1>
          <strong>Ubicación</strong>
        </h1>
        <p>Sagrada familia, Calle Aragó</p>
      </div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.392, lng: 150.644 }}
      />
    </div>
  );
};
export default withScriptjs(withGoogleMap(Map));

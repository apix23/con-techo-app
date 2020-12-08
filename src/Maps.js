import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.392, lng: 150.644 }}
    />
  );
};
export default withScriptjs(withGoogleMap(Map));

import React from 'react';
import ReactMapboxGl, { Marker, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import bottle from '../Photos/bottle.png';

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_API_KEY
});
console.log(process.env.REACT_APP_MAPBOX_API_KEY);
const Map = ({ lat, lng }) => {
  return (
    <MapBox
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '300px',
        width: '425px'
      }}
      center={[lng, lat]}
    >
      <Marker coordinates={[lng, lat]} className="marker">
        <img
          className="marker-icon"
          src={bottle}
          // "https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F37A-beer-mug-512.png"
        />
      </Marker>
      <ZoomControl />
    </MapBox>
  );
};
export default Map;

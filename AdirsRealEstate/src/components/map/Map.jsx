/* eslint-disable react/prop-types */
import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import Pin from '../mapLocations/Pin';

const Map = ({ locations }) => {
  return (
    <MapContainer
      center={[51.5072, 0.1276]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => {
        return <Pin location={location} key={location.id} />;
      })}
    </MapContainer>
  );
};

export default Map;

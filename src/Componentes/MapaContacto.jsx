import './fixLeafletIcons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix de los íconos de Leaflet que a veces no cargan


const MapaContacto = () => {
  const position = [-34.9011, -56.1645]; // Coordenadas de Montevideo

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            ¡Acá estamos! <br /> Montevideo, Uruguay
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapaContacto;

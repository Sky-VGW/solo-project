import React from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';

const MyMap = () => {
  const position = [51.505, -0.09];

  return (
    <MapContainer center ={position} zoom={13} style={{ height: '800px', width:'800px', borderRadius: '30px' }}>
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position} />
    </MapContainer>
  );
}

export default MyMap;
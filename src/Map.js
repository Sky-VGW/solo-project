import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';

  
const MyMap = () => {
const [markers, setMarkers] = useState([]);
const [popupContent, setPopupContent] = useState({})

const handleInputChange = (popupId, e) => {
  e.preventDefault();
  const updatedContent = { ...popupContent, [popupId]: e.target[0].value };
  setPopupContent(updatedContent);
}

const handleMapClick = (e) => {
  const { lat, lng } = e.latlng;
  const newMarker = {
    id: Math.random(),
    latlng: { lat, lng }
  };
  setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  // console.log(markers);
}

const MapClickHandler = () => {
  useMapEvents({
    click:handleMapClick
  })
  return null;
};
  
  return (
    <MapContainer
      center ={[40.748, -73.993]}
      zoom={13}
      style={{ height: '600px', width:'600px', borderRadius: '300px' }}
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />

      <Marker position={[40.748, -73.993]} >
        <Popup>
          This is Codesmith<br/>I live here
        </Popup>
      </Marker> 

      <MapClickHandler />

      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.latlng} >
          <Popup id={marker.id}>
            <form onSubmit={(e) => handleInputChange(marker.id, e)}>
              <label for={marker.id}>Enter text:</label> 
              <input
                id={marker.id}
                type="text"
                // value={popupContent[marker.id]}
              />
              <input type='submit' value='submit'/>
            </form>
            <p>{popupContent[marker.id]}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MyMap;
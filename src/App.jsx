import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import SetUserPosition from './components/SetUserPosition';
import AddMarker from './components/AddMarker';
import './style.css';

export default function App() {
  const [userLocation, setUserLocation] = useState({});
  const [position, setPosition] = useState({x: 200, y: 200});
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [mouseDown, setMouseDown] = useState(false);
  const [addMarkerMode, setAddMarkerMode] = useState(false);
  const [deleteMarkerMode, setDeleteMarkerMode] = useState(false);
  const [markers, setMarkers] = useState([]);
  
  function mainDivClicked(ev) {
    setMouseDown(true);
    setMousePos({x: ev.pageX-position.x, y: ev.pageY-position.y});
  }

  function mainDivMoved(ev) {
    if (mouseDown) {
      setPosition({x: ev.pageX-mousePos.x, y: ev.pageY-mousePos.y});
    }
  }

  function addNewMarker(latlng) {
    let newMarker = {latlng};
    setMarkers([...markers, newMarker]);
    setAddMarkerMode(false);
  }
  
  function addButtonClicked() {
    setAddMarkerMode(!addMarkerMode);
    setDeleteMarkerMode(false);
  }

  function deleteButtonClicked() {
    setDeleteMarkerMode(!deleteMarkerMode);
    setAddMarkerMode(false);
  }
  

  return (
    <div>
      <h1>Maps App</h1>
      <MapContainer id='map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          markers.map(marker => <Marker key={marker.latlng} position={marker.latlng}></Marker>)
        }
        <SetUserPosition />
        <AddMarker addMarker={addMarkerMode} addNewMarker={addNewMarker} />
      </MapContainer>
      <h2>Options</h2>
      {/* <button className='button' >Go to my location</button> */}
      {/* <button className={addMarkerMode ? 'button-toggled' : 'button'} onClick={addButtonClicked}>Add Marker</button>
      <br/><br/>
      <button className={deleteMarkerMode ? 'button-negative-toggled': 'button-negative'} onClick={deleteButtonClicked}>Delete Marker</button> */}
    </div>
  )
}

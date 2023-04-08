import { useState, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

export default function SetUserPosition() {
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
        map.locate();
        map.addEventListener('locationfound', (ev) => {
            setPosition(ev.latlng);
            map.setView(ev.latlng);
        });
    }, []);

    function goToUserLocation() {
        map.locate();
    }

    if (!position) return null;
    
    return <Marker position={position}>
        <Popup>This is your position</Popup>
        <p>Text</p>
    </Marker>
}
import { useMapEvent } from 'react-leaflet';

export default function AddMarker({ addMarker, addNewMarker }) {
    const map = useMapEvent('click', (ev) => {
        if (addMarker) {
            addNewMarker(ev.latlng);
        }
    });

    return null;
}
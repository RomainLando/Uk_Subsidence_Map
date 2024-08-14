import {useState, useEffect} from "react";
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import Risk from "../Components/Risk"

function UKMap() {

    const [markerLocation, setMarkerLocation] = useState(null);
    const [probability, setProbability] = useState('Data Unavailable');
    const map = useMapEvents({
        click(e) {
          map.locate();
          setMarkerLocation(e.latlng);
        },
      })
    
    useEffect(() => {
        if (markerLocation) {
        fetch(`http://localhost:3001/${markerLocation.lat}/${markerLocation.lng}`)
        .then(res => res.json())
        .then(data => setProbability(data[0].class));
        }
    }, [markerLocation])

    return (
        <>
            {markerLocation && (
                <Marker position={markerLocation} >
                <Popup>
                    <Risk probability={probability} />
                </Popup>
            </Marker>
            )}
        </>
    );
}

export default UKMap;
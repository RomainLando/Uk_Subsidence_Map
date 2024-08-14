import { MapContainer, TileLayer } from 'react-leaflet';
import '../App.css';
import UKMap from "./UKMap";

function App() {
  return (
    <>
      <header>
        <h1>Subsidence Mapper</h1>
      </header>
      <main>
        <section className='text'>
          <p>
          Land subsidence is a gradual settling or sudden sinking of the Earth’s surface. is most often caused by the removal of water, oil, natural gas, or mineral resources out of the ground by pumping, fracking, or mining activities. 
          It can also be accelerated by climate change. This map provides a prediction of the risk of subsidence in the UK in 2070, accounting for the changing environmental conditions brought on by climate change.<br/><br/>
          To use this map, simply select a location on the map to place a marker at you desired location, then click the popup to reveal the risk for that location.
          </p>
          <h2>Select a spot in the UK to get started</h2>
        </section>
        <div className="atlas">
          <MapContainer center={[55.3781, -3.4360]} dragging={true} zoom={5} scrollWheelZoom={true} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            <UKMap />
          </MapContainer>
        </div>
      </main>
      <footer>
        <div className='references'>
          <h4>Built with:</h4>
          <ul>
            <li><a href='https://www.bgs.ac.uk/datasets/geoclimateukcp18-open/'>The geoclimateukcp18 dataset</a></li>
            <li><a href='https://postgis.net/'>PostGIS</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;

import './map-and-playgrounds.scss';
import MapComponent from '../map/map';
import PlayGroundsComponent from '../playgrounds/playgrounds';
// import { MapComponentTest } from '../map/map2';
// import { mapPresets } from '../map/constants';
// import { useJsApiLoader } from '@react-google-maps/api';

const API_KEY = import.meta.env.VITE_API_KEY;
const MAP_ID = import.meta.env.VITE_MAP_ID;

const MapAndPlaygrounds = () => {
  return (
    <div className="maps-playgrounds">
      <MapComponent />
      <PlayGroundsComponent />
    </div>
  );
};

export default MapAndPlaygrounds;

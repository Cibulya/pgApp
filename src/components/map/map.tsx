import './map.scss';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const API_KEY = import.meta.env.VITE_API_KEY;

const MapComponent = () => {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        style={{ width: '100%', height: '100%' }}
        defaultCenter={{ lat: 22.594, lng: 0 }}
        defaultZoom={10}
        disableDefaultUI={true}
      >
        Map here
      </Map>
    </APIProvider>
  );
};

export default MapComponent;

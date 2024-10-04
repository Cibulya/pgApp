import './map.scss';
import {
  APIProvider,
  Map,
  MapControl,
  ControlPosition,
} from '@vis.gl/react-google-maps';
import Marker from '../marker/marker';
import { useAppSelector } from '../../hooks/redux-hook';

const API_KEY = import.meta.env.VITE_API_KEY;
const MAP_ID = import.meta.env.VITE_MAP_ID;

const MapComponent = () => {
  const pins = useAppSelector(state => state.playgr.playgrounds.playgrounds);
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        mapId={MAP_ID}
        style={{ width: '100%', height: '790px' }}
        defaultCenter={{ lat: 39.86626326395293, lng: -86.12409681693246 }}
        defaultZoom={15}
        disableDefaultUI={true}
        disableDoubleClickZoom={true}
      >
        {pins.map(pin => (
          <Marker
            key={pin.id}
            gps={pin.gps}
            id={pin.id}
            image={pin.image}
            address={pin.address}
            title={pin.title}
            features={pin.features}
          />
        ))}

        <MapControl position={ControlPosition.BOTTOM_LEFT}>
          <button>Click</button>
        </MapControl>
      </Map>
    </APIProvider>
  );
};

export default MapComponent;

import './map.scss';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { MapControls, mapPresets } from '../../constants/map-constants';
import Marker from '../marker/marker';
import { useAppSelector } from '../../hooks/redux-hook';
import CustomMapControls from './map-controls';
import SearchForm from './search-form';
import { FC } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;
const MAP_ID = import.meta.env.VITE_MAP_ID;

const MapComponent: FC = () => {
  const pins = useAppSelector(state => state.pgReducer.playgrounds);
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        className="map"
        mapId={MAP_ID}
        style={mapPresets.mapStyle}
        defaultCenter={mapPresets.center}
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
        <AdvancedMarker position={mapPresets.center}>
          <img src={MapControls.center} alt="center" />
        </AdvancedMarker>
        <CustomMapControls />
      </Map>
      <SearchForm />
    </APIProvider>
  );
};

export default MapComponent;

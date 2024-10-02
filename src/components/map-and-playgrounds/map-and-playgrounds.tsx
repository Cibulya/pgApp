import './map-and-playgrounds.scss';
import MapComponent from '../map/map';

// import { useAppSelector } from '../../hooks/redux-hook';

const MapAndPlaygrounds = () => {
  return (
    <div className="maps-playgrounds">
      <MapComponent />
    </div>
  );
};

export default MapAndPlaygrounds;

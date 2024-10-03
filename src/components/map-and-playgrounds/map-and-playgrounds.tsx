import './map-and-playgrounds.scss';
import MapComponent from '../map/map';
import PlayGroundsComponent from '../playgrounds/playgrounds';

const MapAndPlaygrounds = () => {
  return (
    <div className="maps-playgrounds">
      <MapComponent />
      <PlayGroundsComponent />
    </div>
  );
};

export default MapAndPlaygrounds;

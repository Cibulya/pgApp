import { MapControl, ControlPosition, useMap } from '@vis.gl/react-google-maps';
import { MapControls } from './constants';
import { mapPresets } from './constants';

const CustomMapControls = () => {
  const map = useMap();
  const center = () => {
    map?.setCenter(mapPresets.center);
  };

  const zoomIn = () => {
    const currentZoom = map?.getZoom() as unknown as number;
    map?.setZoom(currentZoom + 1);
  };

  const zoomOut = () => {
    const currentZoom = map?.getZoom() as unknown as number;
    map?.setZoom(currentZoom - 1);
  };

  return (
    <div className="map-controls">
      <MapControl position={ControlPosition.BOTTOM_LEFT}>
        <button onClick={center}>
          <img
            className="center"
            src={MapControls.navToCenter}
            alt="nav-to-center"
          />
        </button>
      </MapControl>
      <MapControl position={ControlPosition.BOTTOM_LEFT}>
        <button onClick={zoomIn}>
          <img className="zoom-in" src={MapControls.zoomIn} alt="zoomIn" />
        </button>
      </MapControl>
      <MapControl position={ControlPosition.BOTTOM_LEFT}>
        <button onClick={zoomOut}>
          <img className="zoom-out" src={MapControls.zoomOut} alt="zoomOut" />
        </button>
      </MapControl>
    </div>
  );
};

export default CustomMapControls;

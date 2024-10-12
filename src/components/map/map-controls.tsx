import { MapControl, ControlPosition, useMap } from '@vis.gl/react-google-maps';
import { MapControls, mapPresets } from '../../constants/map-constants';
import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { mediaQuerias } from '../../constants/mediaquerias';

const CustomMapControls: FC = () => {
  const isMobile = useMediaQuery({ query: mediaQuerias.tablet });
  const map = useMap();

  const center = () => {
    map?.panTo(mapPresets.center);
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
    <div id="map-controls">
      <MapControl position={ControlPosition.BOTTOM_LEFT}>
        <button id={!isMobile ? 'center' : 'center-mobile'} onClick={center}>
          <img src={MapControls.navToCenter} alt="nav-to-center" />
        </button>
      </MapControl>
      {!isMobile ? (
        <>
          <MapControl position={ControlPosition.BOTTOM_LEFT}>
            <button onClick={zoomIn}>
              <img id="zoom-in" src={MapControls.zoomIn} alt="zoomIn" />
            </button>
          </MapControl>
          <MapControl position={ControlPosition.BOTTOM_LEFT}>
            <button onClick={zoomOut}>
              <img id="zoom-out" src={MapControls.zoomOut} alt="zoomOut" />
            </button>
          </MapControl>
        </>
      ) : null}
    </div>
  );
};

export default CustomMapControls;

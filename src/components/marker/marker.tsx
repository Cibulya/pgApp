import './marker.scss';
import { AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import { OverlayView } from '@react-google-maps/api';
import { Playground } from '../../interfaces/playground';
// import { useState } from 'react';

const Marker = (
  pin: Pick<
    Playground,
    'gps' | 'id' | 'address' | 'image' | 'title' | 'features'
  >
) => {
  // const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <AdvancedMarker position={pin.gps}>
        <Pin
          background={'rgba(195, 8, 115, 1)'}
          borderColor={'rgba(255, 255, 255, 1)'}
          glyphColor={'white'}
        />
      </AdvancedMarker>
    </>
  );
};

export default Marker;

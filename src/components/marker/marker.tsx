import './marker.scss';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Playground } from '../../interfaces/playground';
import CustomInfoWindow from './info-window';
import { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useAppSelector } from '../../hooks/redux-hook';

const Marker = (
  pin: Pick<
    Playground,
    'gps' | 'id' | 'address' | 'image' | 'title' | 'features'
  >
) => {
  const [open, setOpen] = useState<boolean>(false);
  const pgData = useAppSelector(state => state.playgr.playgrounds.playgrounds);
  const singlePG = pgData.find(e => e.id === pin.id) as unknown as Playground;
  const ref = useOnclickOutside(() => {
    setOpen(false);
  });

  const handleClickBtn = () => {
    setOpen(!open);
  };

  return (
    <>
      <AdvancedMarker onClick={handleClickBtn} position={pin.gps}>
        <Pin
          background={'rgba(195, 8, 115, 1)'}
          borderColor={'rgba(255, 255, 255, 1)'}
          glyphColor={'white'}
        />
        {open && (
          <AdvancedMarker
            ref={ref}
            className="info"
            style={{
              backgroundColor: 'white',
              border: '0.5px solid rgba(196, 196, 196, 0.3)',
              borderRadius: '8px',
              width: '440px',
              transform: 'translateY(-60px)',
              zIndex: '20',
              cursor: 'pointer',
            }}
            clickable={true}
            onClick={() => {}}
            position={pin.gps}
          >
            <CustomInfoWindow
              id={singlePG.id}
              address={singlePG.address}
              image={singlePG.image}
              title={singlePG.title}
              features={singlePG?.features}
            ></CustomInfoWindow>
          </AdvancedMarker>
        )}
      </AdvancedMarker>
    </>
  );
};

export default Marker;

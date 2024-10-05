import './marker.scss';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Playground } from '../../interfaces/playground';
import CustomInfoWindow from './info-window';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hook';
import { useNavigate } from 'react-router-dom';

const Marker = (
  pin: Pick<
    Playground,
    'gps' | 'id' | 'address' | 'image' | 'title' | 'features'
  >
) => {
  const [open, setOpen] = useState<boolean>(false);
  const pgData = useAppSelector(state => state.playgr.playgrounds.playgrounds);
  const singlePG = pgData.find(e => e.id === pin.id) as unknown as Playground;
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/playgrounds/${pin.id}`);
  };

  return (
    <>
      <AdvancedMarker onClick={() => setOpen(!open)} position={pin.gps}>
        <Pin
          background={'rgba(195, 8, 115, 1)'}
          borderColor={'rgba(255, 255, 255, 1)'}
          glyphColor={'white'}
        />
        {open && (
          <AdvancedMarker
            className="info"
            style={{
              backgroundColor: 'white',
              border: '0.5px solid rgba(196, 196, 196, 0.3)',
              borderRadius: '8px',
              width: '440px',
              transform: 'translateY(-60px)',
              cursor: 'pointer',
              zIndex: '100',
            }}
            clickable={true}
            onClick={navigateTo}
            position={pin.gps}
          >
            <div>
              <CustomInfoWindow
                id={singlePG.id}
                address={singlePG.address}
                image={singlePG.image}
                title={singlePG.title}
                features={singlePG?.features}
              />
            </div>
          </AdvancedMarker>
        )}
      </AdvancedMarker>
    </>
  );
};

export default Marker;

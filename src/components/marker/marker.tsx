import './marker.scss';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Playground } from '../../interfaces/playground';
import CustomInfoWindow from './info-window';
import { FC, useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hook';
import { useNavigate } from 'react-router-dom';
import { convertTitleToUrl } from '../../utils/convert-title-to-url';
import { markerStyles, pinStyles } from '../../constants/map-constants';
import { MarkerProps } from '../../interfaces/marker-interface';

const Marker: FC<MarkerProps> = (pin: MarkerProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const pgData = useAppSelector(state => state.pgReducer.playgrounds);
  const singlePG = pgData.find(e => e.id === pin.id) as unknown as Playground;
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/${convertTitleToUrl(pin.title)}`);
  };

  return (
    <>
      <AdvancedMarker onClick={() => setOpen(!open)} position={pin.gps}>
        <Pin
          background={pinStyles.background}
          borderColor={pinStyles.borderColor}
          glyphColor={pinStyles.glyphColor}
        />
        {open && (
          <AdvancedMarker
            className="info"
            style={markerStyles}
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

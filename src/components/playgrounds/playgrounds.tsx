import './playgrounds.scss';
import PgList from '../pg-list/pg-list';
import { Playground } from '../../interfaces/playground';
import { FC, useState } from 'react';
// import { ArrowImages } from '../../text-mocks/playgrounds-security-section';
import MobilePlaygrounds from '../mobile-playgrounds/mobile-playgrounds';
import { useMediaQuery } from 'react-responsive';
import { mediaQuerias } from '../../constants/mediaquerias';
import { useAppSelector } from '../../hooks/redux-hook';

export type PGPick = Pick<
  Playground,
  'title' | 'features' | 'address' | 'image' | 'id'
>;

const PlayGroundsComponent: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const isMobile = useMediaQuery({ query: mediaQuerias.phone });
  const pgArr = useAppSelector(state => state.pgReducer.playgrounds);

  return (
    <div className="pg-list-container">
      {/* <button
        className="pg-hide-button"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <img src={isOpen ? ArrowImages.right : ArrowImages.left} alt="arrow" />
      </button> */}
      {isMobile ? <MobilePlaygrounds playgrounds={pgArr} /> : <PgList />}
    </div>
  );
};

export default PlayGroundsComponent;

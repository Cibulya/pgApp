import './playgrounds.scss';
import PgList from '../pg-list/pg-list';
import { FC } from 'react';
import MobilePlaygrounds from '../mobile-playgrounds/mobile-playgrounds';
import { useMediaQuery } from 'react-responsive';
import { mediaQuerias } from '../../constants/mediaquerias';
import { useAppSelector } from '../../hooks/redux-hook';

const PlayGroundsComponent: FC = () => {
  const isMobile = useMediaQuery({ query: mediaQuerias.phone });
  const pgArr = useAppSelector(state => state.pgReducer.playgrounds);

  return (
    <div className="pg-list-container">
      {isMobile ? (
        <MobilePlaygrounds playgrounds={pgArr} />
      ) : (
        <PgList playgrounds={pgArr} />
      )}
    </div>
  );
};

export default PlayGroundsComponent;

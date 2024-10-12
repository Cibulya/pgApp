import PgFeatures from '../pg-list/gp-fetures';
import { PGPick } from '../../interfaces/playground';
import copyIcon from '../../assets/icons/copy.svg';
import './marker.scss';
import { FC } from 'react';

const CustomInfoWindow: FC<PGPick> = pg => {
  return (
    <div className="pg-list-li">
      <button className="pg-list-li-copy" type="button">
        <img src={copyIcon} alt="copy-icon" />
      </button>

      <img className="pg-list-li-image" src={pg.image} alt={pg.title} />
      <div className="pg-list-li-info">
        <p className="pg-list-li-title">{pg.title}</p>
        <p className="pg-list-li-addres">{pg.address}</p>
        <PgFeatures features={pg.features} />
      </div>
    </div>
  );
};

export default CustomInfoWindow;

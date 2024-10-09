import { PGPick } from '../../interfaces/playground';
import PgFeatures from './gp-fetures';
import copyIcon from '../../assets/icons/copy.svg';
import { FC } from 'react';

const PgListLI: FC<PGPick> = (pgLi: PGPick) => {
  return (
    <li className="pg-list-li">
      <button className="pg-list-li-copy" type="button">
        <img src={copyIcon} alt="copy-icon" />
      </button>

      <img className="pg-list-li-image" src={pgLi.image} alt={pgLi.title} />
      <div className="pg-list-li-info">
        <p className="pg-list-li-title">{pgLi.title}</p>
        <p className="pg-list-li-addres">{pgLi.address}</p>
        <PgFeatures features={pgLi.features} />
      </div>
    </li>
  );
};

export default PgListLI;

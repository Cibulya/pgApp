import { PGPick } from '../playgrounds/playgrounds';
import PgFeatures from './gp-fetures';
import copyIcon from '../../assets/icons/copy.svg';

const PgListLI = (pgLi: PGPick) => {
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

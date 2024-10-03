import { PGPick } from '../playgrounds/playgrounds';
import PgFeatures from './gp-fetures';

const PgListLI = (pgLi: PGPick) => {
  return (
    <li className="pg-list-li">
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

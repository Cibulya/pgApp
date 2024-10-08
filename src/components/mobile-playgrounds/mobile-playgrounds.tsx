import { Playground } from '../../interfaces/playground';
import './mobile-playgrounds.scss';
import { FC } from 'react';
import PgListLI from '../pg-list/pg-list-li';

const MobilePlaygrounds: FC<Playground[]> = playgrounds => {
  return (
    <div className="mobile-pg-container">
      <button>
        <img className="mobile-pg-button" src="" alt="arrow" />
      </button>
      <ul className="mobile-pg-list">
        {playgrounds.map(playground => {
          return (
            <PgListLI
              title={playground.title}
              features={playground.features}
              address={playground.address}
              image={playground.image}
              id={playground.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MobilePlaygrounds;

import { Playgrounds } from '../../interfaces/playground';
import { PGPick } from '../playgrounds/playgrounds';
import PgListLI from './pg-list-li';
import { useAppSelector } from '../../hooks/redux-hook';
const PgList = () => {
  const pgData = useAppSelector(state => state.playgr.playgrounds.playgrounds);

  return (
    <ul className="pg-list">
      {pgData.map(pg => {
        return (
          <PgListLI
            key={pg.id}
            title={pg.title}
            features={pg.features}
            address={pg.address}
            image={pg.image}
            id={pg.id}
          />
        );
      })}
    </ul>
  );
};

export default PgList;

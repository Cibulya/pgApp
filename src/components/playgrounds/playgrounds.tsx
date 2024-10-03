import './playgrounds.scss';
import PgList from '../pg-list/pg-list';
import { Playground } from '../../interfaces/playground';
import { useAppSelector } from '../../hooks/redux-hook';
export type PGPick = Pick<
  Playground,
  'title' | 'features' | 'address' | 'image' | 'id'
>;

const PlayGroundsComponent = () => {
  return (
    <>
      <button>HIDE</button>
      <PgList />
    </>
  );
};

export default PlayGroundsComponent;

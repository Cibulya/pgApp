import { Playground } from '../../interfaces/playground';
import BreadCrums from '../breadcrumbs/breadcrumbs';

type PgInfo = Pick<
  Playground,
  'address' | 'id' | 'image' | 'features' | 'discription'
>;

const PlaygroundInfo = (playground: PgInfo) => {
  return (
    <div>
      <BreadCrums />
    </div>
  );
};

export default PlaygroundInfo;

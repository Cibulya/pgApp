import { Playground } from './playground';

export type MarkerProps = Pick<
  Playground,
  'gps' | 'id' | 'address' | 'image' | 'title' | 'features'
>;

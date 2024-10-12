import { Playground } from '../interfaces/playground';

export const filteredPgArray = (payload: string, arr: Playground[]) => {
  const filtered = arr.filter(
    e =>
      e.title.toLowerCase().includes(payload.toLowerCase()) ||
      e.address.toLowerCase().includes(payload.toLowerCase())
  );
  return filtered;
};

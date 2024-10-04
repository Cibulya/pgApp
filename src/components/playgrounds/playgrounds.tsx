import './playgrounds.scss';
import PgList from '../pg-list/pg-list';
import { Playground } from '../../interfaces/playground';
import { useState } from 'react';

export type PGPick = Pick<
  Playground,
  'title' | 'features' | 'address' | 'image' | 'id'
>;

const enum ArrowImages {
  left = 'https://raw.githubusercontent.com/Cibulya/pgApp/refs/heads/map-feature/src/assets/icons/left.svg',
  right = 'https://raw.githubusercontent.com/Cibulya/pgApp/6e33e29b26666723384d90f09f10116950c5a196/src/assets/icons/right.svg',
  up = 'https://raw.githubusercontent.com/Cibulya/pgApp/6e33e29b26666723384d90f09f10116950c5a196/src/assets/icons/top.svg',
  down = 'https://raw.githubusercontent.com/Cibulya/pgApp/6e33e29b26666723384d90f09f10116950c5a196/src/assets/icons/arrow-down.svg',
}

const PlayGroundsComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="pg-list-container">
      <button
        className="pg-hide-button"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <img src={isOpen ? ArrowImages.right : ArrowImages.left} alt="arrow" />
      </button>
      {isOpen && <PgList />}
    </div>
  );
};

export default PlayGroundsComponent;

import './playgrounds.scss';
import PgList from '../pg-list/pg-list';
import { Playground } from '../../interfaces/playground';
import { FC, useState } from 'react';
import { ArrowImages } from '../../text-mocks/playgrounds-security-section';

export type PGPick = Pick<
  Playground,
  'title' | 'features' | 'address' | 'image' | 'id'
>;

const PlayGroundsComponent: FC = () => {
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

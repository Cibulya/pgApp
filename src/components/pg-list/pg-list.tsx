import { FC, useState } from 'react';
import PgListLI from './pg-list-li';
import { PlaygroundsArray } from '../../interfaces/playground';
import { ArrowImages } from '../../text-mocks/playgrounds-security-section';

const PgList: FC<PlaygroundsArray> = ({ playgrounds }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div
      className={
        isOpen ? 'desktop-pg-container' : 'desktop-pg-container-active'
      }
    >
      <button onClick={() => setOpen(!isOpen)} className="desktop-pg-button">
        <img src={isOpen ? ArrowImages.left : ArrowImages.right} alt="arrow" />
      </button>
      <ul className={isOpen ? 'desktop-pg-list' : 'desktop-pg-list-active'}>
        {playgrounds.map(playground => {
          return (
            <PgListLI
              key={playground.id}
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

export default PgList;

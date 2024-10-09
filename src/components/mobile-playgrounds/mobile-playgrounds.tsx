import './mobile-playgrounds.scss';
import { PlaygroundsArray } from '../../interfaces/playground';
import { FC, useState } from 'react';
import PgListLI from '../pg-list/pg-list-li';
import { ArrowImages } from '../../text-mocks/playgrounds-security-section';

const MobilePlaygrounds: FC<PlaygroundsArray> = ({ playgrounds }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div
      className={!isOpen ? 'mobile-pg-container' : 'mobile-pg-container-active'}
    >
      <button
        className="mobile-pg-button"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <img
          className="mobile-pg-image"
          src={isOpen ? ArrowImages.down : ArrowImages.up}
          alt="arrow"
        />
      </button>
      <ul className={isOpen ? 'mobile-pg-list-active' : 'mobile-pg-list'}>
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

export default MobilePlaygrounds;

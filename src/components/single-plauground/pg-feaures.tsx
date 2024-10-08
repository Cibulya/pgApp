import { FC } from 'react';
import { Playground } from '../../interfaces/playground';

const PgFeatures: FC<Pick<Playground, 'features'>> = features => {
  return (
    <div className="features">
      <h2 className="features-title">Playgroud Features:</h2>
      <ul className="feature-container">
        {features.features.map(feature => {
          return (
            <li className="feature" key={feature.title}>
              <img
                className="feature-image"
                src={feature.img}
                alt={feature.title}
              />
              <span className="feature-title">{feature.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PgFeatures;

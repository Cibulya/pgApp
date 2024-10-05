import { Playground } from '../../interfaces/playground';
import BreadCrums from '../breadcrumbs/breadcrumbs';

type PgInfo = Pick<
  Playground,
  'address' | 'id' | 'image' | 'features' | 'discription' | 'title'
>;

const PlaygroundInfo = (playground: PgInfo) => {
  return (
    <div>
      <BreadCrums />
      <div>
        <h1>{playground.title}</h1>
        <p>{playground.address}</p>
        <img src={playground.image} alt={playground.title} />
        <p>{playground.discription}</p>
      </div>
      <div>
        <div>
          <div>
            <h2>Playground Features</h2>
            <ul>
              {playground.features.map(feature => {
                return (
                  <li>
                    <img src={feature.img} alt={feature.title} />
                    <span>{feature.title}</span>
                  </li>
                );
              })}
            </ul>
            <div>
              <div>
                <h2>Inspections Passed</h2>
                <ul>
                  <li>
                    <img src="" alt="" />
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundInfo;

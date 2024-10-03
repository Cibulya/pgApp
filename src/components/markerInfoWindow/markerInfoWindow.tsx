import { Playground } from '../../interfaces/playground';
import './markerInfoWindow.scss';

const MarkerInfoWindow = (
  playground: Pick<
    Playground,
    'image' | 'address' | 'features' | 'title' | 'id'
  >
) => {
  console.log(playground.features);
  return (
    <div className="info-window">
      <img
        className="info-window-playground-image"
        src={playground.image}
        alt={playground.title}
      />
      <div>
        <div className="info-window-title">{playground.title}</div>
        <div>
          <>
            {playground.features.map(feat => {
              return (
                <img
                  key={playground.image}
                  className="info-window-image"
                  src={feat.img}
                  alt={feat.title}
                />
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default MarkerInfoWindow;

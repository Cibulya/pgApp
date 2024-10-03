import { Playground } from '../../interfaces/playground';

const PgFeatures = (features: Pick<Playground, 'features'>) => {
  return (
    <div className="pg-list-li-features">
      {features.features.map(ft => {
        return <img key={ft.title} src={ft.img} alt={ft.title} />;
      })}
    </div>
  );
};

export default PgFeatures;

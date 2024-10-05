import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hook';
import PlaygroundInfo from '../../components/single-plauground/single-playground';
import { Playground } from '../../interfaces/playground';

const PgPage = () => {
  const { id } = useParams();
  const idAsNumber = Number(id);

  const pgs = useAppSelector(state => state.playgr.playgrounds.playgrounds);
  const currentPg = pgs.find(e => e.id === idAsNumber) as unknown as Playground;
  console.log(currentPg);

  return (
    <>
      <PlaygroundInfo
        id={currentPg.id}
        address={currentPg.address}
        image={currentPg.image}
        features={currentPg.features}
        discription={currentPg.discription}
        title={currentPg.title}
      />
    </>
  );
};

export default PgPage;

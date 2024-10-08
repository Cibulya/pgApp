import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hook';
import PlaygroundInfo from '../../components/single-plauground/single-playground';
import { Playground } from '../../interfaces/playground';
import { convertTitleToUrl } from '../../utils/convert-title-to-url';

const PgPage: FC = () => {
  const { title } = useParams<Pick<Playground, 'title'>>();

  const pgs = useAppSelector(
    state => state.pgReducer.playgrounds
  ) as unknown as Playground[];

  const currentPg = pgs.find(
    pg => convertTitleToUrl(pg.title) === title
  ) as unknown as Playground;

  return (
    <>
      <PlaygroundInfo
        id={currentPg.id}
        address={currentPg.address}
        imageBig={currentPg.imageBig}
        features={currentPg.features}
        discription={currentPg.discription}
        title={currentPg.title}
      />
    </>
  );
};

export default PgPage;

import './playground.scss';
import { Playground } from '../../interfaces/playground';
import BreadCrums from '../breadcrumbs/breadcrumbs';
import IssueForm from './issue-form';
import CommonInfo from './pg-common-info';
import PgFeatures from './pg-feaures';
import SecuritySection from './secutity-section';
import { FC } from 'react';

type PgInfo = Pick<
  Playground,
  'address' | 'id' | 'imageBig' | 'features' | 'discription' | 'title'
>;

const PlaygroundInfo: FC<PgInfo> = playground => {
  return (
    <div className="wrapper">
      <div className="single-pg-page">
        <BreadCrums />
        <CommonInfo
          address={playground.address}
          imageBig={playground.imageBig}
          discription={playground.discription}
          title={playground.title}
        />

        <div className="features-security">
          <PgFeatures features={playground.features} />
          <SecuritySection />
        </div>
        <IssueForm />
      </div>
    </div>
  );
};

export default PlaygroundInfo;

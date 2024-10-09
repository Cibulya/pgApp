import { FC } from 'react';
import { Playground } from '../../interfaces/playground';

const CommonInfo: FC<
  Pick<Playground, 'address' | 'title' | 'imageBig' | 'discription'>
> = playground => {
  return (
    <div className="common-info-container">
      <h1 className="common-info-heading">{playground.title}</h1>
      <p className="common-info-address">{playground.address}</p>
      <img
        className="common-info-image"
        src={playground.imageBig}
        alt={playground.title}
      />
      <div
        className="common-info-discription"
        dangerouslySetInnerHTML={{ __html: playground.discription }}
      />
    </div>
  );
};

export default CommonInfo;

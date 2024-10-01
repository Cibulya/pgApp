import { FC } from 'react';
import { FooterLink } from '../../text-mocks/footer-mocks/footer-mocks';
import LinksLink from './links-link';

const LinksList: FC<FooterLink> = ({
  name,
  optionOne,
  optionTwo,
  optionFour,
  optionTree,
}: FooterLink) => {
  return (
    <div className="list-container">
      <h2 className="list-heading">{name}</h2>
      <ul className="list">
        {optionOne && <LinksLink text={optionOne} />}
        {optionTwo && <LinksLink text={optionTwo} />}
        {optionTree && <LinksLink text={optionTree} />}
        {optionFour && <LinksLink text={optionFour} />}
      </ul>
    </div>
  );
};

export default LinksList;

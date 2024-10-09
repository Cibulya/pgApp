import './breadcrumbs.scss';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hook';
import { FC } from 'react';
import { ArrowImages } from '../../text-mocks/playgrounds-security-section';

const BreadCrums: FC = () => {
  const { title } = useParams<{ title: string }>();
  const all = useAppSelector(state => state.pgReducer.playgrounds);
  const finded = all.find(el => {
    const convertToTitle = title?.replace(/-/g, ' ');
    return el.title.toLocaleLowerCase().includes(convertToTitle as string);
  });

  return (
    <ul className="breadcrumbs-list">
      <li className="breadcrumbs-li">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumbs-li">
        <img
          className="breadcrumbs-image"
          src={ArrowImages.right}
          alt="arrow"
        />
      </li>

      <li className="breadcrumbs-li">
        <p className="active-path">{finded && finded.title}</p>
      </li>
    </ul>
  );
};

export default BreadCrums;

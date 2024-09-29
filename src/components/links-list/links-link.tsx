import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Linktext } from '../../text-mocks/footer-mocks/footer-mocks';

const LinksLink: FC<Linktext> = (text: Linktext) => {
  return (
    <li className="list-link">
      <Link to="/">{text.text}</Link>
    </li>
  );
};

export default LinksLink;

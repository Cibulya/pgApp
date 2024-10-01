import './footer-links.scss';
import { FC } from 'react';
import LinksList from '../links-list/links-list';
import {
  FooterLink,
  ListsData,
} from '../../text-mocks/footer-mocks/footer-mocks';

const FooterLinks: FC<ListsData> = (lists: ListsData) => {
  return (
    <nav className="footer-nav">
      {lists.lists.map((list: FooterLink) => {
        return <LinksList key={list.name} props={list} />;
      })}
    </nav>
  );
};

export default FooterLinks;

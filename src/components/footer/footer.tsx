import './footer.scss';
import { FC } from 'react';
import FooterLinks from '../footer-links/foter-links';
import { footerLinksList } from '../../text-mocks/footer-mocks/footer-mocks';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <FooterLinks lists={footerLinksList.lists} />
      <div className="copyright-container">
        <p className="footer-copyright">
          Copyright © 2022 Playgrounds.com. All rights reserved. 10859 East
          Washington Street, Indianapolis, IN 46229-2615
        </p>
      </div>
    </footer>
  );
};

export default Footer;

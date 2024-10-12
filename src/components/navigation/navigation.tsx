import './navigation.scss';
import { FC, useEffect, useState } from 'react';
import navIcon from '../../assets/icons/nav-bar-icon.svg';
import { Link, useLocation } from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';

const Navigation: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const location = useLocation();
  const ref = useOnclickOutside(() => {
    setActive(false);
  });

  const handleClickBtn = () => {
    setActive(!active);
  };

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <div className="nav-container-active">
      <button onClick={handleClickBtn}>
        <img src={navIcon} alt="NavIcon"></img>
      </button>
      {active && (
        <nav ref={ref} className={active ? 'nav-menu-active' : 'nav-menu'}>
          <Link className="nav-link" to={'/'}>
            Home Page
          </Link>
          <Link className="nav-link" to={'#'}>
            About Us
          </Link>
          <p className="nav-heading">Recources</p>
          <ul className="nav-list">
            <Link className="nav-list-link" to={'#'}>
              Video Vault
            </Link>
            <Link className="nav-list-link" to={'#'}>
              Training Guides
            </Link>
            <Link className="nav-list-link" to={'#'}>
              Maintence Class
            </Link>
            <Link className="nav-list-link" to={'#'}>
              Playground Inspections
            </Link>
            <Link className="nav-list-link" to={'#'}>
              Playground Audits
            </Link>
            <Link className="nav-list-link" to={'#'}>
              Support
            </Link>
            <Link className="nav-list-link" to={'#'}>
              Terms & Conditions
            </Link>
            <Link className="nav-list-link" to={'#'}>
              Privacy Policy
            </Link>
            <Link className="nav-list-link" to={'#'}>
              FAQ's
            </Link>
          </ul>
          <Link className="nav-link" to={'#'}>
            Pricing
          </Link>
          <Link className="nav-link" to={'#'}>
            Book A Demo
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Navigation;

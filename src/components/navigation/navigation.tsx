import './navigation.scss';
import { FC } from 'react';
import navIcon from '../../assets/icons/nav-bar-icon.svg';

const Navigation: FC = () => {
  return (
    <div className="nav-container">
      <button>
        <img src={navIcon} alt="NavIcon"></img>
      </button>
    </div>
  );
};

export default Navigation;

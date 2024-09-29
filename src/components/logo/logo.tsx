import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Logo.svg';

const Logo: FC = () => {
  return (
    <div className="logo-container">
      <Link className="logo" to="/">
        <img src={logo} alt="Logo"></img>
      </Link>
    </div>
  );
};

export default Logo;

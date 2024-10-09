import './header.scss';
import { FC } from 'react';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import LoginForm from '../login-form/login-form';
import PricingBooking from '../pricing-booking/pricing-booking';
import { useMediaQuery } from 'react-responsive';
import { mediaQuerias } from '../../constants/mediaquerias';

const Header: FC = () => {
  const isDesktop = useMediaQuery({ query: mediaQuerias.desktop });
  return (
    <header className="header">
      <div className="header-content-container">
        <div className="logo-navigation">
          <Logo />
          <Navigation />
        </div>
        <div className="form-pricing">
          <LoginForm />
          {isDesktop ? <PricingBooking /> : null}
        </div>
      </div>
    </header>
  );
};

export default Header;

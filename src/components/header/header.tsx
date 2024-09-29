import './header.scss';
import { FC } from 'react';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import LoginForm from '../login-form/login-form';
import PricingBooking from '../pricing-booking/pricing-booking';

const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <LoginForm />
      <PricingBooking />
    </header>
  );
};

export default Header;

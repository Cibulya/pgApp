import './pricing-booking.scss';
import { FC } from 'react';
import Pricing from './pricing';
import Booking from './booking';

const PricingBooking: FC = () => {
  return (
    <>
      <Pricing />
      <Booking />
    </>
  );
};

export default PricingBooking;

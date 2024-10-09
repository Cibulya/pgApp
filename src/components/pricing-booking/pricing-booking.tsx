import { FC } from 'react';
import Pricing from './pricing';
import Booking from './booking';

const PricingBooking: FC = () => {
  return (
    <div className="pricing-booking">
      <Pricing />
      <Booking />
    </div>
  );
};

export default PricingBooking;

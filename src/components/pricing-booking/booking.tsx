import { FC } from 'react';
import { Link } from 'react-router-dom';

const Booking: FC = () => {
  return (
    <Link className="booking-btn" to="#">
      <span>BOOK A DEMO</span>
    </Link>
  );
};

export default Booking;

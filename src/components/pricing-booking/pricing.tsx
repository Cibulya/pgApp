import { FC } from 'react';
import { Link } from 'react-router-dom';

const Pricing: FC = () => {
  return (
    <Link className="pricing-btn" to="#">
      <span>PRICING</span>
    </Link>
  );
};

export default Pricing;

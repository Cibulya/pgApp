import './login-form..scss';
import { FC } from 'react';
import loginIcon from '../../assets/icons/login.svg';

const LoginForm: FC = () => {
  return (
    <button>
      <img src={loginIcon} alt="LoginIcon" />
    </button>
  );
};

export default LoginForm;

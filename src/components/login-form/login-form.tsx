import './login-form.scss';
import { FC } from 'react';
import loginIcon from '../../assets/icons/login.svg';
import Form from './form';
import Overlays from '../overlays/overlays';
import useModal from '../../hooks/useModal';

const LoginForm: FC = () => {
  const { isOpen, toggle } = useModal();

  return (
    <div className="form-container">
      <button className="login-button" onClick={toggle}>
        {isOpen && <Overlays isOpenState={isOpen} Component={<Form />} />}
        <img src={loginIcon} alt="LoginIcon" />
      </button>
    </div>
  );
};

export default LoginForm;

import './styles/global.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
// import router from './components/router/router';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

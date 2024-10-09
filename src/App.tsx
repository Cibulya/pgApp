import { FC } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import MainPage from './pages/mainPage/main-page';
import ErrorPage from './pages/ErrorPage/error-page';
import Footer from './components/footer/footer';
import PgPage from './pages/playgroundPage/pgPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:title" element={<PgPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;

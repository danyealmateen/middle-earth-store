import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import WeaponsPage from './WeaponsPage/WeaponsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/weapons' element={<WeaponsPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;

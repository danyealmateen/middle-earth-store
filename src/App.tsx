import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import WeaponsPage from './WeaponsPage/WeaponsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetData from './GetCharacters/GetCharacters';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <GetData />
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/weapons' element={<WeaponsPage />} />
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
};

export default App;

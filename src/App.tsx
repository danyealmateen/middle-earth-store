import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
// import BuyWeapons from './BuyWeapons/BuyWeapons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CharacterProvider } from './CharacterContext/CharacterContext';
import GetData from './GetCharacters/GetCharacters';
import GetWeapons from './BuyWeapons/GetWeapons';
import './App.css';

const App = () => {
  return (
    <CharacterProvider>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/characters' element={<GetData />} />
            <Route path='/weapons' element={<GetWeapons />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CharacterProvider>
  );
};

export default App;

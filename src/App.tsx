import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CharacterProvider } from './CharacterContext/CharacterContext';
import GetData from './GetCharacters/GetCharacters';
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
          </Routes>
          <Footer />
        </Router>
      </div>
    </CharacterProvider>
  );
};

export default App;

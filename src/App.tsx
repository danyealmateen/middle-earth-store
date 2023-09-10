import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetData from './GetCharacters/GetCharacters';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        {/* <GetData /> */}
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <div className='main-content-container'>
      <img className='mainOneIMG' src='./images/wraith1.png' alt='' />
      <div className='main-div-container'>
        <Link to='/weapons'>
          <h2>Explore Weapons</h2>
          <img src='./images/weapons.png' alt='' />
        </Link>
        <Link to='/armors'>
          <h2>Explore Armor</h2>
          <img src='./images/armor.png' alt='' />
        </Link>
        <Link to='/characters'>
          <h2> Explore Characters</h2>
          <img src='./images/eye.png' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default Main;

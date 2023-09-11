import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <div className='main-content-container'>
      <img className='mainOneIMG' src='./images/elf4.png' alt='' />
      <div className='main-div-container'>
        <Link className='main-link' to='/characters'>
          <h2>Seek Characters</h2>
          <img src='./images/eye.png' alt='' />
        </Link>
        <Link className='main-link' to='/weapons'>
          <h2>Explore Weapons</h2>
          <img src='./images/weapons.png' alt='' />
        </Link>
        <Link className='main-link' to='/armors'>
          <h2>Explore Armor</h2>
          <img src='./images/armor.png' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default Main;

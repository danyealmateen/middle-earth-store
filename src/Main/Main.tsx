import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <div className='main-content-container'>
      <img className='mainOneIMG' src='./images/mainone.png' alt='' />
      <div className='main-div-container'>
        <Link to='shop-online'>
          <h2>Weapons</h2>
          <p>Forge Ahead with Superior Firepower!</p>
          <img src='./images/weapons.png' alt='' />
        </Link>
        <Link to='shop-online'>
          <h2>Armor</h2>
          <p>Browse our Unbeatable Armor!</p>
          <img src='./images/armor.png' alt='' />
        </Link>
        <Link to='shop-online'>
          <h2>Groceries</h2>
          <p>Try out our premium Groceries!</p>
          <img src='./images/lembas.png' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default Main;

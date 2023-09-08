import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <Fragment>
      <div className='content-container'>
        <img className='mainOneIMG' src='./images/mainone.png' alt='' />
        <div className='div-container'>
          <RouterLink className='styled-link' to='shop-online'>
            <h2>Weapons</h2>
            <p>Forge Ahead with Superior Firepower!</p>
            <img src='./images/weapons.png' alt='' />
          </RouterLink>
          <RouterLink className='styled-link' to='shop-online'>
            <h2>Armor</h2>
            <p>Browse our Unbeatable Armor!</p>
            <img src='./images/armor.png' alt='' />
          </RouterLink>
          <RouterLink className='styled-link' to='shop-online'>
            <h2>Groceries</h2>
            <p>Try out our premium Groceries!</p>
            <img src='./images/lembas.png' alt='' />
          </RouterLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;

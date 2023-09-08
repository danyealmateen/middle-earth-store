import React, { Fragment, useState } from 'react';
import StoreModal from '../Modals/StoreModal';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './Header.css';

const Header = () => {
  const [storeModalPopUp, setStoreModalPopUp] = useState(false);
  const [chosenStore, setChosenStore] = useState('Choose your realm');
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <Fragment>
      <div className='button-wrapper'>
        <p>{chosenStore}</p>
        <button onClick={() => setStoreModalPopUp(true)}>Choose Realm</button>
      </div>
      <div className='content-container'>
        <img className='treeIMG' src='./images/tree.png' alt='tree' />
        <RouterLink className='styled-link' to='/'>
          <h1>Middle-earth Wiki</h1>
        </RouterLink>
        <div
          className='dropdown-wrapper'
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          <RouterLink className='styled-link' to='/weapons'>
            Weapons
          </RouterLink>
          {showDropDown && <DropDownMenu />}
        </div>
        <RouterLink className='styled-link' to='/armors'>
          Armors
        </RouterLink>
        <RouterLink className='styled-link' to='/rings'>
          Rings
        </RouterLink>
      </div>
      <hr className='styled-hr' />
      {storeModalPopUp && (
        <StoreModal
          storeName={(newStoreName) => setChosenStore(newStoreName)}
          closeModal={() => setStoreModalPopUp(false)}
        />
      )}
    </Fragment>
  );
};

export default Header;

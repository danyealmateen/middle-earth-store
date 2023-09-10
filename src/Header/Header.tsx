import { useState } from 'react';
import { Link } from 'react-router-dom';
import RealmModal from '../Modals/RealmModal';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import DropDownMenuWrapper from '../DropDownMenuWrapper/DropDownMenuWrapper';
import { characterLinks } from '../DropDownMenu/DropDownMenu';
import { weaponLinks } from '../DropDownMenu/DropDownMenu';
import './Header.css';

const Header = () => {
  const [storeModalPopUp, setStoreModalPopUp] = useState(false);
  const [chosenStore, setChosenStore] = useState('Choose your realm');

  return (
    <>
      <div className='header-button-wrapper'>
        <p>{chosenStore}</p>
        <button onClick={() => setStoreModalPopUp(true)}>Choose Realm</button>
      </div>
      <DropDownMenuWrapper
        label='Weapons'
        linkPath='/weapons'
        links={weaponLinks}
      />
      <DropDownMenuWrapper
        label='Characters'
        linkPath='/characters'
        links={characterLinks}
      />
      <div className='header-content-container'>
        <img className='treeIMG' src='./images/tree.png' alt='tree' />
        <Link to='/'>
          <h1>Middle-earth Wiki</h1>
        </Link>
        {storeModalPopUp && (
          <RealmModal
            storeName={(newStoreName) => setChosenStore(newStoreName)}
            closeModal={() => setStoreModalPopUp(false)}
          />
        )}
      </div>
    </>
  );
};

export default Header;

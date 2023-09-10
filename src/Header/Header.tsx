import { useState } from 'react';
import { Link } from 'react-router-dom';
import RealmModal from '../Modals/RealmModal';
import './Header.css';

const Header = () => {
  const [storeModalPopUp, setStoreModalPopUp] = useState(false);
  const [chosenStore, setChosenStore] = useState('Choose your realm');

  return (
    <>
      {/* <div className='header-button-wrapper'>
        <p>{chosenStore}</p>
        <button onClick={() => setStoreModalPopUp(true)}>Choose Realm</button>
      </div> */}
      <hr className='header-hr' />
      <div className='header-content-container'>
        <Link className='header-title' to='/'>
          The Elven Forge
        </Link>
        {/* {storeModalPopUp && (
          <RealmModal
            storeName={(newStoreName) => setChosenStore(newStoreName)}
            closeModal={() => setStoreModalPopUp(false)}
          /> */}
        {/* )} */}
      </div>
    </>
  );
};

export default Header;

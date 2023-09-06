import React, { Fragment, useState } from 'react';
import { styled } from 'styled-components';
import StoreModal from '../Modals/StoreModal';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = () => {
  const [storeModalPopUp, setStoreModalPopUp] = useState(false);
  const [chosenStore, setChosenStore] = useState(
    'Choose your nearest Mordor Grocery store'
  );

  return (
    <Fragment>
      <NearestStoreWrapper>
        <p>{chosenStore}</p>
        <button onClick={() => setStoreModalPopUp(true)}>Choose store</button>
      </NearestStoreWrapper>
      <TitleWrapper>
        <img src='./images/eye.png' alt='' />
        <h1>Mordors Groceries</h1>
      </TitleWrapper>
      <ContentContainer>
        <Router>
          <Link className='link' to='shop-online'>
            Shop Online
          </Link>
          <Link className='link' to='offers'>
            Offers
          </Link>
          <Link className='link' to='grocery-bag'>
            Mordors Grocery Bag
          </Link>
          <Link className='link' to='recipes'>
            Recipes
          </Link>
          <Link className='link' to='customer-service'>
            Customer Service
          </Link>
        </Router>
      </ContentContainer>
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

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;

  & .link {
    font-size: 17px;
    color: goldenrod;
  }

  & .link:hover {
    font-size: 17px;
    color: orange;
    scale: 1.05;
  }
`;

const TitleWrapper = styled.div`
  font-size: 20px;
  color: orange;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ;
  margin-top: -4.6rem;

  & img {
    width: 200px;
  }
`;

const NearestStoreWrapper = styled.div`
  display: flex;
  color: white;

  & p {
    color: orange;
    font-size: 20px;
    font-weight: 900;
  }

  & button {
    margin-left: 10px;
    border: 10px solid black;
    border-radius: 15px;
    color: black;
    background-color: goldenrod;
    font-family: 'Ringbearer', sans-serif;
    font-size: 15px;
    cursor: pointer;
  }

  & button:active {
    scale: 1.05;
  }

  & button:hover {
    background-color: orange;
    color: white;
    scale: 1.05;
  }
`;

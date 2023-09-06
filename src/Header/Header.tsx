import React, { Fragment, useState } from 'react';
import { styled } from 'styled-components';
import StoreModal from '../Modals/StoreModal';

const Header = () => {
  const [storeModalPopUp, setStoreModalPopUp] = useState(false);
  const [chosenStore, setChosenStore] = useState(
    'Choose your nearest Mordor Grocery store'
  );
  console.log(storeModalPopUp);

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
        <h4>Shop Online</h4>
        <h4>Offers</h4>
        <h4>Mordors grocery bag</h4>
        <h4>Recipies</h4>
        <h4>Customer service</h4>
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

  & h4 {
    font-size: 19px;
  }
`;

const TitleWrapper = styled.div`
  font-size: 20px;
  color: orange;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ;

  & img {
    width: 200px;
  }
`;

const NearestStoreWrapper = styled.div`
  display: flex;
  color: white;

  & p {
    color: #734E01;
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
  }

  & button:active {
    scale: 1.05;
  }
`;

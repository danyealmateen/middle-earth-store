import React, { Fragment, useState } from 'react';
import { styled } from 'styled-components';
import StoreModal from '../Modals/StoreModal';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [storeModalPopUp, setStoreModalPopUp] = useState(false);
  const [chosenStore, setChosenStore] = useState(
    'Choose your nearest Middle-Earth general store'
  );

  return (
    <Fragment>
      <ButtonWrapper>
        <p>{chosenStore}</p>
        <button onClick={() => setStoreModalPopUp(true)}>Choose Store</button>
      </ButtonWrapper>
      <ContentContainer>
        <img src='./images/tree.png' alt='' />
        <h1>Middle-earth Online general store</h1>
        <Router>
          <StyledLink to='shop-online'>Weapons</StyledLink>
          <StyledLink to='offers'>Armors</StyledLink>
          <StyledLink to='grocery-bag'>Groceries</StyledLink>
          <StyledLink to='customer-service'>Customer Service</StyledLink>
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

const ButtonWrapper = styled.div`
  display: flex;
  margin: 15px 0px 0px 15px;

  & button {
    background-color: orange;
    color: black;
    font-family: 'Ringbearer', sans-serif;
    margin-left: 15px;
    border-radius: 5px;
    padding: 3px;
  }

  & button:hover {
    background-color: white;
    color: black;
  }

  & button:active {
    scale: 1.05;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 75px;
  }
`;

const StyledLink = styled(RouterLink)`
  color: orange;
  margin-left: 20px;

  &:hover {
    color: white;
  }
`;

import React, { Fragment, useState } from 'react';
import { styled } from 'styled-components';
import StoreModal from '../Modals/StoreModal';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const Header = () => {
  const [storeModalPopUp, setStoreModalPopUp] = useState(false);
  const [chosenStore, setChosenStore] = useState('Choose your store');
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <Fragment>
      <ButtonWrapper>
        <p>{chosenStore}</p>
        <button onClick={() => setStoreModalPopUp(true)}>Choose Store</button>
      </ButtonWrapper>
      <ContentContainer>
        <img src='./images/tree.png' alt='' />
        <h1>Middle-earth general store</h1>
        <Router>
          <DropdownWrapper
            onMouseEnter={() => setShowDropDown(true)}
            onMouseLeave={() => setShowDropDown(false)}
          >
            <StyledLink to='/weapons'>Legendary Weapons</StyledLink>
            {showDropDown && <DropDownMenu />}
          </DropdownWrapper>

          <StyledLink to='offers'> Unique Armors</StyledLink>
          <StyledLink to='grocery-bag'>Epic Groceries</StyledLink>
        </Router>
      </ContentContainer>
      <StyledHr />
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
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
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
    border: 2px solid orange;
    margin-right: 15px;
    border-radius: 50px;
  }
`;

const StyledLink = styled(RouterLink)`
  color: orange;
  margin-left: 20px;
  font-size: 20px;

  &:hover {
    color: white;
    transition: color 0.3s, color 0.3s, transform 0.3s;
  }
`;

const DropdownWrapper = styled.div<{
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}>`
  position: relative;
  color: yellow;

  &:hover > div {
    display: block;
  }
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: orange;
  margin: 20px 0;
`;

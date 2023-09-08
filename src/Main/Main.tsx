import React, { Fragment } from 'react';
import { styled } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Main = () => {
  return (
    <Fragment>
      <ContentContainer>
        <img src='./images/mainone.png' alt='' />
        <DivContainer>
          <StyledLink to='shop-online'>
            <h2>Buy weapons</h2>
            <p>Forge Ahead with Superior Firepower!</p>
            <img src='./images/weapons.png' alt='' />
          </StyledLink>
          <StyledLink to='shop-online'>
            <h2>Forged armor</h2>
            <p>Browse our Unbeatable Armor!</p>
            <img src='./images/armor.png' alt='' />
          </StyledLink>
          <StyledLink to='shop-online'>
            <h2>Groceries</h2>
            <p>Try out our premium Groceries!</p>
            <img src='./images/lembas.png' alt='' />
          </StyledLink>
        </DivContainer>
      </ContentContainer>
    </Fragment>
  );
};

export default Main;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 600px;
    border-radius: 5px;
  }
`;

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  
}
`;

const StyledLink = styled(RouterLink)`
  background-color: #f6b100;
  color: black;
  padding: 15px;
  margin: 0.5px;
  width: 200px;
  height: 200px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: black;
    color: #f6b100;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
  }

  & img {
    width: 90px;
    height: 60px;
    border-radius: 50px;
  }
`;

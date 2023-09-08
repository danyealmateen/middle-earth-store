import React, { Fragment } from 'react';
import { styled } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const DropDownMenu = () => {
  return (
    <Menu>
      <StyledLink to='/weapons/swords'>Swords</StyledLink>
      <StyledLink to='/weapons/axes'>Axes</StyledLink>
      <StyledLink to='/weapons/staves'>Staves</StyledLink>
      <StyledLink to='/weapons/maces'>Maces</StyledLink>
      <StyledLink to='/weapons/daggers'>Daggers</StyledLink>
    </Menu>
  );
};

export default DropDownMenu;

const Menu = styled.div`
  display: flex;
  position: absolute;
  background-color: #451808;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  margin-left: 3rem;
  z-index: 1;
`;

const StyledLink = styled(RouterLink)`
  display: block;
  color: orange;
  text-decoration: none;

  &: hover {
    background-color: goldenrod;
    color: black;
    border-radius: 3px;
  }
`;

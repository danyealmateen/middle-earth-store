import React, { Fragment, useState, useEffect } from 'react';

import { styled } from 'styled-components';

const WeaponsPage = () => {
  return (
    <Fragment>
      <Title>Legendary Weapons</Title>
      <ContentContainer>
        <WeaponsContainer>SWORD</WeaponsContainer>
        <WeaponsContainer>AXE</WeaponsContainer>
        <WeaponsContainer>STAFF</WeaponsContainer>
        <WeaponsContainer>MACE</WeaponsContainer>
        <WeaponsContainer>DAGGERS</WeaponsContainer>
      </ContentContainer>
    </Fragment>
  );
};
export default WeaponsPage;

const Title = styled.h1`
  color: white;
`;

const WeaponsContainer = styled.div`
  background-color: white;
  height: 300px;
  width: 250px;
  border: 2px solid gray;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);
  align-items: flex-start;
  justify-items: center;
  gap: 15px;
  margin-top: 15px;
`;

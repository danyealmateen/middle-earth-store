import React, { Fragment, useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface StoreModalProps {
  closeModal: () => void;
  storeName: (storeName: string) => void;
}

const StoreModal = ({ closeModal, storeName }: StoreModalProps) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [currentImage, setCurrentImage] = useState('./images/rivendell.jpg');

  useEffect(() => {
    switch (selectedOption) {
      case 'rivendell':
        setCurrentImage('./images/rivendell.jpg');
        break;
      case 'helmsdeep':
        setCurrentImage('./images/helmsdeep.jpg');
        break;
      case 'rohan':
        setCurrentImage('../images/rohan.jpg');
        break;
      case 'shire':
        setCurrentImage('./images/shire.jpg');
        break;
    }
  }, [selectedOption]);

  return (
    <Fragment>
      <ModalOverlay onClick={closeModal}>
        <ModalWrapper onClick={(event) => event.stopPropagation()}>
          <h1>Choose store</h1>
          <select
            onChange={(event) => {
              setSelectedOption(event.target.value);
            }}
          >
            <option value='rivendell'>Elfheim Fresh Fare</option>
            <option value='helmsdeep'>The Deep Deli</option>
            <option value='rohan'>Rohan's Rustic Rations</option>
            <option value='shire'>Baggins' Bounty</option>
          </select>
          {currentImage && <img src={currentImage} alt={selectedOption} />}
          <button
            onClick={() => {
              storeName(selectedOption);
              closeModal();
            }}
          >
            Save store
          </button>
        </ModalWrapper>
      </ModalOverlay>
    </Fragment>
  );
};

export default StoreModal;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #734e01;
  margin: auto;
  height: 30%;
  width: 30%;
  border-radius: 10px;
  border: 2px solid goldenrod;

  & select {
    font-size: 20px;
    background-color: black;
    color: goldenrod;
    width: 30%;
    border: 1px solid goldenrod;
  }

  & button {
    font-size: 20px;
    border: 3px solid orange;
    background-color: black;
    border-radius: 5px;
    color: goldenrod;
    
  }

  & img {
    width: 230px;
    height: 200px;
    margin: 15px;
    border-radius: 10px;
  }

  & button:active {
    scale: 1.05;
  }


`;

const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

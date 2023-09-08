import React, { Fragment, useState, useEffect } from 'react';
import { styled } from 'styled-components';

interface StoreModalProps {
  closeModal: () => void;
  storeName: (storeName: string) => void;
}

const StoreModal = ({ closeModal, storeName }: StoreModalProps) => {
  const storeOptions = [
    {
      value: 'rivendell',
      label: 'Elfheim Fresh Fare',
      img: './images/rivendell.jpg',
    },
    {
      value: 'helmsdeep',
      label: 'The Deep Deli',
      img: './images/helmsdeep.jpg',
    },
    {
      value: 'rohan',
      label: "Rohan's Rustic Rations",
      img: '../images/rohan.jpg',
    },
    { value: 'shire', label: "Baggins' Bounty", img: './images/shire.jpg' },
  ];

  const [selectedOption, setSelectedOption] = useState('Rivendell');
  const [currentImage, setCurrentImage] = useState('./images/rivendell.jpg');

  useEffect(() => {
    const selectedStore = storeOptions.find(
      (store) => store.value === selectedOption
    );
    if (selectedStore) {
      setCurrentImage(selectedStore.img);
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
    width: 70%; /* Uppdaterad bredd */
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

  @media (max-width: 600px) {
    width: 90%; /* Ändrat till procentuell bredd för bättre responsivitet */
    height: auto; /* Ändrat till auto för bättre responsivitet */

    & select,
    & button {
      width: 100%; /* Ändrat till procentuell bredd för bättre responsivitet */
    }
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

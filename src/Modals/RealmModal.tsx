import { useState, useEffect } from 'react';
import { StoreModalProps } from '../types';
import './RealmModal.css';

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

  const [selectedOption, setSelectedOption] = useState('rivendell');
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
    <div className='modal-overlay' onClick={closeModal}>
      <div
        className='modal-wrapper'
        onClick={(event) => event.stopPropagation()}
      >
        <h1>Choose realm</h1>
        <select onChange={(event) => setSelectedOption(event.target.value)}>
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
          Save realm
        </button>
      </div>
    </div>
  );
};

export default StoreModal;

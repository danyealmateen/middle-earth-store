import { useState, useEffect } from 'react';
import { StoreModalProps } from '../types';
import './RealmModal.css';

const StoreModal = ({ closeModal, storeName }: StoreModalProps) => {
  const storeOptions = [
    {
      value: 'mordor',
      label: 'Mordor',
      img: './images/mordor.jpg',
    },
    {
      value: 'dolguldur',
      label: 'Dol Guldur',
      img: './images/dolguldur.jpg',
    },
    {
      value: 'minasmorgul',
      label: "minasmorgul's Rustic Rations",
      img: '../images/minasmorgul.jpg',
    },
    { value: 'angmar', label: "Baggins' Bounty", img: './images/angmar.jpg' },
  ];

  const [selectedOption, setSelectedOption] = useState('mordor');
  const [currentImage, setCurrentImage] = useState('./images/mordor.jpg');

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
          <option value='mordor'>Mordor</option>
          <option value='dolguldur'>Dol Guldur</option>
          <option value='minasmorgul'>Minas Morgul</option>
          <option value='angmar'>Angmar</option>
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

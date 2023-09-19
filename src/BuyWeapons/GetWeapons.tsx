import React, { useState, useEffect } from 'react';
import { Weapon } from '../types';
import './GetWeapons.css';
import { Link } from 'react-router-dom';

const GetWeapons = () => {
  const [weapons, setWeapons] = useState<Record<string, Weapon> | null>(null);
  const [addtoCart, setAddToCart] = useState(0);

  // const currentStock = () => {
  //   setAddToCart(value.stock - 1);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://theelvenforgeshop-default-rtdb.europe-west1.firebasedatabase.app/.json'
        );

        const data = await response.json();

        setWeapons(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='weapon-card-container'>
      {weapons &&
        Object.entries(weapons).map(([key, value]) => (
          <div key={key}>
            <div className='weapon-card'>
              <img className='weapon-card-img' src={value.img} alt='' />
              <p>{value.title}</p>
              <p>{value.description}</p>
              <p>Price: {value.price} gold</p>
              <p>Stock: {value.stock} left</p>
              <button onClick={() => setAddToCart(value.stock - 1)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GetWeapons;

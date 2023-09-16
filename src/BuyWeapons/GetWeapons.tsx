import React, { useState, useEffect } from 'react';
import { Weapon } from '../types';
import './GetWeapons.css';

const GetWeapons = () => {
  const [weapons, setWeapons] = useState<Record<string, Weapon> | null>(null);

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
    <div>
      {weapons &&
        Object.entries(weapons).map(([key, value]) => (
          <div key={key}>
            <div className='weapon-card-container'>
              <div className='weapon-card'>
                <p>{value.title}</p>
                <p>{value.description}</p>
                <p>{value.price}</p>
                <p>{value.stock}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default GetWeapons;

import { useState, useEffect } from 'react';
import { Weapon } from '../types';
import './GetWeapons.css';

const GetWeapons = () => {
  const [weapons, setWeapons] = useState<Record<string, Weapon> | null>(null);

  const handleAddToCart = async (key: string) => {
    console.log('key:', key);

    if (weapons && weapons[key] && weapons[key].stock > 0) {
      const weaponToUpdate = { ...weapons[key] };
      weaponToUpdate.stock -= 1;

      try {
        const response = await fetch(
          `https://theelvenforgeshop-default-rtdb.europe-west1.firebasedatabase.app/${key}.json`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(weaponToUpdate),
          }
        );

        if (response.ok) {
          const updatedWeapons = { ...weapons };
          updatedWeapons[key] = weaponToUpdate;
          setWeapons(updatedWeapons);
        } else {
          console.error('fail');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
        Object.entries(weapons).map(([key, value]) => {
          console.log('Current weapon key:', key);
          return (
            <div key={key}>
              <div className='weapon-card'>
                <img className='weapon-card-img' src={value.img} alt='' />
                <p>{value.title}</p>
                <p>{value.description}</p>
                <p>Price: {value.price} gold</p>
                <p>Stock: {value.stock} left</p>
                <button
                  onClick={() => {
                    handleAddToCart(key);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GetWeapons;

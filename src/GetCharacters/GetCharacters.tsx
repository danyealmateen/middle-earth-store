import { useState, useEffect } from 'react';
import { Character } from '../types';
import './GetCharacters.css';
const GetData = () => {
  const [data, setData] = useState<Character[] | null>(null);

  const headers = {
    Accept: 'application/json',
    Authorization: 'Bearer Rq3Ydtf7ibWSB5YTCTKL',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://the-one-api.dev/v2/character', {
          headers: headers,
        });
        const data = await response.json();

        const selectedCharacters = data.docs.filter((character: Character) =>
          ['Gimli', 'Gandalf', 'Legolas', 'Elrond'].includes(character.name)
        );

        console.log(data);
        setData(selectedCharacters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='character-container'>
      {data &&
        data.map((character, index) => (
          <div className='character-div' key={index}>
            <h2>{character.name}</h2>
            <h2>{character.race}</h2>
            <h2>
              <a href={character.wikiUrl}>Wikiurl</a>
            </h2>
          </div>
        ))}
    </div>
  );
};

export default GetData;

import { useState, useEffect, useContext } from 'react';
import { Character } from '../types';
import CharactersInputForm from '../CharactersInputForm/CharactersInputForm';
import CharacterContext from '../CharacterContext/CharacterContext';
import './GetCharacters.css';

const GetData = () => {
  const { saveInputValue } = useContext(CharacterContext)!;
  const [data, setData] = useState<Character[] | null>(null);

  const headers = {
    Accept: 'application/json',
    Authorization: 'Bearer Rq3Ydtf7ibWSB5YTCTKL',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedInputValue = saveInputValue
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        console.log(formattedInputValue);

        const response = await fetch(
          `https://the-one-api.dev/v2/character?name=${formattedInputValue}`,
          {
            headers: headers,
          }
        );
        const data = await response.json();
        console.log('API response:', data.docs);

        const exactMatchCharacters = data.docs.filter(
          (character: Character) => character.name === formattedInputValue
        );

        console.log(exactMatchCharacters);
        setData(exactMatchCharacters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (saveInputValue) {
      fetchData();
    }
  }, [saveInputValue]);

  const checkData = (data: string | undefined) => {
    return data && data.trim() !== '' ? data : 'Unknown';
  };

  return (
    <div className='character-container'>
      <CharactersInputForm />
      {data ? (
        data.map((character, index) => (
          <div key={index} className='character-card'>
            <p>Name: {checkData(character.name)}</p>
            <p>Race: {checkData(character.race)}</p>
            <p>Realm: {checkData(character.realm)}</p>
            <p>Gender: {checkData(character.gender)}</p>
            <p>Hair: {checkData(character.hair)}</p>
            <p>Height: {checkData(character.height)}</p>
            <p>Spouse: {checkData(character.spouse)}</p>
            <p>Birth: {checkData(character.birth)}</p>
            <p>Death: {checkData(character.death)}</p>
            <a href={character.wikiUrl}>More: {character.wikiUrl}</a>
          </div>
        ))
      ) : (
        <div>
          <span className='get-characters-warning-message'>IMPORTANT!</span>
          <p>
            The API requires that you type out the full name!
            <br />
            "Frodo" - not valid!
            <br />
            "Frodo Baggins" valid!
          </p>
        </div>
      )}
    </div>
  );
};

export default GetData;

import { useState, useEffect, useContext } from 'react';
import { Character } from '../types';
import CharactersInputForm from '../CharactersInputForm/CharactersInputForm';
import CharacterContext from '../CharacterContext/CharacterContext';
import './GetCharacters.css';

const GetData = () => {
  const { saveInputValue } = useContext(CharacterContext)!;
  const [data, setData] = useState<Character[] | null>(null);
  const [dataCheck, setDataCheck] = useState<string | null>(null);

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


        const response = await fetch(
          `https://the-one-api.dev/v2/character?name=${formattedInputValue}`,
          {
            headers: headers,
          }
        );
        const data = await response.json();

        if (data.docs.length === 0) {
          setData(null)
          setDataCheck("No Character Found.")
        } else {
          const exactMatchCharacters = data.docs.filter(
            (character: Character) => character.name === formattedInputValue
          );
          setData(exactMatchCharacters);
          setDataCheck(null)
        }
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
            <p>
              Name:
              <span className='char-span'>{checkData(character.name)}</span>
            </p>
            <p>
              Race:
              <span className='char-span'>{checkData(character.race)}</span>
            </p>
            <p>
              Realm:
              <span className='char-span'>{checkData(character.realm)}</span>
            </p>
            <p>
              Gender:
              <span className='char-span'>{checkData(character.gender)}</span>
            </p>
            <p>
              Hair:
              <span className='char-span'>{checkData(character.hair)}</span>
            </p>
            <p>
              Height:
              <span className='char-span'>{checkData(character.height)}</span>
            </p>
            <p>
              Spouse:
              <span className='char-span'>{checkData(character.spouse)}</span>
            </p>
            <p>
              Birth:
              <span className='char-span'>{checkData(character.birth)}</span>
            </p>
            <p>
              Death:
              <span className='char-span'>{checkData(character.death)}</span>
            </p>
            <span className='char-span'>
              <a href={character.wikiUrl}>More: {character.wikiUrl}</a>
            </span>
          </div>
        ))
      ) : (
        <div>
          {dataCheck && <h1 className='no-char-found-msg'>{dataCheck}</h1>}
        </div>

      )}
    </div>
  );
};

export default GetData;

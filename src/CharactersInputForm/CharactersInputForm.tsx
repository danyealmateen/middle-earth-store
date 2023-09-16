import './CharactersInputForm.css';
import { useState, useContext } from 'react';
import CharacterContext from '../CharacterContext/CharacterContext';

const CharactersInputForm = () => {
  const { saveInputValue, setSaveInputValue } = useContext(CharacterContext)!;
  const [inputValue, setInputValue] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setSaveInputValue(inputValue);
    setInputValue('');
  };

  return (
    <>
      <div className='input-form-container'>
        <form action='submit'>
          <label htmlFor='character-input'>Seek Characters</label>
          <input
            className='character-input'
            id='character-input'
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='character-input-button' onClick={submitHandler} type='submit'>
            Seek
          </button>
        </form>
      </div>
    </>
  );
};

export default CharactersInputForm;

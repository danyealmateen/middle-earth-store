import React, { createContext, useState } from 'react';
import { CharacterContextProps } from '../types';
import { CharacterProviderProps } from '../types';

export const CharacterContext = createContext<CharacterContextProps | null>(
  null
);

export const CharacterProvider = ({ children }: any) => {
  const [saveInputValue, setSaveInputValue] = useState('');

  return (
    <CharacterContext.Provider value={{ saveInputValue, setSaveInputValue }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;

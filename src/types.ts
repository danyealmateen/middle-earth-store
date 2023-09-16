export interface Character {
  _id: string;
  name: string;
  race: string;
  realm: string;
  wikiUrl: string;
  character: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  spouse: string;
  height: string;
}

export interface StoreModalProps {
  closeModal: () => void;
  storeName: (storeName: string) => void;
}

export interface CharacterContextProps {
  saveInputValue: string;
  setSaveInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface CharacterProviderProps {
  children: React.ReactNode;
}

export interface MyDataItemType {
  subArray: any;
  item: any;
  index: any;
  name: string;
  race: string;
  wikiUrl: string;
}

export interface Weapon {
  title: string;
  description: string;
  price: number;
  stock: number;
}

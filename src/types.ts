export interface Character {
  _id: string;
  name: string;
  race: string;
  realm: string;
  wikiUrl: string;
  character: string;
}

export interface StoreModalProps {
  closeModal: () => void;
  storeName: (storeName: string) => void;
}

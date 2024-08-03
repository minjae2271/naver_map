export type Menu = { name: string; price: string };

export type Store = {
  nid: number;
  name: string;
  description: string;
  season: number;
  episode: number;
  coordinates: number[];
  images: string[];
  characteristic: string;
  foodKind: string;
  address: string;
  phone: string;
  menus: Menu[]; 
};

export interface Product {
  name: string;
  photo: any;
  price: string | number;
}

export interface Tshirt<Colour> extends Product {
  size: 'PP' | 'P' | 'M' | 'G' | 'GG';
  colour: Colour;
}

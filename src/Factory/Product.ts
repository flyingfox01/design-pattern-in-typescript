export interface Product {
  name: string;
  price: number;
};

export class ProductA implements Product {
  name: string;
  price: number;

  constructor() {
    this.name = 'ProductA';
    this.price = 10;
  }

}

export class ProductB implements Product {
  name: string;
  price: number;

  constructor() {
    this.name = 'ProductB';
    this.price = 100;
  }
}

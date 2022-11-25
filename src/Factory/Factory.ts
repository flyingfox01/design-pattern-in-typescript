import { Product, ProductB, ProductA } from './Product';

class Factory {
  private store: Record<string, { new(): Product }> = {};// 注意：这里的构造器签名

  constructor() {
    this.store = {
      ProductB,
      ProductA
    }
  }

  public create(type: string): null | Product {
    const Constructor = this.store[type];

    if (!Constructor) return null;

    return new Constructor()
  }
}

export default Factory;
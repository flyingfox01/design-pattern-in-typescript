import { Pet, Food, Dog, Cat, Fish, Bone } from './Product';

/**
 * 抽象工厂，可以生成宠物和宠物食品两种产品
 */
export interface PetFactory {
  pet(): Pet

  food(): Food
}

/**
 * 猫商品（猫 + 猫粮）工厂
 */
export class CatFactory implements PetFactory {
  pet(): Pet {
    return new Cat()
  }

  food(): Food {
    return new Fish()
  }
}

/**
 * 狗商品（狗 + 狗粮）工厂
 */
export class DogFactory implements PetFactory {
  pet(): Pet {
    return new Dog()
  }

  food(): Food {
    return new Bone()
  }
}

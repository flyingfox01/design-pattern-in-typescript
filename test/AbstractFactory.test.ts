import { DogFactory, CatFactory } from '../src/AbstractFactory/Factory';
import { Pet, Food } from '../src/AbstractFactory/Product';

const item1 = new DogFactory()
const item2 = new CatFactory()

describe("abstract factory", () => {
    it("buy pet", () => {
        expect(item1.pet()?.name).toEqual('dog');
        expect(item1.food()?.name).toEqual('bone');

        expect(item2.pet()?.name).toEqual('cat');
        expect(item2.food()?.name).toEqual('fish');
    })
});

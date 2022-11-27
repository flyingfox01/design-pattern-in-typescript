import { Numbers, ConcreteIterator } from '../src/Iterator';

describe("iterator", () => {
    it("sum collection", () => {
        const numbers: Numbers = new Numbers([1, 7, 21, 657, 3, 2, 765, 13, 65])
        const it: ConcreteIterator = <ConcreteIterator>numbers.createIterator();

        let sum = 0;
        while (it.hasNext()) sum += it.next()

        expect(sum).toEqual(1534);
    })
});

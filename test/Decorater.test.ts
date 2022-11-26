import { Espresso, Milk, Chocolate } from '../src/Decorater/Coffee';

const mocha = new Chocolate(new Milk(new Espresso()))

describe("decorator", () => {
    it("mocha coffe", () => {
        const desc = mocha.desc()
        expect(desc).toContain('milk');
        expect(desc).toContain('chocolate');
    })
});

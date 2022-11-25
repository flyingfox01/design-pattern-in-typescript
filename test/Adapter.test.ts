import { Adapter, Adaptee, Target } from '../src/Adapter/Adapter';

describe("adapter", () => {
    it("adapter bark for speak", () => {
        const obj = new Adapter(new Adaptee());
        const obj2 = new Adaptee();
        expect(obj.bark()).toEqual(obj2.speak());
    })
});

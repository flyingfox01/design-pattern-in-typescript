import { Adapter, Adaptee } from '../src/Adapter/Adapter';

describe("adapter", () => {
    it("adapter bark for speak", () => {
        const obj = new Adapter(new Adaptee());
        expect(obj.bark()).toContain('speak');
    })
});

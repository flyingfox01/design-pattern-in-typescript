import Factory from '../src/Factory/Factory';

const factory = new Factory();

describe("prototype", () => {
    it("cache shape", () => {
        expect(factory.create('ProductA')?.name).toEqual('ProductA');
        expect(factory.create('ProductB')?.name).toEqual('ProductB');
    })
});

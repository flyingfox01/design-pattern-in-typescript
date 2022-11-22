import Singleton from "../../src/Singleton/Singleton2";

describe("Singleton 2", () => {
    it("instance is single", () => {
        const a = new Singleton();
        const b = new Singleton();
        expect(a).toEqual(b);
    })
});

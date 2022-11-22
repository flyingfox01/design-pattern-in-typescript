import Singleton from "../../src/Singleton/Singleton";

describe("Singleton", () => {
    it("instance is single", () => {
        const a = Singleton.getInstance();
        const b = Singleton.getInstance();
        expect(a).toEqual(b);
    })
});


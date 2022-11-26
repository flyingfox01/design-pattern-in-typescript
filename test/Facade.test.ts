import { ComputerFacade, Computer } from '../src/Facade/Computer';

const computer = new ComputerFacade(new Computer())

describe("facade", () => {
    it("computer turn on/off", () => {
        expect(computer.turnOn()).toEqual('Ouch! Beep beep! Loading.. Ready to be used!');
        expect(computer.turnOff()).toEqual('Bup bup buzzz! Haah! Zzzzz');
    })
});

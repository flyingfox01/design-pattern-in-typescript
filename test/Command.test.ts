import { Bulb, TurnOn, TurnOff, RemoteControl } from '../src/Command';

describe("command", () => {
    it("turn on/off bulb", () => {
        const bulb = new Bulb();

        const turnOn = new TurnOn(bulb);
        const turnOff = new TurnOff(bulb);

        const remote = new RemoteControl();
        expect(remote.submit(turnOn)).toEqual('Bulb has been lit');
        expect(remote.submit(turnOff)).toEqual('Darkness');

    })
});

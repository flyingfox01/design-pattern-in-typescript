import { DeviceFactory, Port } from '../src/Flyweight';

describe("flyweight", () => {
    it("5 teminals share 2 decices", () => {
        const factory = new DeviceFactory();
        const device1 = factory.getDevice('Cisco');
        const device2 = factory.getDevice('Cisco');
        const device3 = factory.getDevice('Cisco');
        const device4 = factory.getDevice('TP');
        const device5 = factory.getDevice('TP');

        device1.assignPort(new Port("1001"));
        device2.assignPort(new Port("1002"));
        device3.assignPort(new Port("1003"));
        device4.assignPort(new Port("1004"));
        device5.assignPort(new Port("1005"));

        expect(factory.terminalNum).toEqual(5);
        expect(factory.deviceSize).toEqual(2);// 共享2个设备
    })
});

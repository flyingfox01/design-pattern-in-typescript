import ComputerFactory from '../src/Builder/ComputerFactory';
import PersonalComputerBuilder from '../src/Builder/PersonalComputerBuilder';
import OfficeComputerBuilder from '../src/Builder/OfficeComputerBuilder';

const factory = new ComputerFactory();
const personalBuilder = new PersonalComputerBuilder();
const officeBuilder = new OfficeComputerBuilder();

const personalComputer = factory.buildComputer(personalBuilder)
const officeComputer = factory.buildComputer(officeBuilder);

describe("buider", () => {
    it("build pc cumputer", () => {
        expect(personalComputer.getSystemInfo()).toContain('我的显卡');
        expect(officeComputer.getSystemInfo()).toContain('公司的显卡');
    })
});

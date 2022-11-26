import { Developer, Designer, Organization } from '../src/Composite';

describe("composite", () => {
    it("count salery", () => {
        const john = new Developer('Bob', 12000);
        const jane = new Designer('Jim', 15000);

        const organization = new Organization();
        organization.addEmployee(john);
        organization.addEmployee(jane);

        expect(organization.getNetSalaries()).toEqual(27000);

    })
});

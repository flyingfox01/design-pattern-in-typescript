import { Engineer, Manager, Organization, CTO, CEO } from '../src/Visitor';

describe("visitor", () => {
    it("report for cto/ceo", () => {
        const a = new Engineer("小张", 1200);
        const b = new Engineer("小王", 2300);
        const c = new Engineer("小李", 3400);

        const A = new Manager("张总", 2);
        const B = new Manager("王总", 4);
        const C = new Manager("李总", 6);

        const org = new Organization();
        org.addEmployee(a)
            .addEmployee(b)
            .addEmployee(c)
            .addEmployee(A)
            .addEmployee(B)
            .addEmployee(C);

        expect(org.report(new CTO())).toEqual('工程师：小张 今年代码量1200行；工程师：小王 今年代码量2300行；工程师：小李 今年代码量3400行；经理：张总 今年共完成项目：2个；经理：王总 今年共完成项目：4个；经理：李总 今年共完成项目：6个；');
        expect(org.report(new CEO())).toEqual('工程师：小张KPI:1200；工程师：小王KPI:2300；工程师：小李KPI:3400；经理：张总KPI:2 今年共完成项目：2个；经理：王总KPI:4 今年共完成项目：4个；经理：李总KPI:6 今年共完成项目：6个；');
    })
});

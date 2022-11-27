import { TerminalExpression, OrExpression, AndExpression } from '../src/Interpreter';

describe("interpreter", () => {
    it("expression", () => {
        const robert = new TerminalExpression("Robert");
        const john = new TerminalExpression("John");
        const or = new OrExpression(robert, john);

        const julie = new TerminalExpression("Julie");
        const married = new TerminalExpression("Married");
        const and = new AndExpression(julie, married);

        expect(or).toBeTruthy();
        expect(and).toBeTruthy();
    })
});

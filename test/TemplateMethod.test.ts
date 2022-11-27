import { IosBuilder } from '../src/TemplateMethod';

describe("template method", () => {
    it("ios builder", () => {
        const builder = new IosBuilder()
        expect(builder.build()).toEqual('Running ios testsLinting the ios codeAssembling the ios buildDeploying ios build to server');
    })
});

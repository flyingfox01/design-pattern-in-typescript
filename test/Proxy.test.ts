import { InlandWebsite } from '../src/Proxy';

describe("proxy", () => {
    it("download foreign movie from inland website", () => {
        const site = new InlandWebsite('https://www.inland.wbsite');
        expect(site.downMovie('阿凡达')).toContain('国内镜像版本 - 阿凡达.mp4');
    })
});

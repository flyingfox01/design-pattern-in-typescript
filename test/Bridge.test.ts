import { DarkTheme } from '../src/Bridge/Theme';
import { AboutPage, DetialPage } from '../src/Bridge/Page';

describe("brider", () => {
    it("page with dark theme", () => {
        const theme = new DarkTheme();
        const about = new AboutPage(theme);
        const detail = new DetialPage(theme);

        expect(about.getContent()).toContain('Dark Black');
        expect(detail.getContent()).toContain('Dark Black');
    })
});

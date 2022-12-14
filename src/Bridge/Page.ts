import { Theme } from './Theme';

export interface WebPage {
  theme: Theme;
  getContent(): string
}

export class AboutPage implements WebPage {
  theme: Theme;

  constructor(_: Theme) {
    this.theme = _;
  }

  public getContent(): string {
    return "About page in " + this.theme.getColor();
  }
}

export class DetialPage implements WebPage {
  theme: Theme;

  constructor(_: Theme) {
    this.theme = _;
  }

  public getContent(): string {
    return "Detial page in " + this.theme.getColor();
  }
}
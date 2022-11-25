export interface Theme {
  getColor(): string
}

export class DarkTheme implements Theme {
  public getColor(): string {
    return 'Dark Black';
  }
}

export class LightTheme implements Theme {
  public getColor(): string {
    return 'Off white';
  }
}

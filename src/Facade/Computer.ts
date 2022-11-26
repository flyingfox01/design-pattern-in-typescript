export class Computer {
  public getElectricShock(): string {
    return "Ouch!";
  }

  public makeSound(): string {
    return "Beep beep!";
  }

  public showLoadingScreen(): string {
    return "Loading..";
  }

  public bam(): string {
    return "Ready to be used!";
  }

  public closeEverything(): string {
    return "Bup bup buzzz!";
  }

  public sooth(): string {
    return "Zzzzz";
  }

  public pullCurrent(): string {
    return "Haah!";
  }
}

export class ComputerFacade {
  private computer;

  constructor(_: Computer) {
    this.computer = _;
  }

  public turnOn(): string {
    return [
      this.computer.getElectricShock(),
      this.computer.makeSound(),
      this.computer.showLoadingScreen(),
      this.computer.bam()
    ].join(' ')
  }

  public turnOff() {
    return [
      this.computer.closeEverything(),
      this.computer.pullCurrent(),
      this.computer.sooth()
    ].join(' ')
  }
}
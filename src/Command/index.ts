// Receiver
export class Bulb {
  public turnOn(): string {
    return "Bulb has been lit";
  }

  public turnOff(): string {
    return "Darkness";
  }
}

export interface Command {
  execute(): string;
  undo(): string;
  redo(): string;
}

// Command
export class TurnOn implements Command {
  protected bulb: Bulb;

  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }

  public execute(): string {
    return this.bulb.turnOn();
  }

  public undo(): string {
    return this.bulb.turnOff();
  }

  public redo(): string {
    return this.execute();
  }
}

export class TurnOff implements Command {
  protected bulb: Bulb;

  constructor(bulb: Bulb) {
    this.bulb = bulb;
  }

  public execute(): string {
    return this.bulb.turnOff();
  }

  public undo(): string {
    return this.bulb.turnOn();
  }

  public redo(): string {
    return this.execute();
  }
}

// Invoker
export class RemoteControl {
  public submit(command: Command): string {
    return command.execute();
  }
}

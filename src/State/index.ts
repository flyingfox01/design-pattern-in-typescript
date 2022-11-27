export interface State {
  doAction(context: Logistics): string;
}

export class Logistics {
  public state!: State;

  updateState(state: State) {
    this.state = state;
  }

  doAction(): string {
    return this.state.doAction(this);
  }
}

export class OrderState implements State {
  public doAction(context: Logistics): string {
    return "商家已经接单，正在处理中..."
  }
}

export class ProductOutState implements State {
  public doAction(context: Logistics): string {
    return "商品已经出库..."
  }
}

export class TransportState implements State {
  public doAction(context: Logistics): string {
    return "商品正在运输中..."
  }
}

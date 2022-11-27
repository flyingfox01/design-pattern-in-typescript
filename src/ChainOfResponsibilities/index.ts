export abstract class Account {
  protected type!: string;
  protected next!: Account;
  protected balance!: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public setNext(account: Account) {
    this.next = account;
  }

  public pay(amountToPay: number): string {
    if (this.canPay(amountToPay)) {
      return 'pay by ' + this.type;
    } else if (this.next) {
      return this.next.pay(amountToPay);
    } else {
      throw new Error('None of the accounts have enough balance');
    }
  }

  public canPay(amount: number): boolean {
    return this.balance >= amount;
  }
}

export class Bank extends Account {
  protected type: string = 'bank';
}

export class Paypal extends Account {
  protected type: string = 'paypal';
}

export class Bitcoin extends Account {
  protected type: string = 'bitcoin';
}

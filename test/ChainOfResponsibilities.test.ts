import { Bank, Paypal, Bitcoin } from '../src/ChainOfResponsibilities';

const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

// 组装职责链
bank.setNext(paypal);
paypal.setNext(bitcoin);

describe("chain of responsibilities", () => {
    it("choose payment", () => {
        expect(bank.pay(259)).toContain('pay by bitcoin');
    })
});

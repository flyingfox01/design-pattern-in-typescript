/**
 * 饮料
 */
export interface Beverage {
  desc(): String;
  cost(): number
}

/**
 * 意大利浓缩咖啡
 */
export class Espresso implements Beverage {
  desc(): string {
    return '意大利浓缩咖啡';
  }

  cost(): number {
    return 1.99;
  }
}

/**
 * 综合咖啡
 */
export class HouseBlend implements Beverage {
  desc(): string {
    return '综合咖啡';
  }

  cost() {
    return 0.89;
  }
}

/**
 * 调味咖啡
 */
export class CondimentDecorator implements Beverage {
  beverage: Beverage
  times: number = 1;
  type: string = '';

  constructor(_: Beverage) {
    this.beverage = _;
  }

  desc(): string {
    return [this.beverage.desc(), this.type].join(', ');
  }

  cost(): number {
    return this.times * this.beverage.cost();
  }
}

/**
 * 牛奶
 */
export class Milk extends CondimentDecorator {

  constructor(_: Beverage) {
    super(_);
    this.times = 1.8;
    this.type = 'milk'
  }

}

/**
 * 巧克力
 */
export class Chocolate extends CondimentDecorator {

  constructor(_: Beverage) {
    super(_);
    this.times = 1.2;
    this.type = 'chocolate'
  }

}
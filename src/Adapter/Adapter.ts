export class Adaptee {
  speak() {
    return 'speak sth'
  }
}

export class Target {
  bark() {
    return 'wang wang'
  }
}

export class Adapter implements Target {
  private adaptee: Adaptee;// 适配者

  constructor(_: Adaptee) {
    this.adaptee = _
  }

  bark(): string {
    return this.adaptee.speak()
  }

}

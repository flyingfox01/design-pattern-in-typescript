import Shape from './Shape';

type Attrs = {
  x: number;
  y: number;
  radius: number;
};

class Circle implements Shape {
  readonly type: string = 'Circle';

  private _attrs: Attrs = <Attrs>{}

  constructor(obj: Attrs) {
    this._attrs = {
      x: obj.x,
      y: obj.y,
      radius: obj.radius,
    };
  }

  public get x(): number {
    return this._attrs.x;
  }

  public set x(_: number) {
    this._attrs.x = _;
  }

  public get y(): number {
    return this._attrs.y;
  }

  public set y(_: number) {
    this._attrs.y = _;
  }

  public get radius(): number {
    return this._attrs.radius;
  }

  public set radius(_: number) {
    this._attrs.radius = _;
  }

  public getType(): string {
    return this.type
  }

  public clone() {
    return new Circle(this)
  }
}

export default Circle;
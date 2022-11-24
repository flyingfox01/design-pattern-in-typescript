import Shape from './Shape';

type Attrs = {
  x: number;
  y: number;
  side: number;
};

class Square implements Shape {
  readonly type: string = 'Square';

  private _attrs: Attrs = <Attrs>{}

  constructor(obj: Attrs) {
    this._attrs.x = obj.x
    this._attrs.y = obj.y
    this._attrs.side = obj.side;
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

  public get side(): number {
    return this._attrs.side;
  }

  public set side(_: number) {
    this._attrs.side = _;
  }

  public getType(): string {
    return this.type
  }

  public clone() {
    return new Square(this)
  }
}

export default Square;
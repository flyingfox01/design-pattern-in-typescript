import Shape from './Shape';

type Attrs = {
  x: number;
  y: number;
  width: number;
  height: number;
};

class Rectangle implements Shape {
  readonly type: string = 'Rectangle';

  private _attrs: Attrs = <Attrs>{};

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

  public get width(): number {
    return this._attrs.width;
  }

  public set width(_: number) {
    this._attrs.width = _;
  }

  public get height(): number {
    return this._attrs.height;
  }

  public set height(_: number) {
    this._attrs.height = _;
  }

  constructor(obj: Attrs) {
    this._attrs.x = obj.x
    this._attrs.y = obj.y
    this._attrs.width = obj.width
    this._attrs.height = obj.height
  }

  public getType(): string {
    return this.type
  }

  public clone() {
    return new Rectangle(this)
  }
}

export default Rectangle;
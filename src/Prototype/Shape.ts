interface Shape {
  [attr: string]: number | any;

  type: string;
  getType(): string
  clone(): object

}

export default Shape;
export interface Expression {
  interpret(context: String): boolean;
}

export class TerminalExpression implements Expression {

  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  public interpret(context: string): boolean {
    return context.includes(this.data)
  }
}

export class OrExpression implements Expression {

  private expr1!: Expression;
  private expr2!: Expression;

  constructor(expr1: Expression, expr2: Expression) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  public interpret(context: string): boolean {
    return this.expr1.interpret(context) || this.expr2.interpret(context);
  }
}

export class AndExpression implements Expression {

  private expr1!: Expression;
  private expr2!: Expression;

  constructor(expr1: Expression, expr2: Expression) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  public interpret(context: string): boolean {
    return this.expr1.interpret(context) && this.expr2.interpret(context);
  }
}


export abstract class Builder {
  public build(): string {
    let ret = ''
    ret += this.test();
    ret += this.lint();
    ret += this.assemble();
    ret += this.deploy();
    return ret;
  }

  public abstract test(): string;
  public abstract lint(): string;
  public abstract assemble(): string;
  public abstract deploy(): string;
}

export class IosBuilder extends Builder {
  public test(): string {
    return 'Running ios tests';
  }

  public lint(): string {
    return 'Linting the ios code';
  }

  public assemble(): string {
    return 'Assembling the ios build';
  }

  public deploy(): string {
    return 'Deploying ios build to server';
  }
}

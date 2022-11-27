export interface Sort {
  data: number[];
  sort(data: number[]): string;
}

export class QuickSort implements Sort {
  public data: number[] = [];
  public sort(data: number[]): string {
    this.data = data;
    return 'sort by quick sort';
  }
}

export class InsertSort implements Sort {
  public data: number[] = [];
  public sort(data: number[]): string {
    this.data = data;
    return 'sort by insert sort';
  }
}

export class BubbleSort implements Sort {
  public data: number[] = [];
  public sort(data: number[]): string {
    this.data = data;
    return 'sort by bubble sort';
  }
}

export class Context {
  private method: Sort;

  constructor(method: Sort) {
    this.method = method;
  }

  public sort(data: number[]): string {
    return this.method.sort(data);
  }
}
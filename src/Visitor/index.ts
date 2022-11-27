export interface Visitor {
  visit(engineer: Engineer | Manager): string;
}

export interface Employee {
  accept(visitor: Visitor): string
}

export class Engineer implements Employee {

  private name: string;

  private kpi: number;

  constructor(name: string, kpi: number) {
    this.name = name;
    this.kpi = kpi;
  }

  public getName(): string {
    return this.name;
  }

  public getKpi(): number {
    return this.kpi;
  }

  public accept(visitor: Visitor): string {
    return visitor.visit(this);
  }

  public getCodeLineTotal(): number {
    return this.kpi;
  }
}

export class Manager implements Employee {
  private name: string;

  private kpi: number;

  constructor(name: string, kpi: number) {
    this.name = name;
    this.kpi = kpi;
  }

  public getName(): string {
    return this.name;
  }

  public getKpi(): number {
    return this.kpi;
  }

  public accept(visitor: Visitor): string {
    return visitor.visit(this);
  }

  public getProductNum(): number {
    return this.kpi;
  }
}

export class CEO implements Visitor {

  public visit(role: Manager | Engineer): string {
    if (role instanceof Manager) {
      return "经理：" + role.getName() + "KPI:" + role.getKpi() + " 今年共完成项目：" + role.getProductNum() + "个；"
    }

    return "工程师：" + role.getName() + "KPI:" + role.getKpi() + '；'
  }

}

export class CTO implements Visitor {
  public visit(role: Manager | Engineer): string {
    if (role instanceof Manager) {
      return "经理：" + role.getName() + " 今年共完成项目：" + role.getProductNum() + "个；"
    }

    return "工程师：" + role.getName() + " 今年代码量" + role.getCodeLineTotal() + "行；"
  }
}

export class Organization {

  private list: Employee[] = []

  public addEmployee(employee: Employee): Organization {
    this.list.push(employee);
    return this;
  }

  public report(visitor: Visitor): string {
    let report = ''
    this.list.forEach(employee => {
      report += employee.accept(visitor);
    });

    return report
  }
}

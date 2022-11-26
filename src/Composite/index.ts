export abstract class Employee {
  protected salary: number;
  protected name: string;
  protected roles: string[] = [];

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public getName(): string {
    return this.name;
  }

  public setSalary(salary: number) {
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getRoles(): string[] {
    return this.roles;
  }
}

export class Developer extends Employee {
  public job: string = 'Developer';
}

export class Designer extends Employee {
  public job: string = 'Designer';
}

export class Organization {
  protected employees: Employee[] = [];

  public addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  public getNetSalaries(): number {
    let netSalary = 0;

    this.employees.forEach(employee => {
      netSalary += employee.getSalary();
    });

    return netSalary;
  }
}

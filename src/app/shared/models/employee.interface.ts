export interface Employee {
  guid: string;
  age: number;
  name: EmployeeName;
  email: string;
}

export interface EmployeeName {
  first: string;
  last: string;
}

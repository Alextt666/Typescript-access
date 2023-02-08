// arrow-function
// const add = (a: number, b: number) => a + b;

// const output: (a: number | string) => void = (output) => console.log(output);

// output(add(2,5));

// rest operate
// const add = (...numbers: number[]) => {
//   return numbers.reduce((cur, val) => {
//     return cur + val;
//   }, 0);
// };

// const addNumbers = add(1, 2, 3, 4, 5, 6, 7);
// console.log(addNumbers);
abstract class Department {
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {};
  static createEmployee(name:string){
    return {name}
  }
  abstract describe(this: Department):void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admins:string[];
  // 自己的构造器
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    // this.admins = admins;
  }
  describe(): void {
      console.log(this.name);
  }
}

const IT = new ITDepartment('d2', ['alex', 'miki']);
IT.describe();
IT.addEmployee('alex');
IT.addEmployee('miki');
IT.printEmployeeInfomation();

class AccountingDepartment extends Department {
  lastReports:string;
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReports = reports[0];
  }
  get mostRecentReport(){
    if(this.lastReports){
        return this.lastReports;
    }
    throw new Error('No report Found.')
  }
  set mostRecentReport(value:string){
    if(!value){
        throw new Error('please pass in a valid value!');
    }
    this.addReports(value);
  }

  describe(): void {
      console.log(`The Department ID is ${this.id}`);
  }

  // override
  addEmployee(employee: string): void {
      if(employee === 'alex'){
        return
      }
      this.employees.push(employee)
  }
  addReports(text: string) {
    this.reports.push(text);
    this.lastReports = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const Accounting = new AccountingDepartment('d2',[]);
Accounting.addReports('D1 something...')
Accounting.mostRecentReport = 'YEAR END REPORT';
console.log(Accounting.mostRecentReport);
Accounting.printReports();
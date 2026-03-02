//step 2
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;    
}
describe() {
    return `${this.name} works in the ${this.department} department`;
}
}

//step 3
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${super.describe()} and manages a team of ${this.teamSize}.`;
    }
}

//step 4
const emp1 = new Employee("Aiden", "Finance");
const emp2 = new Employee("Alex", "Marketing");
const mgr1 = new Manager("Edo", "Engineering", 5);
const mgr2 = new Manager("Rj", "Finance", 3);


//step 5
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        for (const emp of this.employees) {
        console.log(emp.describe());
    }
}
}

//step 6
const company = new Company("Shash's Company");
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);
company.addEmployee(mgr2);

company.listEmployees();

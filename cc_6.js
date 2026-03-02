//step 2
class employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;    
}
describe() {
    return `${this.name} works in the ${this.department} department.`;
}
}

//step 3
class manager extends employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${super.describe()} and manages a team of ${this.teamSize} employees. in the ${this.department} department.`;
    }
}

//step 4
const emp1 = new employee("Aiden", "Finance");
console.log(emp1.describe());
const emp2 = new employee("Alex", "Marketing");
console.log(emp2.describe());

const mgr1 = new manager("Edo", "Engineering", 5);
console.log(mgr1.describe());
const mgr2 = new manager("Rj", "Finance", 3);
console.log(mgr2.describe());




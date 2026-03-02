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
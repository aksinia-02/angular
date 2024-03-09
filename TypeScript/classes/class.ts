import { User } from './interface'

interface Address{
    street: string;
    city: string;
    state: string;
    pin: string
}

class Employee{
    #id: number;
    protected name: string;
    protected address: Address;
    static count: number = 0;

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
        Employee.count++;
    }

    get empId(): number{
        return this.#id;
    }

    set empId(id: number){
        this.#id = id;
    }

    getNameWithAddress(){
        return `${this.name} stays at ${this.address.city}, ${this.address.street}`;
    }

    static getEmployeeCount(): number{
        return Employee.count;
    }

}

let john = new Employee(1, "john", {
    street: "street1",
    city: "city1",
    state: "state1",
    pin: "500094"});

console.log(john);
console.log(john.getNameWithAddress());

john.empId = 200;

class Manager extends Employee{
    constructor(id: number, name: string, address: string) {
        super(id, name, {
            street: "street2",
            city: "city2",
            state: "state2",
            pin: "23456"
        });
    }

    getNameWithAddress(): string {
        return `${this.name} is manager in ${this.address.city}, ${this.address.street}`;
    }

}

let manager = new Manager(2, "emma", "zweite Strasse");

console.log(manager.getNameWithAddress());

console.log(`There are ${Employee.getEmployeeCount()} employees`);
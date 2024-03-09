"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
        Employee.count++;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address.city}, ${this.address.street}`;
    }
    static getEmployeeCount() {
        return Employee.count;
    }
}
_Employee_id = new WeakMap();
Employee.count = 0;
let john = new Employee(1, "john", {
    street: "street1",
    city: "city1",
    state: "state1",
    pin: "500094"
});
console.log(john);
console.log(john.getNameWithAddress());
john.empId = 200;
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, {
            street: "street2",
            city: "city2",
            state: "state2",
            pin: "23456"
        });
    }
    getNameWithAddress() {
        return `${this.name} is manager in ${this.address.city}, ${this.address.street}`;
    }
}
let manager = new Manager(2, "emma", "zweite Strasse");
console.log(manager.getNameWithAddress());
console.log(`There are ${Employee.getEmployeeCount()} employees`);
//# sourceMappingURL=class.js.map
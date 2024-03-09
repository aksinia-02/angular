//string
let fisrtName : string = 'John';
let lastName : string;
lastName = 'Black';
console.log(fisrtName.toUpperCase() + " " + lastName.toUpperCase());

//numbers
let age : number = 20;
age = 23.5;
let result = parseInt('2');
console.log(age * result);

//boolean
let isValid : boolean;
isValid = true;
console.log(!isValid);

//array
let empList = [];
let empList1 : string[];
empList1 = ["Hello", "Hello", "Hello"];
let depList : Array<string>;
let numList : Array<number>;
numList = [1, 2, 3, 4, 2];

let numResult = numList.filter((num)=> num > 2);
console.log(numResult);

let num = numList.find((num) => num === 2);
console.log(num);

let emp = empList1.find((emp) => emp === "Hello1");
console.log(emp);

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

//enum
enum Color{
    RED,
    GREEN,
    BLUE
}

let c: Color = Color.BLUE;
console.log(parseInt(c.toString()));

//tuple
let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number]{
    return [num2, num1]
}

swapNumbs = swapNumbers(1, 2);
console.log(swapNumbs);

//any
//let department: any;
//department = "IT";

//void

//never
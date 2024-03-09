"use strict";
//string
let fisrtName = 'John';
let lastName;
lastName = 'Black';
console.log(fisrtName.toUpperCase() + " " + lastName.toUpperCase());
//numbers
let age = 20;
age = 23.5;
let result = parseInt('2');
console.log(age * result);
//boolean
let isValid;
isValid = true;
console.log(!isValid);
//array
let empList = [];
let empList1;
empList1 = ["Hello", "Hello", "Hello"];
let depList;
let numList;
numList = [1, 2, 3, 4, 2];
let numResult = numList.filter((num) => num > 2);
console.log(numResult);
let num = numList.find((num) => num === 2);
console.log(num);
let emp = empList1.find((emp) => emp === "Hello1");
console.log(emp);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
//enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let c = Color.BLUE;
console.log(parseInt(c.toString()));
//tuple
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(1, 2);
console.log(swapNumbs);
//any
//let department: any;
//department = "IT";
//void
//never

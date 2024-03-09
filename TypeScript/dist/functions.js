"use strict";
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3));
console.log(add(2, 3, 4));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(3, 2));
console.log(sub(3, 2, 5));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[1, 2, 3]));
console.log(add2(2, 3, 3, 4, 5, 6, 7));
//generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4]);
let concatString = getItems(["a", "b", "c"]);
console.log(concatResult);
console.log(concatString);
//# sourceMappingURL=functions.js.map
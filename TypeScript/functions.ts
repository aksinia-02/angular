function add(a: number, b: number, c?: number){
    return c? a + b + c : a + b;
}

console.log(add(2, 3));
console.log(add(2, 3, 4));

const sub = (num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3;

console.log(sub(3, 2));
console.log(sub(3, 2, 5));

function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, ...[1, 2, 3]));
console.log(add2(2, 3, 3, 4, 5, 6, 7));

//generic functions

function getItems<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4]);
let concatString = getItems(["a", "b", "c"]);

console.log(concatResult);
console.log(concatString);


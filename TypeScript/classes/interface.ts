export interface User{
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user = {
    name: 'John',
    id: 1,
    email: 'john@gmx.at'
}

interface Tester extends User{
    experience: number;
}

let {name: Username, email: userLogin}: User = {name: "John", id: 1, email: "email"};

let [user1, user2, ...restUsers]: User[] = [
    {name: "name1", id: 1, email: ""},
    {name: "name2", id: 2, email: ""},
    {name: "name3", id: 3, email: ""},
    {name: "name3", id: 4, email: ""}
];

console.log(user1);
console.log(user2);

let result = restUsers.filter(user => user.id > 2);
console.log(result);

//@Component
//class Component{
//    constructor(public name: string) {
//    }
//}
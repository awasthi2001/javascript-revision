/*
Let and const declarations are hoisted but its different from var.

*/
console.log(a);// Refernece error : can't access a before initialization

console.log(b);// prints undefined as expected.

let a = 10;
var b = 10;

/*
Both a and b are actually initialized as undefined in the hoisting stage. But b is inside the the storage space of global object and 
a is in a separate storage space. where it can be accessed only after assigning some value to it first. we can access it only if it assigned with some
value else it will throw an error.

Temporal Dead Zone :- Time since when let and const variable are hoisted until it is initialized with some value
So, any line till before let a =10 is the temporal dead zone for a
Since a is not accessible on gobal also it not accessible on window and this .
Let is stricter than var but const is even stricter than let 
For Example:-

*/
let d;
d = 15; // note declaration and assigning of d is in different lines

// const c; // syntax error : Missing initializer in const declaration(This type of declaration won't work with const .
// c = 50;

//const b = 50;
// b = 60; //This gives us type error : Assignment to constant variablei9






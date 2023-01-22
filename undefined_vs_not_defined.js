/*
In first phase (memory creation phase) javascript assigns each variable a placeholder called undefined .
Undefined is when memory is allocated for variable but no value is assigned yet.

And

If an variable is not even declared in memory allocation phase and tried to access it then it is not defined


*/

//Example of undefined

console.log(a); // Undefined
var a = 10;


//Example of not-defined

console.log(b); //reference error: b is not defined
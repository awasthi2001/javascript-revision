/*
Callback Function :- Callback is a function passed as an argument to another function .In javascript function are treated as a first class citizens
they can used as an argument to the function.

*/

function x(y){ // function x is a higher order function
 y()
}

function y(){
    console.log("I am y") // function y is a callback function 
}

x(y)



/*
What is higher order function ?
Ans. A higher order function are the functions that take other functions as arguments or return functions as their result

*/
/*
 Pass by Value :- In pass by value function is called directly called by passing the value of the variable as an argument . So any changes
 made to the function does not affect the original value

 PassbyReference :- In pass by reference function is called directly by passing the reference of the variable as an argument. So any changes made
 inside the function also changes the original value.
 In javascript array and object follows pass by reference.

*/

//Pass by value example

function x(y){
 y = y+1;
 console.log(y)
}

let y = 10;

x(y);

console.log(y)// it wll print 10 only


//pass by reference example

function z(obj){
 obj.name = "amit"//it also affect the original value
}

let obj = {
    name : "akshansh"
}
z(obj)

console.log(obj)
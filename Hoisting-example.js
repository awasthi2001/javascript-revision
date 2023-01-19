getName(); // it works properly because in global execution context memory creation phase it store x : undefined and getName : {..} whole code
         //if we call this function before declaration so it will print Akshansh Awasthi
console.log(x);// here it will print undefined because before var x = 10 line this  x : undefined 
var x = 10;
function getName(){
    console.log("Akshansh Awasthi")
}

/*
Definition of Hoisting :- So I have two definitions for this let's write both

1. Hoisting is a concept which enables us to extract values of variables and functions even before initializing value without getting an error
  and this is happening due to the 1st phase (Memory creation phase) of the execution context.
          
                                       OR

2. Hoisting is a Javascript default behavior of finding variables and functions decalaration even before single line of code runs
  so, it doesn't care about variables values and functions all it wants to know that what variables are present in the program. 

*/
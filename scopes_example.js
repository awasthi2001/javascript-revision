/* Scope in javascript is directly related to lexical enviroment*/
//Example no.1
function x(){
    console.log(b);
    //Instead of printing undefined it will print 10 because function is able to access the glob
}

var b = 10;
x();
/*
working of this
before even running the single line it a global execution context is created and 
there will be two phases 
1.Memory creation phase
2.Code Execution phase

1. 
  x : {....} it store whole code
  b : undefined

2.
  b : 10;
  x();
 A brand new execution context is created and there will be two phases 
 so in first phase there will local memory and lexical enviroment of its parent
 
 Now in code execution phase it will see console.log(b) first it will look it inside the local memory but it
 is not there so it will find inside its parent lexical enviroment and print 10

 Definition of Lexical enviroment :- Local memory + lexical enviroment of its parent, hence lexical enviroment is the local memory along with the lexical
 enviroment of its parent.
 Whenever an execution context is created a lexical enviroment is also created and is referenced in the memory space.

 What is scope chain ?
 Ans. The process of going one by one to parent and checking for values is called scope chain.
 function a(){
  function c(){

  }
 }
 c() ; // c is lexically inside a
      //a is lexically inside global 

Scope :- Scope in javascript refers to the accessiblity and visibility of variables. That means which part of a pragram have access to variables
or where the variable is visible.

1. Global Scope :- Variables that declared outside of all function are known as global variable and in the global scope. global variable are accessible
anywhere in the program.

2. Local Scope :- Variables that declared inside a function are known as local variable and in the local scope. local variable are accessible inside 
  anywhere in that function

3. Lexical scope :- The Lexical scope in javascript means that a variable defined outside a function can be accessible inside a function.

 
*/

// Global scope example :-

let a = 10;

function c(){
 console.log(a)//a is the global variable and we can access it anywhere in the program
}

c();

// Local scope example :-

function d(){
  let e = 10;// e is the local variable and we can access it anywhere in this function only 
  console.log(e); // 10
}

//console.log(e); // it will throw an reference error e is not defined

// Lexcial Scope example

let l = 10;
function lexical(){
console.log(l)// it will print 10 because according to lexical scope we can access outside variables from the function
}
lexical();
/*
Function Statement :- The function statement declares a function . A declared function is saved for later use and will be executed later.
*/

function a(){
    console.log("I am a");
}
a();

/*
Function expression :- Assigning a function to a variable . bascially function acts like a value;
*/

var b = function(){
    console.log("I am b")
}
b();

/*
Difference b/w function statement and function expression
The major difference between both is hoisting.
If i tried to call a function statement before initialization it will work properly.
But if i tried to call a function expression before initialization it will throw an error.

why? During memory creation phase a function statement stored as a whole code but in case of function expression because we are assigning it to a
varible it will work like a normal variable and gets undefined during memory creation phase.
And If try access it before initialization it will throw an error.
*/

//What is anonymous function ?

/*
Ans. A function without is called anonymous function. Anonymous functions are used when functions are used as a values /
for eg. a function expression can also be used as anonymous function
*/


//What is Named function expression ?
//Ans. Same as function expression but function has a name instead of anonymous.

  var c = function xyz(){
    console.log("hii")
  }

  c()// 'hii'
  //xyz() // Throws reference error xyz is not defined it is because xyz is not created in global scope.

  // Parameters and arguments

  /*
   * parameters are the variables listed as a part of the definition

   * arguments are the values passed to the function at the time of function invocation.
  */


  // What is First Class functions ?
  /*
   When functions can be treated like any other variable then those functions are called first class functionss
  */


  //What is pure function ?
  /*Ans. A pure function is a function (a block of code) that always returns a same results if the same arguments are passed . It does not
         depend on any state or data change during the execution . Rather it only depends on its input arguments.

         Also a pure function does not produce any side effects such as network requests or data mutations etc.
  */       

         //For example :-

         function CalculateMultiply(a,b){
            return a*b;
         }

         console.log(CalculateMultiply(7,4))
/*
The below example is not a pure function because it also depend on the outer variable
Note: If a pure function calls a pure function, this isn’t a side effect and the calling function is still considered pure. 
(Example: using Math.max() inside a function)

Below are some side effects (but not limited to) that a function should not produce in order to be considered a pure function –

Making an HTTP request
Mutating data
Printing to a screen or console
DOM Query/Manipulation
Math.random()
Getting the current time
*/

         let d  = 20;

         function Calculate(b){
          return d*b;
         }



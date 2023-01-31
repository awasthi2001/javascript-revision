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
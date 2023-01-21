/* Scope in javascript is directly related to lexical enviroment*/
//Example no.1
function x(){
    console.log(b);
    //Instead of printing undefined it will print 10
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
*/


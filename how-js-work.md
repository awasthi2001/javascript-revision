Q1. How Javascript works ?




Ans. When a javascript code is run a global execution context is created.

  ### The Execution Context is created with two Phases
     1. Memory Creation Phase : In this phase Javascript allocates a memory to a variable and functions as a key value pair.
     before even a single line of code run.
    
     so In case of variable it allocates a
     special memory undefined
     And In Case of function it allocates 
     whole code
     but arrow functions and function expressions
     acts as a variable a gets undefined during 
     memory creation phase

     2. Code Execution Phase : In this phase javascript run code line by line.


  ## Let's look at the example below

   var n = 2;

   function cube(num){
    var ans = num x num x num;
    return ans;
   }

   var cube_of_two = square(n);
   console.log(cube_of_two)     

 Memory creation Phase : 
   The first thing which memory creation so, it goes to line no. 1 and allocates memory to n as undefined and In case of function it allocates memory as whole code.And after that in case of cube_of_two it allocates undefined
   So, this is end of the Memory creation phase

Code Execution Phase : 
   Now in second it goes to line no. 1
 where it sees n==2 then it allocates memory as 2.
 before this n==undefined but now it is n==2
 Then, there is nothing to do in the function
 because we already have this in memory creation phase.
 Now , coming to the next line it will se 
 var cube_of_two = cube(n)
 So, here functions are bit different from other
 programming languages. A new execution context is created and push it to the top of call Stack.

 In this function, there are two phases memory creation phase and code execution phase
 in first phase it allocates memory as undefined 
 to num and ans 
 Now coming to code execution phase it will check like the value is 2 so it allocates memory of num is 2. ans = 2*2*2 , ans = 8;
 after this line it will see the return keyword
 it basically return the control back to where the function was called.
 And after this function execution is deleted and it 
 will cube_of_two = 8;
  
  after this it will see console.log(cube_of_two);
  so it will print 8 in the console.
  and In the last global execution is also deleted.
  and now our call stack is empty.


## What is Call Stack ?
Ans . JavaScript manages code execution context creation and deletion with the help of the call stack

Call Stack is mechanism is used to keep track of 
of its place in script that calls multiple functions

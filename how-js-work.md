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
     
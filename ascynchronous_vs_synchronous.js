const fs = require('fs')
/*
 RealLife Example :- Think of a waiter working in a reastaurent . He goes around the reastaurent taking orders from the customers and serving
 when their respective food is ready . What happens when the waiter takes an order from the customer and waits until the food is prepared.
 The later example is of synchronous and earlier is of asynchronous.
*/

console.log("first")//[clg]

setTimeout(()=>{ //settimeout sets an timer which executes a function or specified piece of code once timer expires.
console.log("inside settimeout")
},1000)

console.log("last");

let prom = new Promise(function(resolve,reject) {
  if(true){
    resolve("success")
  }else{
    reject("error")
  }
})

prom.then((res)=>{
console.log(res)
})

/*
Exaplanation of above example :- 
 In the above example the first console.log is pushed to the callstack and "first" is printed on the console and the task is popped of from the callstack and Next settimeout is pushed to the queue and  until then second console.log()
 is pushed to the callstack and "last " is printed on the console and the task is popped of from the callstack.   when the timer is expires . settimeout now sent to the callback queue and The event loop will find the callstack is empty takes the task 
 and execute it and the task is popped of from the callstack.
*/



/*
Note: In the above case, if the timeout was set to 0ms then also the statements will be displayed in the same order. This is because although the callback with be immediately sent to the event queue, the event loop won’t send it to the call stack unless the call stack is empty i.e. until the provided input script comes to an end.
*/


/*
Event Loop :- We all know that javascript is a single threaded language it can do only one thing at a time while one operation 
             is being performed other operations are blocked. The completion of first will trigger next and so on. but there will 
             be some kind of code which will take long to execute .
             We will give to the browser api and then it will added to the callback queue . Then event loop runs a loop to keep checking is anything remaining in the callback queue and call stack is empty . If functions call are still here in the callback queue they will send to callstack where they will deleivered.
          
       

        * event loop has just one job to keep checking callback queue and if found something push it to stack and delete from callback queue.
         
        Features of Event loop :- 
        *Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
        *The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
        *The event loop allows us to use callbacks and promises.
        *The event loop executes the tasks starting from the oldest first.     
   
    Callstack :- Any function when invoked goes into the callstack and removed when the work of this function is done
                 and basically it is a mechanism which keep track of the function deletion and creation
                 

    Callback queue :- The Callback queue holds the asynchronous functions which are ready to executed . The items present in the queue           
    are only called when the callstack is empty.

 Microtask Queue :- All the callback functions comes from the promises go in the microtask queue like fetch.
 
 1). If the task in microtask queue is keep creating a new task . The function in callback queue never gets a chance to run .This is called
 call starvation.

 Difference between asynchronous and synchronous
 Asynchronous :- It does not block further execution while one or more operations are in progress.
 Synchronous :- 1)It has a blocking architecture 
                2) While one operation is being performed other operations are blocked the completion of first will trigger next 
                and so on.
*/


/* Difference between readFile() and readFileSync() ?
Ans. In readFile() we can read a file in a non-blocking asynchronous way but in readFileSync() we can read the file in synchrous way . In this we 
     are telling node.js to block other processes and do the current file reading process.
  
 This is when the fs.readFileSync() method is called . The original node program stop executing and node waits for for the fs.readFileSync() method to get get executed .
 
*/

fs.readFile('./input2.txt',{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }    
})

const data = fs.readFileSync('./input1.txt',{encoding:'utf-8'})
console.log(data)



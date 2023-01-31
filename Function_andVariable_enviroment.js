var a = 1;
x(); //these functions are working because of hoisting
y()
function x(){
    var a = 10;
    console.log(a)
    //it will print 10 because when x function is called and brand new function execution context is created and in the first phase
    //(memory creation phase) the brand  new x is created  and got undefined in the first phase and in the second phase 10 is assigned to a
    //when it willl see console.log(a) it will print 10 after that it will return back to the line where it was called 
}


function y(){
    var a = 100;
    console.log(a); 
} 


console.log(a); // here it will print 1 because first it see in its memory creation phase it will find there is a = 1 so it will print 1
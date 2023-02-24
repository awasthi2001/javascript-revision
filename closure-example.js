// function x(){
//     let z = 10;
//     function y(){
//         console.log(z); 
//     }
//     return y;
// }


// let y = x();
// y();
// let  count = 0;
// function increment(){
//     count++;
//     console.log(count);
// }
// increment();

function Counter(){
    var count = 0;
    this.increment = function(){
        count++;
        console.log(count)
    }
}
var counter1 = new Counter();

counter1.increment();

counter1.increment();
// console.log(count);

function Counter2(){
    let count = 0;
    return function increment(){
        count++;
        console.log(count);
    }
}

let counter5 = Counter2();
counter5();
counter5();

let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiplybytwo = multiply(2);
multiplybytwo(5)





function z(){
    for(var i=1; i<=5; i++){
        function close(i){
            setTimeout(()=>{
             console.log(i)
            },i*1000);
        }
        close(i);
    }
}


z();

//function currying
function multiply1(x){
    return function(y){
        console.log(x*y);
    }
}


let multiplybytwo1 = multiply1(2);
multiplybytwo1(3)


// data hiding



// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// let a = counter()
// a();

function fact(n){
    if(n==1){
        return 1;
    }
    return n*fact(n-1);
}

console.log(fact(5))

function Person(name, age){
    this.name = name;
    this.age = age;
}

let person = new Person("akshansh",52);
console.log(person)


//without closure 

// var count = 0;
// function increment(){
//     count++;
//     console.log(count)
// }
// in the above example anyone can access this count and change the value of count

//with closure

function counter(){
    var count = 0;
return function increment(){
    count++;
    console.log("count",count)
}
}

let Counter8 = counter();
Counter8();
//in the above example no one can access the count and can not change the value

//to improve this we can write

function Counter(){
    var count = 0;
    this.increment = function increment(){
        console.log("a",count++)
    }

}


let counre = new Counter();
counre.increment()
counre.increment()

//function currying

function multiplys(a){
    return function(b){
        console.log(a*b);
    }
}

let multiplybytwo5 = multiplys(2);
multiplybytwo5(3)


//Disadvantages of closures :-
/*
Overconsumption of memory when using closures everytime as those closed variable are not garbage collected till program expires . 
So when creating many closures more memory is accumulated .

Garbage Collector:- Program in javascript engine or browser thats free up unused memory.
*/

// function r(){

//     for(var i=1; i<=5; i++){
//         function close(i){
//         setTimeout(()=>{
//           console.log(i)
//         },i*1000)
//         }
//         close(i)
//     }
// }

// r()



//cuur

let multiply8 = function(x){
    return function(y){
        console.log(x*y)
    }
}


let multiply9 =  multiply8(9);
multiply9(4)//36

function increment(){
    
var c = 0;
 return function(){
    c++;
    console.log(c)
 } 

}



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
console.log(count);
/*
Polyfill for map
*/

let arr = [1,2,3,4,5,6];

Array.prototype.Mymap = function(fn){
    let ans = [];
   for(let i = 0; i<this.length; i++){
     let val = fn(this[i],i,this);
     ans.push(val);
  }
  return ans;
5}

let ans = arr.Mymap((ele)=>{
    return ele*2;
})

console.log(ans)

/* Polyfill for filter */

Array.prototype.Myfilter = function(fn){
    let arr = []
    for(let i=0;i<this.length; i++){
        let val = fn(this[i],i,this);
        if(val){
            arr.push(this[i]);
        }
    } 
    return arr;
}

let ans2 = arr.Myfilter((ele)=>{
    return ele%2==0;
})
console.log(ans2)
 

/* polyfill for reduce */
Array.prototype.Myreduce = function(fn,initialValue){
    let acc = 0;
    if(initialValue!=undefined){    
        acc = initialValue;  
       for(let i=0; i<this.length; i++){
        acc= fn(acc,this[i],i,this);
       }
    }else{
        acc = this[0];
        for(let i=1; i<this.length; i++){
         acc = fn(acc,this[i],i,this);
        }
    }
    return acc;
}
let arr4 = [1,2,3,4]
// if initial value is there then our acc is initial value and 
//if initial value is not there then our initial value is our first element of array
let ans3 = arr4.Myreduce((acc,ele)=>{
 return acc+ele; 
})
console.log(ans3)



/* ForEach polyfill*/

Array.prototype.MyForEach = function(fn){
  for(let i=0; i<this.length; i++){
      fn(this[i],i,this)
  }

}
let arr5 = [1,2,3,4]
arr5.MyForEach((ele)=>{
    console.log(ele*2);
})


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
}

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


function MyArray(){
 this.length = 0;//this is the initial length
 Object.defineProperty(this,'length',{
    value : 0,
    enumerable : false,
    writable : true
 })
}

MyArray.prototype.push = function(elem){
    this[this.length] = elem;
    this.length++;
    return this.length;
}

MyArray.prototype.pop = function(){
    let elem =  this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return elem;
}

MyArray.prototype.myMap = function(cb){
    var result = new MyArray();
  for(index in this){
       if(this.hasOwnProperty(index)){
         let elem = cb(this[index],index,this)
          result.push(elem)
       }
  }
  //console.log(result)
  return result;
}

var arr = new MyArray();
arr.push('Masai')
arr.push('School')
// arr.pop();
// console.log(arr)

// for(key in arr){
//  console.log(key,arr[key])
// }

let arr2 = new MyArray()

arr2.push(1)
arr2.push(2)
arr2.push(3)
arr2.push(4)

let ans = arr2.myMap((ele,index)=>ele*2)
console.log(ans)
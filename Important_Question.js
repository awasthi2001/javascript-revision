// program to find the sum of the Number until it becomes single number

function calculatesum(num){
 let sum = 0;
 while(num>0 || sum>9){
  if(num==0 && sum>9){// we are doing this because we want a number of only one digit if the sum>9 || num>0 then we do num==sum and sum = 0
    num = sum;
    sum = 0;
  }
  let rem = num%10;
  sum+=rem;
  num = Math.floor(num/10);
 }
 return sum;
}
   let num = 5454;

 console.log(calculatesum(num))


 // Program to check the whether the number is palindrome or not


  function checkPalindrome(num){
    if(num<0){
        return false;
    }
    let temp  = num;
    let reverse = 0;
    while(num!=0){
        let rem = num%10;
        reverse = (reverse*10)+rem;
        num = Math.floor(num/10);
    }
    return temp == reverse;
 }

console.log(checkPalindrome(10101))


// Reverse the Array inPlace 

let arr = [1,2,3,4,5,6,7,8,1]

function swap(arr,a,b){
    let temp  = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
let i = 0,j=arr.length-1;
while(i<j){
    swap(arr,i,j);
    i++;
    j--;
}

console.log(arr);


//Write a code to find the elements occuring only once in the array input : [1,2,3,4,5,1,2] output : [3,4,5]


let nums = [1,2,3,4,5,1,2];

let map = new Map();

for(let i=0; i<nums.length; i++){
  let count = 1;
  if(map.has(nums[i])){
    let v = map.get(nums[i]);
    count = v+1;
  }else{
    count = 1;
  }
  map.set(nums[i], count);
}
let ans = [];
map.forEach(function(value,key){
  if(value==1){
     ans.push(key);
  }
})
console.log(ans);



//guess output

console.log("start")
setTimeout(()=>{
  console.log("first");
},0);
Promise.resolve("second").then((res)=>{
console.log(res)
})
console.log("end");

//output
//start
//end
//second
//first


// guess output 
const num1 = 1;
const num2 = "1";

const obj1 = {name : "akshansh"};
const obj2 = {name : "akshansh"};
 //return true if the values are the same,false otherwise (Working of Object.is() property) introduced in ES6 
console.log(Object.is(num1,num2));//output - false  because both are num1 is a number and num2 is a string
console.log(Object.is(obj1,obj2));//output - false because both are different objects



//guess the output

const players = ["ak",{name:"ak"},"Ck"];

//indexOf basically returns the index of the element if found else return -1
const index1 = players.indexOf({name:"ak"}) // it will return -1 because both objects are referenceing to the different memory
const index2 = players.indexOf("Ck"); // it will return 2

console.log(index1, index2)


//write a program to remove duplicates from an array

let array = [1,2,3,4,5,1,3];
//output : - [1,2,3,4,5]


let set = new Set();

for(let i=0; i<array.length; i++){
  let num = array[i];
  set.add(num)
}
let ans2 =  []

set.forEach((value)=>{
  ans2.push(value)
})

console.log(ans2)
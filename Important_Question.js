// program to find the sum of the Number until it becomes single number

function calculatesum(num) {
  let sum = 0;
  while (num > 0 || sum > 9) {
    if (num == 0 && sum > 9) {
      // we are doing this because we want a number of only one digit if the sum>9 || num>0 then we do num==sum and sum = 0
      num = sum;
      sum = 0;
    }
    let rem = num % 10;
    sum += rem;
    num = Math.floor(num / 10);
  }
  return sum;
}
let num = 5454;

console.log(calculatesum(num));

// Program to check the whether the number is palindrome or not

function checkPalindrome(num) {
  if (num < 0) {
    return false;
  }
  let temp = num;
  let reverse = 0;
  while (num != 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }
  return temp == reverse;
}

console.log(checkPalindrome(10101));

// Reverse the Array inPlace

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
let i = 0,
  j = arr.length - 1;
while (i < j) {
  swap(arr, i, j);
  i++;
  j--;
}

console.log(arr);

//Write a code to find the elements occuring only once in the array input : [1,2,3,4,5,1,2] output : [3,4,5]

let nums = [1, 2, 3, 4, 5, 1, 2];

let map = new Map();

for (let i = 0; i < nums.length; i++) {
  let count = 1;
  if (map.has(nums[i])) {
    let v = map.get(nums[i]);
    count = v + 1;
  } else {
    count = 1;
  }
  map.set(nums[i], count);
}
let ans = [];
map.forEach(function (value, key) {
  if (value == 1) {
    ans.push(key);
  }
});
console.log(ans);

//guess output

console.log("start");
setTimeout(() => {
  console.log("first");
}, 0);
Promise.resolve("second").then((res) => {
  console.log(res);
});
console.log("end");

//output
//start
//end
//second
//first

// guess output
const num1 = 1;
const num2 = "1";

const obj1 = { name: "akshansh" };
const obj2 = { name: "akshansh" };
//return true if the values are the same,false otherwise (Working of Object.is() property) introduced in ES6
console.log(Object.is(num1, num2)); //output - false  because both are num1 is a number and num2 is a string
console.log(Object.is(obj1, obj2)); //output - false because both are different objects

//guess the output

const players = ["ak", { name: "ak" }, "Ck"];

//indexOf basically returns the index of the element if found else return -1
const index1 = players.indexOf({ name: "ak" }); // it will return -1 because both objects are referenceing to the different memory
const index2 = players.indexOf("Ck"); // it will return 2

console.log(index1, index2);

//write a program to remove duplicates from an array

let array = [1, 2, 3, 4, 5, 1, 3];
//output : - [1,2,3,4,5]

let set = new Set();

for (let i = 0; i < array.length; i++) {
  let num = array[i];
  set.add(num);
}
let ans2 = [];

set.forEach((value) => {
  ans2.push(value);
});

console.log(ans2);

//Convert the array into a object

const aar = ["a", "b", "c"];

// 1 way
let obj = {};
for (let i = 0; i < aar.length; i++) {
  obj[i] = aar[i];
}
console.log(obj);

//2nd way

let obj_2 = Object.assign({}, aar);
console.log(obj_2);

//guess output

let a = null;
let b = undefined;

console.log("check", a == b); // it will return true because double equals to checks only values so if we check the boolean value of null that is false
// and boolean value of undefined is also false so false==false will return true

console.log("check", a === b); // it will return false because triple equals to check both values and type so, the type of null is object whereas type of undefined is undefined

//Solve this question

let input1 = {a: 8,b: 2,c: 3,d: 10,e: 12};

let input2 = { a: 2, e: 12, f: 6, d: 10 };

//output should be  output = {d:10,e:12}

function fun(input1, input2) {
  let obj = {};
  for (let i in input1) {
    if (input1[i] == input2[i]) { // i==keys i is the key of the object so if we compare input1['d']==input2['d] if the value is same then only it return true 
       obj[i] = input1[i];
    }
  } 
  return obj;
}

console.log(fun(input1, input2));


//guess output 

const arr1 = [1,2,3];
const arr2 = arr1.reverse(); //[3,2,1] basically reverse function reverse the array inplace and reference to the same array
                             //it means arr1 will also change

arr2.push(4); // [3,2,1,4]

console.log(arr1); //[3,2,1,4]
console.log(arr2);//[3,2,1,4]



//guess output

const m_ap = new Map();

m_ap.set("a",1);
m_ap.set("b",2);
m_ap.set("c",3);
m_ap.set("a",7);

console.log("a",m_ap.get("a"));
console.log("size ",m_ap.size)

// output :- 7 3 because map can't contain duplicate keys ,it will overwrite if we try do it.


//Question : count the number of each fruit


const fruits = [
  {Apple:4,Orange:7,Grape:3},
  {Guava:6,Lemon:4,Banana:8},
  {Orange:5,Pineapple:7,Apple:7}
]
let fruits_count = {};
fruits.forEach((ele)=>{//we are using foreach to iterate over the array
  for(let i in ele){//we are using for in loop to iterate over the object
        if(fruits_count[i]){
            fruits_count[i]+=ele[i]
        }else{
            fruits_count[i] = ele[i]
        }
  }
})

console.log(fruits_count)


//guess output

const str = "Akshansh";
function foo(str){
  if(str.length<2){
    return str;
  }
  return foo(str.slice(1))+str[0];//here slice will extracts the part of the string and returns extracted string in a new string.
  //we are calling the same function foo and pass the input except the first character using slice . After that the result will be reversed.
}

const result = foo(str);
console.log(result)//hsnahskA

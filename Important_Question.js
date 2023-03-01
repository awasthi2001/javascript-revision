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

//guess output

const add = (x)=>x+x;
function addition(num=2,val=add(num)){ //The concept of default parameters is introduced in ES6 . 
                                      //This allows us to give default values to the function parameter
  console.log(num,val);
}
//since we are not passing second argument so add function will be called . The result will be 3 6
addition(3)

//output :- 3 6


//guess output

const calc = {
  total : 0,
  add : function(num){
    this.total += num;
    return this;
  },
  sub : function(num){
    this.total -= num;
    return this;
  },
  mul : function(num){
    this.total *= num;
    return this;
  }
}

console.log(calc.add(10).sub(5).mul(10).total)


//guess output

const age = 24;
const key = "age";

const person = {
  name : "Akshansh",
  [key] : age //However with ES6 , we can directly add the key dynamically using variable.
}

console.log(person.name);
console.log(person.age)

//The output should be Akshansh 24


//guess output

function sum(x,y){
  if(y!==undefined){
   return x+y;   
  }else{
    return function(y){
      return x+y;
    }
  }
}

console.log(sum(2,3)) // it will print 5 because y is not equals to undefined so it will go into the if block and return x+y;
console.log(sum(2)(3))//it will print 5 because it will go to else block and return a new function and we are also calling that function also and it is returning x+y

//guess output

let ss = '20';

switch(ss){
case '20' : {
  ss+=20 //here it will be 2020 and because 20 is a string and we are adding another in it 
//  break;
}
case 20 : {
  ss++
}
}

console.log(ss) //2021



//guess output

var res;
for(var r=5; r>0;r--){
   res = res+r  //here result is uninitialised so the value of the  variable res remains undefined as we know , undefined isn't converted into
                // any number so using it in math calculations returns NaN
}

console.log(res) //NaN



//guess output 

const arr5 = [{key:1},{key:1},{key:2}]
const result2 = [];

const map2 = new Map()

for(let item of arr){
  if(!map.has(item.key)){
    result2.push(item); 
    map.set(item.key,item);
  }
}
console.log(result2);
////[{key:1},{key:2}]-correct answer




//guess output

let str1 = "hello";
str1[1] = "a";

let arr9 = ["h","e","l","l","o"];
arr9[1] = "a"
console.log(arr9,str1)//[h,a,l,l,o], hello


//guess output

var y =  (function(x){
  delete x;
  return x;
})(0)

console.log('y',y) 


//guess output
/*
we can use following conversion rules to see how JS converts types in addition operation

operand + operand = result

a). if at least one operand is an object , it is converted to a primitive value (string,number or boolean
b). After conversion if at least one operand is string type the second operand is converted to string and the concatenation is executed.
c). In other case both operands are converted to numbers and arithmetic addition is executed.
d). If both operands are primitive types then operator checks if atleast one is string and executes the concatenation
e). when the + operator is placed between two booleans the booleans are converted to numbers .
*/

var str4 = true;

console.log(str4+0);//1+0 => 1 //rule c
console.log(str4+"xyz")//truexyz => true+"xyz" => truexyz //rule  
console.log(str4+true);//2 => true+true = 1+1 =>2 => rule e
console.log(str4+false);//1+0 =>1 // rule e



//guess output

const calc2 = eval("10*10+5") //this is function which takes valid javascript code as string and evaluates it.

console.log("calc2", calc2)//105



//find domain name from website

let url = "www.akshansh.co.in";

let first_dot = 0;
let second_dot = 0;

for(let i=0; i<url.length; i++){
  if(url[i]==="."){
    first_dot = i;
    break;
  }
}

for(let i=first_dot+1; i<url.length; i++){
  if(url[i]==="."){
    second_dot = i;
    break;
  }
}

console.log(url.substring(first_dot+1,second_dot));


//guess output

const user = {
  fname : "Akshansh",
  lname : "Awasthi",
  email : null
}

let res2 = Object.values(user).every((val)=>val);
console.log("res",res2)//false this will return false since email is null.


//guess output

function getNumber(){
  return 2,4,5;
}

console.log(getNumber())//In javascript returning single values from a function can be acheived by calling the function . But what if the function
//has multiple values what will it return ?
//We cannot return multiple values at the same time . The reason for this is that we are returning values using the return statement.
//This statement can handle only one value at a time.
//here we are returning values using commas like this , only the last value is actually returned.
//Therefore the output of the code will be 5.
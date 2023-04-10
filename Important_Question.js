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


//guess output

let t = "Hello";
t.length = 3;

console.log(t.length) // Answer will be 5 because the total length is 5 and x.length=3 has no effect on the code So it will print 5



//guess output

let u = "Hello World!";
let v = "string";

console.log(v===typeof u)//Operator typeof return the type of variable . In this case the typeof u is string and here string === string 
// so it will print true here


//guess output

const print = console.log;

print("hello world!");//it creates a variable called "print" and sets it to a function  called "console.log" . This funtion is used to print
//messages to the console in javascript . 
//Then it calls the print function with the arguments hello world . This causes the message "Hello world!" to be printed to the console.
//so in simple terms it is just a way to print a message to the console in javascript .



// let n = 24;
// let l = 0, r = 100, ans5 = n;
// while(l <= r) {
//    let mid = Math.floor((l + r) / 2);
//    if(mid * mid <= n) {
//        ans5 = mid;
//        l = mid + 1;
//    }
//    else {
//        r = mid - 1;
//    }
// }
// print(ans5);


//guess output

let {log} = console;

log("Hello world 8")

//guess output

const numbers = [1,2,3];
numbers.push(4); //[1,2,3,4]
numbers.pop();//[1,2,3]
numbers.push(4);//[1,2,3,4]

console.log(numbers.length); //4


//guess output

let x8 = '10';
let y8 = 20;

console.log(x8+y8) //1020



//guess output

const a8 = [1,2,3];
const b8 = [4,5,6];

const c8 = b8.concat(a8)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.

console.log(c8)


//guess output

let x9 = 5;
console.log((x9=6))//6


//guess output

let count = 5;
count += ++count; //5+6

console.log(count);//11

//guess output

let x = "one";
console.log(Number(x)); // NaN because x is a string so we can not convert it to a number


//guess output

const numbers9 = [1,2,3,4,5]
const [p] = numbers9;
console.log(p)// 1 because of array destructuring


//guess output

let players2 = [
  {name : "vk",role:"Batsman"},
  {name : "hp",role:"All-Rounder"},
  {name : "rj",role : "All-Rounder"}
] 
/*
Javascript every method . It's useful when checking if every element matches a certain criteria . The some method differs in that it checks if only 'some' elements
pass a criteria.
some works like a loop - it loops over every elements and checks if the callback function you gave returns you gave returns true for any of them.
it will check there is a first player vk whose role is "Batsman" it is fulfulling the condition so.some() method will stop and return a true value;
*/



let result9 = players2.some((players)=>{ 
  return players.role==="Batsman";
})
console.log(result9)




//guess output

let o = [1,2,3,4,5];
let q = o.filter((e)=>e%2===0);
console.log(q)


//guess output

let x7 = [1,2,3]
console.log(x7.concat(4,5))


const sum5 =(x,y)=>x+y;
console.log(sum5(4,9))

// console.log(name2)

// name2 = 'masai'
// console.log(name2)
// var name2 

function alpha(){
  var name = 'masai';
  console.log(this.name)
}


var name = 'masai_school'

alpha();



//guess output

const str5 = "Javascript-with-ak"
const res6 = str5.startsWith("Java");//true
/*
Startswith Method :- Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.

*/
const res7 = str5.startsWith("java");//false

console.log(res6,res7)

//guess output

let x2 = 6;
let y2 = typeof (x==6);
console.log(y2) //it should return boolean.


let x3 = [1,2,3];
let y3 = x3.slice();
console.log(y3,x3==y3) // [1,2,3] , false

function x4(){
  return {y:"z"};
}
console.log(typeof x4().y); //string

 
/*lambda function :- A lambda expression is a code you enter to define a short function . A lambda function is mostly present in modern languages , It's just an expression that creates a function.

At runtime the expression is evaluated as a lambda function in memory. 
A lambda function is a short and anonymous function that takes one or more parameters and contains a single expression.


  

*/

//For example : - 

let multiply = (a,b)=>{
  return a*b;
}
console.log(multiply(4,5));


let names = ["akshansh","ankit","adarsh","akash"]

//print the length of all the names

console.log(names.map(name=>name.length));



//guess output

let qz = 7;
let qy = (typeof qz).length; // explanation typeof qz is number and then we are apply length propery on 'number' so the length this is 6;
console.log(qy)//6


//push all 0's to the last

let arq = [0,1,0,4,0,4];
let idx = 0;
for(let i=0; i<arq.length; i++){
  if(arq[i]!==0){
    arq[idx++] = arq[i];
  }
}

while(idx<arq.length){
   arq[idx++]= 0;
}

console.log(arq)


//guess output

let af = 10;
let bf = (af,af+10);
console.log(bf);//it will print 20


//guess output

console.log(undefined==null)//it will print true beacuse both are falsy value
console.log(undefined===null)//it will print false because these are strict checking
console.log(NaN==NaN) //it will print false


var obj4 = {1:'VALUE'}
console.log(obj4[1])


var ree =  {name:'akshansh',age:'24',address:{ward:'1'}}
var ree2 = Object.assign({},ree);//Object.assign is also used to make a shadow copy of the object if we try to change the deeper properties
//it will change the original also
ree2.name = 'adarsh'
ree2.address.ward = '2'
console.log(ree2.address.ward,ree.address.ward)



//call apply bind

let mydetails = {
  name : 'Akshansh Awasthi',
  age : '24',
  city : 'bijawar',
  district : 'chhatarpur'
}


function printAllDetails(){
  console.log(this.name,this.age,this.city,this.district);
}


//printAllDetails.call(mydetails)

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let student1 = {
  name : "Akshansh Awasthi",
  age : 21,
  ward : 1
}
let student2 = {
  name : "Ankit Awasthi",
  age : 32,
  ward : 1
}
function intro(){
  console.log(`my name is ${this.name} and my age is ${this.age} and ward number is ${this.ward}`)
}

let fun5 = intro.bind(student2)
fun5() 

//This method returns a new function where the value of "this" keyword will be bound to the owner object which is provided as a parameter

let e = 5;
let z = 6;

e+= e>z ? e : z;// false ?5 : 6  => e+=6
console.log(e)//11



let array_of_key_valuepair = [["name","akshansh"],["age",21]]

console.log(Object.fromEntries(array_of_key_valuepair))
let obj8 = Object.fromEntries(array_of_key_valuepair);//Object.fromEntries we can convert array key value pairs to objects
console.log(obj8)



//
let xx = [1,2,3]
let yy = xx.map((num)=>{
  xx.push(num+3)
  return num+1
})

console.log(yy)//[2,3,4]


//
let x5 = {a:1,b:2};
let y5 = {b:3};
let z5 = {...x5,...y5};
console.log(z5)//{a:1,b:3}


//finding common element in both array and pushing them in result array

const arr11 = [1,100,10,20,50];
const arr12 = [2,30,21,10,20]
const resultt = []//10,20
for(let i=0; i<arr11.length; i++){
  for(let j=0; j<arr12.length; j++){
    if(arr11[i]===arr12[j]){
        resultt.push(arr11[i])
        break;
    }
  }
}
console.log(resultt)

//

let x11 = [1,2,3]
let[,,k] = x11;
console.log(k)//3


//Print prime numbers up to n numbers.

function isPrime(n){
  if(n==1){
      return false;
  }
  for(let i=2; i<n; i++){
      if(n%i==0){
          return false;
      }
  }
  return true;
}
function printPrime(n){
  for(let i=1; i<=n; i++){
      if(isPrime(i)){
          console.log(i);
      }
  }
}


//printPrime(23)

//Create a function to return the longest word in a string

let str55 = "my name is akshansh awasthiii"

let arr55 = str55.split(" ");
let ans55 = 0;
let max55 = 0;
for(let i=0; i<arr55.length; i++){
    if(arr55[i].length>max55){
        max55 = arr55[i].length;
        ans55 = arr55[i];
    }
}

console.log(ans55)

//quiz 

console.log(bb)
var bb;//here it will print undefined 
//reason :- when we run js file a global execution context is created and this global execution context has two phases first phase
// is called memory allocation phase and second phase is called code execution phase .. even before single line of code executed 
// a variable and function stored in key balue pair where variable stored a spcial value called undefined and function stored 
//whole code 
//so in memory allocation phase it will store bb : undefined
//and in code execution phase it will print undefined.
// 1. pop() method :- It removes the last element from an array and return it .
//                    If the array is empty , Undefined is returned and the array is not modified.

let arr = [1, 2, 3, 4, 5];

console.log(arr.pop()); // 5
console.log(arr); // [1,2,3,4]

// 2. Push () method :- It adds a new element to the last of the array and returns the length of the array

arr.push(8);
console.log(arr); // [1,2,3,4,8]
// and if try to console.log(arr.push(8)) it will return the new length of the array

//3. shift() method :- It removes the first array element and "shift" all the other elements to a lower index

let arr2 = [1, 2, 3, 4];
arr2.shift();
//console.log(arr2.shift()); // 1
console.log(arr2); // [2,3,4]

//4. unshift() method :- It adds a new element to an array (at the beginning);

let cities = ["bhopal", "indore", "umariya"];

cities.unshift("vidisha"); // if we try to console.log(cities.unshift("vidisha")) it returns the new length of the array

console.log(cities); // ["vidisha","bhopal","indore","umariya"]

//5. length method
// it return the length of the array


console.log(cities.length)//4


//6. slice() method :- It slices out a part of an array according to the given arguments

let cities2 = ["bhopal", "indore", "umariya"];


console.log(cities2.slice(0,2))
//console.log(cities2)



//7.splice method :-Removes elements from an array and, if necessary, 
//inserts new elements in their place, returning the deleted elements.


let x = cities2.splice(0,1) 
console.log(cities2)// ["indore","umariya"]
console.log(x) //["bhopal"]


//8. indexOf() method :- It finds the index of the element in an array
//                        and return -1 if element is not found
let arr5 = [1,2,3,4,5];

console.log(arr5.indexOf(6))

//9. includes() method :- It returns true if an array contains a specified value or returns false if the value is not found


let c = arr5.includes(8)

console.log(c)



//10 sort method :  sort the array 

let num = [8,6,8,4,7,22,4,6]
num.sort((a,b)=>a-b);
console.log(num)
 
// findIndex - it returns the index of the first element based on the condition

let n = num.findIndex((ele)=>ele>5)
console.log(n)
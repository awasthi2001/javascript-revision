// 1. pop() method :- It removes the last element from an array and return it .
//                    If the array is empty , Undefined is returned and the array is not modified.

let arr = [1,2,3,4,5]

console.log(arr.pop()) // 5
console.log(arr) // [1,2,3,4]

// 2. Push () method :- It adds a new element to the last of the array and returns the length of the array

arr.push(8)
console.log(arr)   // [1,2,3,4,8]
// and if try to console.log(arr.push(8)) it will return the new length of the array


//3. shift() method :- It removes the first array element and


/*
 Shallow copy :- shallow copy means tht only first level of the object are copied and deeper levels are referenced.
 As you can see in this code snippet:
After updating a property in the first level of the cloned objects, the original property is not updated.
After updating a property in a deeper level, the original property is also updated. This happens because, in this case, deeper levels are referenced, not copied.
*/

let obj = {
    name : "akshansh",
    age : {
        is : 25
    }
}

let obj2 = {...obj};
console.log(obj2)

obj2.name = "adarsh";
obj2.age.is = 48;

console.log(obj)
console.log(obj2)
  
/*
    Deep Copy :- Deep copy means that all level of the object are copied . This is a true copy of the object.


*/
//Default values

// when writing a function . If the values is not passed at the time of function invocation we need to assign default values for arguments that were not passed to the function when it was invoked.

//For example

function sum(maths,eng,science){
    return maths+eng+science;
}

console.log(sum(80,50))//and if i am not passing the marks of science .. It will give error because science is not defined.

//To do this we need to use default values

function sum2(maths=0,eng=0,science=0){
    return maths+eng+science;
}
console.log(sum2(80,50)) //The output will be 130 , because it will take the number of science is 0
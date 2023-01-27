//Program to find the sum of digits of a number until the sum becomes a single digit

let num = 5431; //9

let sum = 0;

while(num>0){
    let rem  = num % 10;
    sum = (sum*10)+rem;
    // sum += () rem;
    num = num/10;
}

console.log(sum)

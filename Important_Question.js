// program to find the sum of the Number until it becomes single number

function calculatesum(){
let sum = 0;
    while(num>0 || sum>9){ // we are doing this because we want a number of only one digit if the sum>9 || num>0 then we do num==sum and sum = 0
        if(num==0 && sum>9){
            num = sum;
            sum = 0;
        }
        let rem  = num%10;
        sum += rem;
        num = Math.floor(num/10);
    }
    return sum;
}
   let num = 54;

 console.log(calculatesum(num))


 // Program to check the whether the number is palindrome or not


  function checkPalindrome(num){
    if(num<0){
        return false;
    }
    let temp = num;
    let reverse = 0;
    while(num>0){
        let rem = num%10;
        reverse = (reverse*10)+rem;
        num = Math.floor(num/10);
    }    
    return temp===reverse
 }

console.log(checkPalindrome(101))

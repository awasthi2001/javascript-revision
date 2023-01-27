// program to find the sum of the Number until it becomes single number

function calculatesum(){
let sum = 0;
    while(num>0 || sum>9){
        if(num==0){
            num = sum;
            sum = 0;
        }
        let rem  = num%10;
        sum += rem;
        num = Math.floor(num/10);
    }
    return sum;
}
let num = 543154;


 console.log(calculatesum(num))




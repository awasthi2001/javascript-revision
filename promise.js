/*
if i pass 3 number then only it will return the sum
else not
*/
function myPromise(nums){
 return new Promise(function(resolve,reject){
    if(nums.length==3){
        let sum = nums[0]+nums[1]+nums[2];
        resolve(`The sum is ${sum}`)
    }else{
        reject('Please pass 3 numbers then only it will return the sum')
    }
 })
}

// myPromise([1,2,3]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
async function returnSum(){
    try {
        let res = await myPromise([1,2,3,4])
     console.log(res)
    } catch (error) {
        console.log(error)
    }

}
returnSum();
console.log("hello world!")

function getroot(value,callback){
 setTimeout(()=>{
    const root = Math.sqrt(value)
    callback(root)
 },Math.random()*1000);
}

function getRootList(arr,callback){
    var promiseArray = [];
    for(let i=0; i<arr.length; i++){
     promiseArray.push(
        new Promise(function(resolve,reject){
            getroot(arr[i],resolve)
        })
      )
    }
  Promise.all(promiseArray).then((res)=>{
    callback(res)
  })
}


getRootList([1,9,4,16,36,25],(roots)=>{
    console.log(roots)
})

// function ans(x){
//     return x*x - 1;
// }

// let a = ans(ans(ans(ans(3))))
// console.log(a)


function sleep(time){

    return new Promise(function(resolve, reject){
        if(typeof time!=='number'){
            reject('please enter a number')
        }
        setTimeout(()=>{
          resolve('done');
        },time)
    })
}

//sleep(2000).then(res=>console.log(res)).catch(rej=>console.log(rej))

async function test(){
    try {
        console.log('waiting for results...');
        let res = await sleep(2000);
        console.log(res)
        if(res=='done'){
            return true
        }
    } catch (error) {
        console.log(error)
    }
}

// test().then((Res)=>{
//     console.log(Res)
// })

let counter =0;
function getData(e){
let val = document.getElementById('search').value
console.log('data fetching',val)
}

let myBetterFunction = debounce(getData,1000);

function debounce(fn,delay){
 let timerid;
 return function(){
    clearTimeout(timerid);
    timerid = setTimeout(()=>{
           fn();
    },delay)
 }
}
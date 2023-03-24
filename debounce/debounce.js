// console.log('it shows results as you type')
//The debounce method do not run when invoked instead it wait for a predetermined time until executing . When we call the same process agsain
//the previous process is cancelled and timer is reset

//let btn = document.querySelector("button")
let inp = document.querySelector("input")
let mybetterfn = debounce(makeApiCall,700)
inp.addEventListener("keyup",mybetterfn)
let c = 0;
function debounce(fn,delay){
  let timerid;
  return function(){
    console.log(c++)
   clearTimeout(timerid)
   timerid = setTimeout(()=>{
       fn()
   },delay)
  }
}
async function makeApiCall(){
let container = document.getElementById("container")
container.style.display = 'none'
   let name = document.querySelector("input").value;
   // console.log(name)
   //    console.log(c++)
   let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=4e3b25ef&s=${name}`)
   let data = await res.json()
   display(data.Search)
//   console.log(data)
}

let container = document.getElementById("container")
container.style.display = 'none'
  function display(data){
  let container = document.getElementById("container")
  container.innerHTML = ''
 if(data){
   container.style.display = 'block'
 }
 data && data.forEach(function(ele){
   let child = document.createElement("div")
   child.innerHTML = `
    <img src=${ele.Poster}  />
   `
   container.appendChild(child)
  })

}
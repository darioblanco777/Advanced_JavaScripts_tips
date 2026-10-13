/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promisesRaceComponent =(element) => {
element.innerHTML = "cargando...";
const renderValue =(value)=>{
element.innerHTML = value;
}
Promise.race([slowPromise(),mediumPromise(),fastPromise()])
.then(renderValue);
}


const slowPromise = ()=> new Promise(resolve=>{
setTimeout(()=>{resolve("slow wins")
},2000)
console.log("slow promise executed");
});
const mediumPromise = ()=> new Promise(resolve=>{
setTimeout(()=>{resolve("medium wins")
},1500);
console.log("medium promise executed"); 
});
const fastPromise = ()=> new Promise(resolve=>{
setTimeout(()=>{resolve("fast wins")
},4000);
console.log("fast promise executed");
});
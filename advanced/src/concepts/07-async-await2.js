/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2component =async(element) => {

    console.time("arranque");
    
    //const value1 = await slowPromise();
    //const value2 = await mediumPromise();
    //const value3 = await fastPromise();
    
   const [value1,value2,value3]= await Promise.all([slowPromise(),mediumPromise(),fastPromise()]) // con este método desarrolle todas las promesas en paralelo. todo sumo 2.02 segundos.
    
    element.innerHTML=`
    valor1: ${value1}<br/>
    valor2: ${value2}<br/>
    valor3: ${value3}<br/>
    `;
   console.timeEnd("arranque");
}

const slowPromise = ()=> new Promise(resolve=>{
setTimeout(()=>{resolve("slow wins")
},1000)
console.log("slow promise executed");
});

const mediumPromise = ()=> new Promise(resolve=>{
setTimeout(()=>{resolve("medium wins")
},1500);
console.log("medium promise executed"); 
});


const fastPromise = ()=> new Promise(resolve=>{
setTimeout(()=>{resolve("fast wins")
},2000);
console.log("fast promise executed");
});
// como se puede ver las promesas no son secuenciales, lo cual esta ralentizando el proceso pues 
// espera que termine una para activa la siguiente promesa. 
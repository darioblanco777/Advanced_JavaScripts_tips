/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent =(element) => {
/*const myGenerator = myFirstGeneratorFunction();
console.log(myGenerator.next())
console.log(myGenerator.next())
console.log(myGenerator.next())
*/
 // En plastilina 🧸, las funciones generadoras (function*) sirven para entregar valores uno por uno, haciendo pausas y continuando cuando tú se lo pidas.
 const boton = document.createElement('button');
 boton.innerText = "ClickMe"
element.append(boton);
 
const renderValueBoton=()=>{
const{value}=idGen.next();
boton.innerText =`Click ${value}`;
}
 
boton.addEventListener("click",renderValueBoton)
 
 
 const idGen = idGenerator();
 console.log(idGen.next())
 console.log(idGen.next())
 console.log(idGen.next())

}

function*idGenerator(){
let currentId = 0;
while(true){
    yield ++currentId;
}
}






function* myFirstGeneratorFunction(){  // la función encuentra el yield, y se va a pausar // Si en consola aparece done : false, significa que el generador todavía tiene valores por entregar. 

yield       "";            
yield       "001";            
yield       "002";            
yield       "003";            
yield       "004";            
         
return 'no hay mas valores'; // por eso aca ya aparece done: true. ya no entrega más valores.
yield 'ya no se puede hacer nadita'



}







/* definicion función generadora: pd: las hay tambien asincronas, y no se pueden crear con función de flecha debido a que js no permite la sintaxis function*
Una función generadora en JavaScript es una función que puede entregar valores uno por uno, haciendo pausas entre cada uno, en lugar de devolverlos todos de una vez
datos:
Recuerda estas tres cosas:
- function* → declara una función generadora.
- yield → entrega un valor y pausa la función.
- .next() → reanuda la función para obtener el siguiente valor.
valida : function* contar() {
    yield 1;
    yield 2;
} 
No valida :const contar = *() => {
    yield 1;
    yield 2;
};
*/
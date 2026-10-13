//console.log('PROMESAS video 134-135') // Una Promise en JavaScript es un objeto que representa una operación que todavía no termina, pero que dará un resultado en el futuro.
/*✅ resolve → salió bien.
❌ reject → salió mal.*/




import {heroes} from '../data/heroes.js';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent =(element) => {
const renderHero = (hero)=>{
    element.innerHTML = hero.name;
}

const renderTwoHeroes = (hero1, hero2)=>{
 element.innerHTML = `<h2>${hero1.name}</h2> 
                     <h2>${hero2.name}</h2>`;}


const renderError = (error)=>{
    element.innerHTML = `
    <h3>Errorsote</h3>
    <h1>${error}</h1>`;
}
const id1 = '5d86371f1efebc31def272e2';
const id2 = '5d86371f233c9f2425f16916';


console.warn("PROMISE.ALL") // puedo enviar un array de promesas y me devuelve un array de resultados, si alguna promesa falla, todas fallan.
Promise.all([
    findHero(id1), 
    findHero(id2),
            ])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError); // Si alguna promesa falla, se ejecuta el catch y se muestra el error en el elemento.

}









// OPCION 2
//let hero1;
//findHero(id1)
//    .then(hero => {
//        hero1 =hero;
//        return findHero(id2);
// }).then(hero2 => renderTwoHeroes(hero1, hero2))
//.catch(renderError);}


//findHero(id1) OPCION 1
//    .then((hero1) => {
//        
//        findHero(id2)
//        .then((hero2) => {
//            
//        renderTwoHeroes(hero1, hero2)
//    }).catch(renderError);
//
//})
//.catch(renderError)}; 

                                             // Se ejecuta si la promesa falla.


/**
 * 
 * @param {string} id 
 * @returns {Promise}
 *
 */
const findHero =(id)=>{
return new Promise((resolve, reject)=>{
const hero = heroes.find(hero => hero.id === id);
if(hero) {resolve(hero); // Como ya se cumplió la promesa, se ejecuta el resolve y se pasa el hero como argumento.
    return;
}
reject(`El heroe con ${id} no existe`);
});

}








//console.log(import.meta.env);
//console.log(import.meta.env); // Muestra todas las variables de entorno disponibles en la aplicación.
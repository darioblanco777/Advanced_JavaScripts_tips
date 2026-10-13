import {heroes} from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent =(element) => {

const id1 = '5d86371f25a058e5b1c8a65e';
console.log('Inicio del componente');



findHero(id1)
.then(heroname=>element.innerHTML = heroname)
.catch(error=>element.innerHTML = error);
console.log('Fin del componente');

}



/**
 * 
 * @param {string} id 
 */

const findHero=async(id)=>{ // Nota importante: Sin Async retorna un heroe de la base de datos si este existe,En cambio con Async Siempre devuelve una Promise, aunque tú hagas return hero.Si dice fulfilled value es porque ya se resolvió la promesa.
const hero = heroes.find(hero=> hero.id === id);
if(!hero) throw `Hero with id ${id} not found`;
return hero.name;


}
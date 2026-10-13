import {heroes} from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent =async(element) => {
const id1 = '5d86371f25a058e5b1c8a65e';
const id2 = '5d86371fd55e2e2a30fe1ccb';

try{
    const hero1 =  await findHero(id1); // Cuando  le quito el await devuelve una promesa pendiente, y no el resultado de la promesa.
    const hero2 =  await findHero(id2);

    element.innerHTML = `${hero1.name},${hero2.name}`;

}catch(error){
const msj = "Se abrieron las locas"
element.innerHTML = `${msj}`;
}}



const findHero=async(id)=>{
const hero=heroes.find(hero=> hero.id === id);
if (!hero) throw 'Hero with id ${id} not found';
return hero;
}

/**👉 await significa: “espera aquí hasta que esta Promise termine y dame su resultado”.*/
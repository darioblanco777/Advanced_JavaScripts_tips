import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {
const id = "5d86371fd55e2e2a30fe1cc3"
const hero = await getHeroAsync(id);

element.innerHTML=` el id del superhero es ${hero.id}`


}
/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync =async ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000) // resolve termina la espera del setTimeout( ojo con ello)
    });

    return heroes.find( hero => hero.id === id );
}

/*getHeroesAsync recorre los IDs y guarda en un arreglo las promesas que genera getHeroAsync para cada héroe.
getHeroAsync espera 1 segundo usando await y setTimeout, y luego devuelve el héroe encontrado en heroes.*/
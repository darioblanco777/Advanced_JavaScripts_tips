import { heroes } from "../data/heroes";
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent =(element) => {
const id1 = "5d86371f1efebc31def272e2";
const id2 = "5d86371f25a058e5b1c8a65e";
    findHero(id1,(error,hero1)=>{element.innerHTML = hero1?.name; // Manejo de errores || new Error("No existe heroe") //Manejo de errores,si el hero es undefined, no se ejecuta el innerHTML y no rompe la aplicación.|| podemos usar el operador de nullish coalescing para mostrar un mensaje ejp " No se econtró el héroe" en caso de que hero sea undefined.
    if (error) {
        element.innerHTML = error;
        return; // Si hay un error, no se ejecuta el resto del código y se retorna de la función.
        } 
        
        findHero(id2,(error,hero2)=>{if (error) {
        element.innerHTML = error;
        return;
        }
        element.innerHTML = `${hero1.name} / ${hero2.name}`;             
        })
    
}
)}

/**
 * 
 * @param {String} id 
 * @param {(error:String|null,hero: Object)=>void} callback 
 */

const findHero =(id,callback)=>{
const hero = heroes.find(hero => hero.id === id);
if (!hero) {
    callback(`Hero with id ${id} not found.`); 
    return;                    // Undefined , recordemos que todas las funciones en JS retornan algo.

}
callback(null,hero);// la llamamos con los dos parámetros, el primero es null porque no hay error y el segundo es el héroe encontrado.
}
// Una de las formas de manejar errores es cambiando la firma de la funcion callback.
// recordemos, los objetos ejp ( promises, callbacks etc) tienen métodos o acciones (Cuadrados) y tambien propiedades como length, name, etc. (Rectángulos) y podemos acceder a ellos con el operador punto (.) o corchetes ([]). Por ejemplo, si queremos acceder a la propiedad name de un objeto hero, podemos hacerlo así: hero.name o hero["name"].




/*const findHeroe =async(id)=>{
const hero = heroes.find(hero => hero.id === id);
return hero?.name;
}
async = "esta función va a devolver una Promise".
await = "espera el resultado de esa Promise".*/


console.log ( "Promesas?")
/*
| Si ves...                       | Piensa inmediatamente... |
| ------------------------------- | ------------------------ |
| `fetch()`                       | 🟢 Promise               |
| `async function`                | 🟢 Promise               |
| `async () =>`                   | 🟢 Promise               |
| `.then()`                       | 🟢 Promise               |
| `.catch()`                      | 🟢 Promise               |
| `await`                         | 🟢 Promise               |
| Operación con API               | 🟢 Promise               |
| Leer archivo de forma asíncrona | 🟢 Promise               |
| Consultar base de datos         | 🟢 Promise               |*/
















//console.log(import.meta.env);
//console.log(import.meta.env); // Muestra todas las variables de entorno disponibles en la aplicación.
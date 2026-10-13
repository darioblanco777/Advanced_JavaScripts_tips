/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent =(element) => {

console.log(import.meta.env);
console.log(import.meta.env); // Muestra todas las variables de entorno disponibles en la aplicación.

const html = `
DEV: ${import.meta.env.VITE_API_KEY} <br>
URL: ${import.meta.env.VITE_BASE_URL} <br>
SSR: ${import.meta.env.SSR} <br>
CREADOR: ${import.meta.env.VITE_APELLIDO} <br>
`;

element.innerHTML = html;

}




/*
¿Por qué usan acentos graves (``) en lugar de comillas ("" o '')?
A esto se le llama Template Literals (plantillas literales). 
Se usan principalmente por dos razones:
Permiten múltiples líneas: Con comillas normales, si das un salto de línea, el código falla. 
Con las ``, puedes escribir bloques largos de HTML respetando los saltos de línea y la indentación de forma natural.

Interpolación de variables: Permiten incrustar variables de JavaScript directamente dentro del texto usando la sintaxis 
${miVariable}, lo cual es mucho más limpio que unir textos con el símbolo +.
*/

/*
import.meta.env: Es el objeto de JavaScript moderno que permite a tu aplicación frontend leer variables de entorno configuradas externamente.
Sirve para mantener datos sensibles o dinámicos (como URLs o claves de API) 
seguros y adaptables, evitando escribirlos de forma fija en el código.*/

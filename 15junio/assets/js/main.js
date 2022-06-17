
import { volumenRectangulo, volumenEsfera } from './modulos/calcularVolumen.js';


/* 

    Destructuring  
    Asignar en variables individuales la informacion almacenada en arreglos y objetos
*/

let nombresArreglo = [ "Jazmin", "Luis Daniel", "Andres", "Jose", "Fatima", "Fernando" ]

//let uno = nombresArreglo[0]
//let dos = nombresArreglo[1]
//console.log( uno, dos )

//let [ , dos, tres, , cinco ] = nombresArreglo
//console.log( dos, tres, cinco )


/* Modulos */

let [ primerNombre, segundoNombre, ...elResto ] = nombresArreglo

console.log( primerNombre, segundoNombre, elResto )

//Rest operator ...
//Añade el resto de valores en una unica variable


//Objetos

let gato = {
    nombre: "Juno", 
    raza: "Sí",
    color: "Calico",
    genero: "Hembra",
    vacunada: true,
    edad: 5,
    ronronear: function(params) {
        console.log( "prrrrrrr" )
    }
}

/*
let { nombre, color, ronronear,...resto } = gato
console.log( nombre, color, resto )
console.log(  ronronear )

ronronear()
*/

function muchosNumeros( a, b, ...resto ){   
    let suma = a + b
    
    resto.forEach( num => suma += num )
}

muchosNumeros( 2, 5, 6, 8, 90, 100, 20, 30, 40, 100 )

function saludarUsuario( {nombre, edad} ){
    console.log( `Hola, me llamo ${ nombre } y tengo ${ edad } años` )

    //console.log( segundoParametro )
}

saludarUsuario( { nombre: "Brenda", edad: 27 })
saludarUsuario( gato )

//Spread Operator
//Desempacar la informacion dentro de un elemento iterable 


console.log( ...nombresArreglo )
console.log( { ...gato } )
console.log( ..."cadenas" )

let medidasPrisma = [ 10, 15, 20 ]

volumenRectangulo( ...medidasPrisma )

let clonGato = { ...gato }

clonGato.nombre = "Canelita"

console.log( gato )

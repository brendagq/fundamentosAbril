/*
const usuarios = [
    {
        id: 0,
        nombre: "Fulanito Perez",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed id qui delectus possimus vitae.",
        imgUrl: "https://picsum.photos/id/1005/200/300"
    },
    {
        id: 1,
        nombre: "Carlitos Sanchez",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed id qui delectus possimus vitae.",
        imgUrl: "https://picsum.photos/id/1012/200/300"
    },
    {
        id: 2,
        nombre: "Perenganita Lopez",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed id qui delectus possimus vitae.",
        imgUrl: "https://picsum.photos/id/1027/200/300"
    },
    {
        id: 3,
        nombre: "Maria Antonieta",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed id qui delectus possimus vitae.",
        imgUrl: "https://picsum.photos/id/342/200/300"
    },
]
*/


/*
    OTRAS FUNCIONES

    Funciones expresadas / Funciones anonimas
    Se llaman así porque no es necesario darles un nombre
    Son muy utilizadas como callbacks

    function( a, b ){
        return a + b
    }
    ¿Cómo se invocan entonces?
    Por lo regular son almacenadas en variables / constantes, y son estos elementos los que se utilizan para referirse a ellas

    const suma = function( a + b ){
        return a + b
    }
    suma( 10, 5 )

    Arrow functions / Funciones flecha
    Son una forma de escribir de una manera mas corta funciones anonimas. Se caracterizan por el uso de => 

    const saludarUsuario = ( nombre ) =>{
        return `Hola ${nombre}! Bienvenidx a Academlo.`
    }

    Cuando la funcion es lo suficientemente simple, podemos acortarla aún mas:

    -Si la funcion recibe SOLAMENTE un parametro, podemos omitir los parentesis

    const saludarUsuario = nombre =>{
         return `Hola ${nombre}! Bienvenidx a Academlo.` 
    } 

    -Podemos llevar a cabo un return impilicito

    const saludarUsuario = nombre => `Hola ${nombre}! Bienvenidx a Academlo.`

    
    Funcion autoejecutada
    No es necesario invocarla para que se ejecute

    ( function (){
        instrucciones a ejecutar
    })()


    Callbacks
    Funciones que son pasadas como parametros a otras funciones y luego se invocan dentro de la función externa
    Las funciones que RECIBEN un callback como parametro son conocidas como funciones de orden superior


    Hay tres formas principales de pasar un callback:

    ->Pasar la referencia de una funcion declarada de forma previa:

    function saludarUsuario(nombre){
        alert( `Hola ${nombre}! Bienvenidx a Academlo.` ) 
    }

    function obtenerNombre( callback ){
        let nombreIngresado = prompt("Ingresa tu nombre")
        callback(nombreIngresado)
    }

    obtenerNombre(saludarUsuario)

    ->Pasar la funcion directamente como parametro. Puede ser una funcion declarada, funcion anonima o funcion flecha

    function obtenerNombre( callback ){
        let nombreIngresado = prompt("Ingresa tu nombre")
        callback(nombreIngresado)
    }

    funcion declarada: 
        obtenerNombre( function saludarUsuario(nombre){
            alert( `Hola ${nombre}! Bienvenidx a Academlo.` ) 
        })

    funcion anonima:
        obtenerNombre( function (nombre){
            alert( `Hola ${nombre}! Bienvenidx a Academlo.` )
        })

    funcion flecha:

        obtenerNombre( nombre =>  alert( `Hola ${nombre}! Bienvenidx a Academlo.` ) )

*/


/*CREACION DE ELEMENTOS HTML */

/* document.createElement( "tagname" ) */
/*
let parrafo = document.createElement( "p" )
parrafo.textContent = "Texto"

let body = document.querySelector( "body" )
*/
/*
    Agregar un elemento al DOM 
    nodoPadre.appendChild( nodoHijo )
*/
/*
body.appendChild( parrafo )

let titulo = document.createElement( "h1" )
let texto = document.createTextNode("Este es un titulo")
*/
/* Agrega un nuevo primer hijo al elemento que usamos como referencia

nodoPadre.prepend( nodoPrimerHijo )
*/
/*
titulo.appendChild( texto )
console.log( titulo )

let section = document.querySelector( "section" )

section.prepend( titulo )

let image = document.createElement("img")
image.src = "https://picsum.photos/200/300"
*/
/*
    insertAdjacentElement
    Inserta un elemento en una posicion especifica respecto al elemento de referencia

    "beforebegin": Hermano adyacente previo
    "afterened": Hermano adyacente posterior
*/

//section.insertAdjacentElement( "beforebegin", image )
//section.insertAdjacentElement( "afterend", image )


/* ELIMINACION DE NODOS 

    nodoPadre.removeChild( "nodoAEliminar" )
*/

//image.parentNode.removeChild( image )


const mascotas = [
    {
        nombre: "Canela",
        especie: "Gato",
        url: "./assets/images/canelita.jpeg"
    },
    {
        nombre: "Aurora",
        especie: "Gato",
        url: "./assets/images/aurora.jpeg"
    },
    {
        nombre: "Juno",
        especie: "Gato",
        url: "./assets/images/juno.jpeg"
    },
]


let contenedor = document.querySelector( "section.contenedor-mascotas" )
/*
let fragmento = new DocumentFragment

for (let i = 0; i < mascotas.length; i++) {

    let div = document.createElement("div")
    div.classList.add( "mascota-card" )
    let img = document.createElement("img")
    img.src = mascotas[i].url
    
    let h3 = document.createElement("h3")
    h3.textContent = mascotas[i].nombre
    
    let small = document.createElement("small")
    small.textContent = mascotas[i].especie
    
    div.appendChild(img)
    div.appendChild(h3)
    div.appendChild(small)
    
    fragmento.appendChild( div )
}

contenedor.appendChild( fragmento )
*/

let fragmentoInnerHTML = ""

for( let gato of mascotas ){

    fragmentoInnerHTML += `
        <div class="mascota-card">
            <img src=${gato.url} alt="">
            <h3>${ gato.nombre }</h3>
            <small>${gato.especie}</small>
        </div>
    ` 
}

contenedor.innerHTML = fragmentoInnerHTML
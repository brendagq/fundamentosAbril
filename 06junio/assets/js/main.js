"use strict"

/*x = "cualquiera"*/
/*console.log( x )*/
/*let public = "Algo publico"*/


/*
    El modo estricto tiene varios cambios en la semántica normal de JavaScript:

    -Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
    -Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
    -Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript


    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode
*/
/*
    NAVEGADOR

    Interaccion con el usuario: alert,prompt y confirm
    alert: Muestra un mensaje y espera a que el usuario presione “Aceptar”
    prompt: Muestra una ventana modal con un input para el usuario y botones de aceptar/cancelar
    confirm: La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR. El resultado es true si se pulsa OK y false en caso contrario.
*/

    /*alert( "Soy un alert" )*/

    /*let nombreUsuario = prompt( "Escribe tu nombre" )
    console.log( nombreUsuario )
    */
   /*
    let edadUsuario = parseInt( prompt( "Ingresa tu edad" ) )
    console.log( typeof edadUsuario, edadUsuario )
    */
    /*
    let esLegal = confirm( "Eres mayor de edad?" )
    console.log( esLegal )
    */


/*
    DOM / Document Object Model

    DOM transforma todos los documentos HTML en un conjunto de elementos llamados nodos, que están interconectados y que representan los contenidos de las páginas web y las relaciones entre ellos. Por su aspecto, la unión de todos los nodos se llama "árbol de nodos".
*/


/*
    LISTA DE NODOS

    Document: nodo raíz del que derivan todos los demás nodos del árbol.

    Element: representa cada una de las etiquetas HTML. Se trata del único nodo que puede contener atributos y el único del que pueden derivar otros nodos.

    Attributos: se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir, uno por cada par atributo=valor.

    Text: nodo que contiene el texto encerrado por una etiqueta HTML.

    Comment: representa los comentarios incluidos en la página HTML.
*/

/* 
    CRUD 
    Create / Crear
    Read / Consultar
    Update / Actualizar
    Delete / Eliminar
*/


/*
    Consulta del DOM 
    
    document.getElementsByTagName( "etiqueta" )

    document.getElementsByClassName("clase")

    document.getElementById( "identificador" )

*/

/*
let parrafos = document.getElementsByTagName( "p" )
console.log( parrafos )


parrafos[0].textContent = "ESTE ES UN NUEVO TEXTO AGREGADO DESDE JS"
console.log( parrafos[0].textContent )

parrafos[1].textContent = "otro texto"
*/
/*
let textos = document.getElementsByClassName( "texto-general" )
console.log( textos )

console.log( textos[2].innerText )
console.log( textos[2].textContent )

textos[2].innerHTML = "MODIFICACION <strong> CON JS </strong>"
*/


let titulo = document.getElementById("titulo-principal")
console.log( titulo.classList )

titulo.classList.add( "texto-minusculas" )

/* document.querySelector("selector") */
let toast = document.querySelector( "div.toast" )

toast.classList.toggle( "mostrar" ) //agregarla

setTimeout(() => {
    toast.classList.toggle( "mostrar" ) //eliminar
}, 5000);


/* document.querySelectorAll("selector") */


let imagen = document.querySelectorAll("img")[0]
console.log( imagen.src )

imagen.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/Purina%C2%AE%20Primeras%20semanas%20de%20tu%20gatito%20en%20casa.jpg?itok=pOv8yzss"


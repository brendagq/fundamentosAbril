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

const mascotas = [
    {
        nombre: "Canela",
        especie: "Gato",
        url: "../images/canelita.jpeg"
    },
    {
        nombre: "Aurora",
        especie: "Gato",
        url: "../images/aurora.jpeg"
    },
    {
        nombre: "Juno",
        especie: "Gato",
        url: "../images/juno.jpeg"
    },
]
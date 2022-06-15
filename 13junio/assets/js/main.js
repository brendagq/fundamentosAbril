"use strict"

/*
METODOS HTTP

GET
POST
PUT
DELETE
PATCH
*/
/*
promesa
.then((valorDevueltoPorLaPromesa)=>{})
.catch( (error) =>{})
*/


/*

    fetch( "url", configuraciones )


    fetch( "url" ) // GET
*/

const baseURL = "https://pokeapi.co/api/v2/"
let contenedorPokemon = document.querySelector(".contenedor>section")
let form = document.querySelector("form")
let toast = document.querySelector(".toast")

document.addEventListener( "DOMContentLoaded", () => fetchData("pikachu") )
form.addEventListener( "submit", (event) =>{
    let input = form.querySelector("input")
    let nombrePokemon = input.value.toLowerCase()

    fetchData(nombrePokemon)

    event.preventDefault()
})

function fetchData( nombrePokemon ){
    fetch( `${baseURL}pokemon/${nombrePokemon}` )
    .then( respuesta => respuesta.json() ) //recibe la respuesta satisfactoria del servidor y la convierte a un formato adecuado
    .then( dataConvertida => {
        console.log( dataConvertida )
        mostrarPokemon( dataConvertida )
    }) //este segundo then() maneja la promesa que se genera en el primero por el metodo .json()
    .catch( error => {
        console.error(error)
        mostrarToast()
    })
}


function mostrarPokemon( data ){
    contenedorPokemon.innerHTML = `
        <img src=${data.sprites.other.dream_world.front_default} alt="">
        <h2>${data.name}</h2>
    `
}

function mostrarToast(){
    toast.classList.toggle("mostrar") //agregar la clase

    setTimeout(() => {
        toast.classList.toggle("mostrar") // quitarla
    }, 5000);
}


//Modificar el codigo necesario para generar una busqueda dinamica de pokemones
//Nombre del pokemon en la url del fetch SIEMPRE debe de ir en minusculas
//Pikachu se va a mostrar por default al recargar la pagina



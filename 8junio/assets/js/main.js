"use strict"

/* 
    MÉTODOS  DE ORDEN SUPERIOR
*/
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
function imprimir(elemento) {
    console.log( elemento.nombre )
}

for (let i = 0; i < usuarios.length; i++) {
    imprimir( usuarios[i] )    
}
*/

/*
let contenedor = document.getElementById("usuarios-contenedor")

let fragment = new DocumentFragment()

let retornoForEach = usuarios.forEach( (element) =>{
    let h3 = document.createElement( "h3" )
    h3.textContent = `${element.nombre}`
    
    fragment.appendChild( h3 )
    return element
})

contenedor.appendChild( fragment )
console.log( retornoForEach )
*/
/*
let contenedor = document.getElementById("usuarios-contenedor")
let fragment = new DocumentFragment

let retornoMap = usuarios.map( (element, index, array) => {
    let h3 = document.createElement( "h3" )
    h3.textContent = `${element.nombre}`
    
    fragment.appendChild( h3 )
    return element.nombre
})

contenedor.appendChild( fragment )
console.log( retornoMap )

//Filtro, usuarios que su nombre empiece con F o A

let retornoFilter = usuarios.filter( (elemento)=>{
    let firstLetter = elemento.nombre[0]
    return ( firstLetter === "F" || firstLetter === "M" )
})

console.log( retornoFilter )

let retornoFind = usuarios.find( (elemento) => {
    let firstLetter = elemento.nombre[0]
    return ( firstLetter === "F" || firstLetter === "M" )
})

console.log( retornoFind )
*/
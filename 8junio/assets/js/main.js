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

/*
Escribir una función que reciba como parametro un criterio de busqueda para los productos del ecommerce por tipo de prenda ("hoodies", "shirts", "sweatshirts") y muestra los resultados filtrados en la pantalla del navegador.
Se debe visualizar el nombre, la imagen y el precio.
Pueden utilizar el método innerHTML

Hint: Para filtrar ocupa el metodo filter, para mostrar en la pantalla map o forEach.

 */

const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      quantity: 20
    },
    {
      id: 4,
      name: 'Sweatshirts',
      price: 30.00,
      image: 'https://academlo-store.netlify.app/assets/img/featured3.png',
      category: 'sweatshirts',
      quantity: 10
    }
]


function filtrarProductos( tipo ){
    let contenedor = document.querySelector(".contenedor-productos")
    let fragmento = ""

    let resultadoProductos = items.filter( (item) => item.category === tipo )
    
    resultadoProductos.forEach( (producto) => {
        fragmento += `
        <div class="producto">
            <img src=${producto.image} alt="">
            <h3>${producto.name}</h3>
            <small>${producto.price}</small>
        </div>
        `
    })

    contenedor.innerHTML = fragmento
}

filtrarProductos("hoodies")
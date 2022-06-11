
let texto = "Cadena de texto"
let numero = 100
let arreglo = [ "Esteban", "Jorge", "Ximena" ]
let valorBooleano = true
let objeto = {
    nombre: "Brenda",
    edad:27
}
let vacio = null

//JSON.stringify()
//JSON.parse()

/*
console.log( texto, JSON.stringify( texto ), typeof  JSON.stringify( texto ) )
console.log( numero, JSON.stringify( numero ), typeof  JSON.stringify( numero ) )
console.log( arreglo, JSON.stringify( arreglo ), typeof  JSON.stringify( arreglo ) )
console.log( valorBooleano, JSON.stringify( valorBooleano ), typeof  JSON.stringify( valorBooleano ) )
console.log( objeto, JSON.stringify( objeto ), typeof  JSON.stringify( objeto ) )
console.log( vacio, JSON.stringify( vacio ), typeof  JSON.stringify( vacio ) )

let stringTexto = JSON.stringify( texto )
let stringNumero = JSON.stringify(numero )
let stringArreglo = JSON.stringify( arreglo )
let stringBooleano = JSON.stringify( valorBooleano )
let stringObjeto = JSON.stringify( objeto )
let stringVacio = JSON.stringify( vacio )

console.log( stringTexto, JSON.parse( stringTexto ), typeof JSON.parse( stringTexto ) )
//console.log( JSON.parse( "Hola mundo" ) ) //Da error

console.log( stringNumero, JSON.parse( stringNumero ), typeof JSON.parse( stringNumero ) )
console.log(  JSON.parse( 100 ) )

console.log( stringArreglo, JSON.parse( stringArreglo ), typeof JSON.parse( stringArreglo ) )
console.log( stringBooleano, JSON.parse( stringBooleano ), typeof JSON.parse( stringBooleano ) )
console.log( stringObjeto, JSON.parse( stringObjeto ), typeof JSON.parse( stringObjeto ) )
console.log( stringVacio, JSON.parse( stringVacio ), typeof JSON.parse( stringVacio ) )

*/

/* 
    CREACION DE INFORMACION 
    window.localStorage.setItem( "nombreDelEspacio", valorAlmacenar )

    CONSULTAR INFORMACION
    let variableGuardar = window.localStorage.getItem( "nombreDelEspacio" )

    ACTUALIZAR INFORMACION
    window.localStorage.setItem( "nombreDelEspacioExistente", nuevoValorAlmacenar )

    ELIMINAR INFORMACION 
    window.localStorage.removeItem("nombreDelEspacio")
*/

window.localStorage.setItem( "usuarioData", JSON.stringify( {
    name: "Brenda",
    id: 101011,
    edad: 27
}))


let usuarioInfo = JSON.parse( window.localStorage.getItem("usuarioData") )
console.log( usuarioInfo )


window.localStorage.setItem( "usuarioData", JSON.stringify( {
    name: "Brenda",
    id: 101011,
    edad: 27,
    bandasFav: [ "Iron Maiden", "Nightwish", "Pink Floyd" ]
}))

window.localStorage.setItem("token", JSON.stringify("dcfvgbhnjmk,l.ñsdfghjklñ"))

window.localStorage.removeItem( "usuarioData" )

window.localStorage.clear()

"use strict"


let contadorLetras = 0
let input = document.querySelector("input") 

function inputChange( ) {
    let longitud = input.value.length

    if( longitud < 8 ){
        console.error("Tu contraseña es muy corta")
    }else{
        console.log( "Muy buena contraseña, muy segura!" )
    }
}


let textArea = document.getElementById("comentario")

/* 
    elemento.addEventListener( "evento", callback )  
    elemto.addEventListener( "evento", (evento)=>{

    })
*/

textArea.addEventListener( "change", () => {
    console.log( textArea.value )
})

let formulario = document.querySelector("#formulario")

formulario.addEventListener( "submit", eventoData => {
    let input1 = formulario.querySelector("#usuario").value
    let input2 = formulario.querySelector("#contraseña").value

    let data = {
        user: input1,
        password: input2
    }
    
    console.log( data )
    eventoData.preventDefault()
})
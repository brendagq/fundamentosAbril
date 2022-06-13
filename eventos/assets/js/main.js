"use strict"


/*
contadorLike va a traer la info guardada en local
Si existe el contador en el local distinto de 0, si no existe entonces va a estar en 0 
*/



let contadorLike = 0
let likeBtn = document.querySelector("#btn-like")
let small = document.querySelector("small")
let dislikeBtn = document.querySelector("#btn-dislike")
let themeIcon = document.getElementById("theme-toggler")
let body = document.querySelector("body")


if( JSON.parse( window.localStorage.getItem("contador")) != null ){
    contadorLike = JSON.parse( window.localStorage.getItem("contador") )
    small.textContent = `A ${contadorLike} personas le gusta esta foto`
}



themeIcon.addEventListener( "click", (e) =>{
    body.classList.toggle("dark-theme")
    
    let isDark = body.classList.contains("dark-theme")

    if(isDark){
        themeIcon.classList.replace("bx-moon", "bx-sun")
    }else{
        themeIcon.classList.replace("bx-sun", "bx-moon")
    }
})





likeBtn.addEventListener( "click", (eventoData) =>{
    contadorLike++

    window.localStorage.setItem( "contador", JSON.stringify(contadorLike) )
    small.textContent = `A ${contadorLike} personas le gusta esta foto`
})

//Agregar el boton de dislike. Un dislike va a disminuir el numero de likes
//No permitir que el numero de personas a las que les gusta la foto sea menor a 0 

dislikeBtn.addEventListener( "click", (event) =>{
    if( contadorLike > 0 ){
        contadorLike -= 1

        window.localStorage.setItem( "contador", JSON.stringify(contadorLike) )
        small.textContent = `A ${contadorLike} personas le gusta esta foto`
    }
})


//La informacion de los likes quede almacenada en la sesion local
//para que la info no se pierda al actualizar

//Mantener la informacion sobre el tema de color seleccionado
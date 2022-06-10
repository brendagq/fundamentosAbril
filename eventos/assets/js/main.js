"use strict"


let themeIcon = document.getElementById("theme-toggler")
let body = document.querySelector("body")

themeIcon.addEventListener( "click", (e) =>{
    body.classList.toggle("dark-theme")
    
    let isDark = body.classList.contains("dark-theme")

    if(isDark){
        themeIcon.classList.replace("bx-moon", "bx-sun")
    }else{
        themeIcon.classList.replace("bx-sun", "bx-moon")
    }
})


let contadorLike = 0

let likeBtn = document.querySelector("#btn-like")
let small = document.querySelector("small")
let dislikeBtn = document.querySelector("#btn-dislike")

likeBtn.addEventListener( "click", (eventoData) =>{
    contadorLike++
    small.textContent = `A ${contadorLike} personas le gusta esta foto`
})

//Agregar el boton de dislike. Un dislike va a disminuir el numero de likes
//No permitir que el numero de personas a las que les gusta la foto sea menor a 0 

dislikeBtn.addEventListener( "click", (event) =>{
    if( contadorLike > 0 ){
        contadorLike -= 1
        small.textContent = `A ${contadorLike} personas le gusta esta foto`
    }
})
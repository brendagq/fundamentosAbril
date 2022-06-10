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

likeBtn.addEventListener( "click", (eventoData) =>{
    contadorLike++
    small.textContent = `A ${contadorLike} personas le gusta esta foto`
})

//Agregar el boton de dislike
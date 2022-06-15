"use strict"


/*fetch( 'url', mensajeDeLaPeticion )

GET --> Consulta de informacion
POST --> Añadir nueva informacion
PUT --> Actualizar informacion existente
DELETE --> Elimina informacion existente
PATCH --> Actualiza parcialmente

*/
/*
fetch( 'urlPath', {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name: "Brenda",
        username: "bren123",
        password: "123456"
    })
})

*/

fetch( "https://pokeapi.co/api/v2/", {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name: "Brenda",
        username: "bren123",
        password: "123456",
        urlImage: "imagenAlmacenadaEnOtroLado"
    })
})

//Generar formulario de registro
// nombre, username, password
//Fetch fake de tipo POST con esa informacion


//Desestructuracion de objetos
//Modulos
//Asincronia
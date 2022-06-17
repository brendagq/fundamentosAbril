
/*
    SINCRONIA -> Ocurre al mismo: una clase en vivo, llamada de telefono
    ASINCRONIA -> Existe un desfase temporal: chat, slack, comunicacion con un servidor

    PARALELISMO ->  Simultaneo

    BLOQUEANTE -> Algo que frena hasta que es completado
    NO-BLOQUEANTE -> Devuelve el control inmediatamente sin iimportar el resultado
    
    
    Javascript
    Asincronia y no bloqueante. Tiene un unico hilo. (Ejecuta tarea por tarea) 
*/


/*
    Promesa
    No bloqueantes y asicronas. 
*/

const algoVaOcurrir = ( numero ) => {
    return new Promise( ( resolver, rechazar ) => {
        //Determinar si la promesa es resuuelta o rechazada
        setTimeout(() => {
            if( numero < 10 ){
                resolver( "El numero es menor a 10" )
            }else{
                rechazar( "¡Ups! es un numero muy grande" )
            }
        }, 7000);

    })
}

/*
const otraCosaVaAOcurrir = ( numero ) =>{

    setTimeout(() => {
        if( numero < 10 ){
            return "El numero es menor que 10"
        }else{
            return "¡Ups! es un numero muy grande"
        }
    }, 5000);

}

algoVaOcurrir( 15 )
.then( response => console.log( response ) )
.catch( error => console.error( error ) )

console.log( otraCosaVaAOcurrir( 15) )
*/
/*
    ASYNC / AWAIT
    Agregar palabra reservada async antes de la funcion


    async function funcionAsincrona(parametros){
    
    }
    
    const funcionAnonimaAsincrona = async function(parametros){
    
    }
    
    const funcionFlechaAsincrona = async (parametros) =>{
    
    }



    await 
    Hace que JS espere hasta quue una promesa responda y devuelve su resultado


    try/ catch

    try{
        //Lo que intento hacer con la funcion asincrona
    }catch{
        //Que ocurre si la promesa o lo que sea que este dentro de try no se cumple
    }
*/

console.log( "antes de la funcion" )
async function funcionAsincrona (){
    console.log("Inicia la funcion")
    try {
        let res = await algoVaOcurrir(20)
        console.log( res )
        
    } catch (error){
        console.error( "ups, algo salio terriblemente mal", error )
    }
    console.log( "final de la funcion" )
}
console.log( "despues de la funcion" )

console.log( funcionAsincrona() )

/*
async function crearUsuario({nombre, password, imagen}){
    mostrarLoader()
    try {
          let url = await cargarImagen(imagen) 
          
          let data = {
            nombre: nombre,
            password: password,
            url: url
          }

          fetch()
    } catch (error) {
        mostrarMensajeDeError( "No pudimos crear tu cuenta" )
    }
    dejarDeMostrarLoader()
}
*/
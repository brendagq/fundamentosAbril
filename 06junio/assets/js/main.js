"use strict"


/*
    El modo estricto tiene varios cambios en la semántica normal de JavaScript:

    -Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.
    -Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
    -Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript


    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode
*/
/*
    NAVEGADOR

    Interaccion con el usuario: alert,prompt y confirm
    alert: Muestra un mensaje y espera a que el usuario presione “Aceptar”
    prompt: Muestra una ventana modal con un input para el usuario y botones de aceptar/cancelar
    confirm: La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR. El resultado es true si se pulsa OK y false en caso contrario.
*/
/*
    DOM / Document Object Model

    DOM transforma todos los documentos HTML en un conjunto de elementos llamados nodos, que están interconectados y que representan los contenidos de las páginas web y las relaciones entre ellos. Por su aspecto, la unión de todos los nodos se llama "árbol de nodos".
*/


/*
    Document: nodo raíz del que derivan todos los demás nodos del árbol.

    Element: representa cada una de las etiquetas HTML. Se trata del único nodo que puede contener atributos y el único del que pueden derivar otros nodos.

    Attr: se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas HTML, es decir, uno por cada par atributo=valor.

    Text: nodo que contiene el texto encerrado por una etiqueta HTML.

    Comment: representa los comentarios incluidos en la página HTML.
*/
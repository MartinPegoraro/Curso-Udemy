'use strict'

/* 
1 PIda 6 numeros por pantalla y los meta en un array
2 Mostrar el array entero en el cuerpo de la pagina y en la consola
3 Ordenarlo y mostrarlo
4  invertir su orden y mostrarlo
5 Mostrar cuantos elementos tiene el array
6 Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textocustom =""){
    document.write("<h1>Contenido del array " +textocustom+"</h1>");
    elementos.forEach((elemento, index)=> {
        document.write(elemento+ "<br/>");
    })
}


var numeros= [];
//var numeros = new Array(6);

//Pedir 6 numeros
for(var i = 0; i<=5; i++){
    numeros.push(parseInt(prompt("Introduce un numero ", 0)));
    //numeros[i] = parseInt(prompt("Introduce un numero ", 0));

}
//mostrar en consola
console.log(numeros);

//mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Ordenar y mostrarlo
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenado");

//Ivertir y mostrar
numeros.reverse();
mostrarArray(numeros, "Invertido");

//Mostrar cantidad de elementos en el array
document.write("<h1>El array tiene "+numeros.length+" elementos");

//Busqueda de un elemento
var busqueda = parseInt(prompt("Que elemento desea buscar ", 0));
var posicion = numeros.findIndex( numero => numero == busqueda);

if (posicion && posicion != -1){
    document.write("<h1>-----------------------------------------------------------------------</h1>");
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: "+posicion+"</h1>")
    document.write("<h1>-----------------------------------------------------------------------</h1>");
}else{
    document.write("<h1>-----------------------------------------------------------------------</h1>");
    document.write("<h1>NO ENCONTRADO</h1>");
    document.write("<h1>-----------------------------------------------------------------------</h1>");
}



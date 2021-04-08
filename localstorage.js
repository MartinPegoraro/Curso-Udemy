
window.addEventListener('load', function(){

    //comprobar disponibilidad del localStorage
    if(typeof(Storage) != 'undefine'){
        console.log("Esta disponible");
    }else{
        console.log("No Esta disponible");
    }

    //guardar datos en el localStorage
//    localStorage.setItem("titulo","curso de udemy");

    //recuperar elemento del localStorage
//    localStorage.getItem("titulo");

    //guardar objetos en el localStorage
//    var usuario = {
//        nombre: "Azor",
//        aprellido: "Ahai",
//        edad: 25,
//    }

//    localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar el objeto del localStorage
    //var userjs = JSON.parse(localStorage.getItem("usuario"));
    //console.log(userjs);

    //document.querySelector("#local").append(" "+userjs.edad+"/ "+ userjs.nombre);

   //Ejercicio con LocalStorage
   var formulario = document.querySelector("#peliculas");

    formulario.addEventListener('submit', function(){
        var titulo = document.querySelector('#agregarpelicula').value;
        if(titulo.length >= 1){
            localStorage.setItem(titulo, titulo);
        }else{
            alert("No has introducido nada ");
        }
        


    });
    var ul = document.querySelector('#peliculas');
    for (var i in localStorage){
        
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }

    }
    var formulariob = document.querySelector("#quitpeliculas");

    formulariob.addEventListener('submit', function(){
        var titulo = document.querySelector('#borrarpelicula').value;
        if(titulo.length >= 1){
            localStorage.removeItem(titulo);
        }else{
            alert("No has introducido nada ");
        }
    });
});
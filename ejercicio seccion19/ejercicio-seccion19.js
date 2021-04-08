
window.addEventListener('load', function(){
    console.log("DOM cargado");


    var formulario = document.querySelector("#formulario");
    var boxDashed =document.querySelector(".dashed");
    boxDashed.style.display = "none";
   

    formulario.addEventListener('submit' , function(){
        console.log("Evento submit capturado");
       
        boxDashed.innerHTML =""
        boxDashed.innerHTML = "<h3>Informacion del usuario</h3>" + "<hr>";
     
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            return false;
        }
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("El apellido no es valido");
            return false;
        }
        if(edad.trim() == null || edad <= 0){
            alert("la edad no es valida");
            return false;
        }

        boxDashed.style.display = "block";

        var datosUser = [nombre, apellido, edad];

        for(var indice in datosUser){
            var parrafo = document.createElement("p");
            parrafo.append(datosUser[indice]);
            
            boxDashed.append(parrafo);
        }

    })

})






window.addEventListener('load', function(){
    //Eventos del raton
    var boton =document.querySelector("#boton");

    function cambiarColor(){
    
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background ="green";
    }
        return true;
    }
    boton.addEventListener('click', function(){
        cambiarColor();
    })

    //Timers
    boton.style.background = "red";
    
    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("se ejecuto el intervalo");
    
            
            var color = document.querySelector("#boton");
            
            if(color.style.background == "red"){
               
                color.style.background = "green"
    
            }else{
               
                color.style.background = "red"
            }
    
        }, 1000)
        return tiempo;
        
    }
    var tiempo = intervalo();
  
    //iniciar el intervalo
    var start = document.querySelector("#start")

    start.addEventListener("click", function(){
      
       console.log("inicio el intervalo");
       intervalo();
    })

   //Parar el intervalo 
    var stop = document.querySelector("#stop")

    stop.addEventListener("click", function(){
        clearInterval(tiempo);
        console.log("se paro el intervalo");
    })


    //Mouse over

    boton.addEventListener('mouseover', function(){
        boton.style.background = 'brown';
    })

    //Mouse out

    boton.addEventListener('mouseout', function(){
        boton.style.background = 'white';
    })

    //Focus
    var input = document.querySelector("#nombre")
    input.addEventListener('focus', function(){
    console.log("estas dentro del input");
    })
    //Blur

    input.addEventListener('blur', function(){
    console.log("estas fuera del input");
    })

    //Keyup
    input.addEventListener('keyup', function(event){
        console.log("tecla soltada", String.fromCharCode(event.keyCode));

    })

    //Keydown
    input.addEventListener('keydown', function(event){
        console.log("pulsando esta tecla", String.fromCharCode(event.keyCode));

    })

    //Keypress
    input.addEventListener('keypress', function(event){
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    })

})




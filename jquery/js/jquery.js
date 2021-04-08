$(document).ready(function(){
    console.log("estamos lissto babyyyy");

    //$("#body").css("background", "red");

    //Selector ID
    var rojo = $("#rojo").css("background", "red");

    var amarillo = $("#amarillo").css("background", "blue");

    var verde = $("#verde").css("background", "black")
                            .css("color", "white");
   
    //Selector Clases
    var clase = $(".zebra");

    clase.css("background", "red");
    
    
    $(".cabra").click(function(){
        $(this).css("background", "green");
    });
    

    //Selector etiquetas
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        $(this).removeClass();
    });

    //Selector atributos
    $('[title=Google]').css('color', 'red');
    $('[title=Facebook]').css('color', 'green');

    //otros selectores
        //$('p, a').addClass('margen-superior');
    var busqueda = $("#caja").find(".resaltado");

    //Eventos Mouse y Hover

    //mouseOver y MouseOut
    
    var caja = $("#cajon");

    //caja.mouseover(function(){
    //    $(this).css("background", "red");
    //});
    //caja.mouseout(function(){
    //    $(this).css("background", "green");
    //});

    //Hover
    function cambiaRojo(){
        $(this).css("background", "red");
    };
    function cambiaVerde(){
        $(this).css("background", "green");
    };
    caja.hover(cambiaRojo, cambiaVerde);

    //click y doble click

    caja.click(function(){
        $(this).css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("color", "yellow");
    });

    //focus y blur
    var nombre =  $("#nombre");
    var datos = $("#datos");
    
    nombre.focus(function(){
        $(this).css("border", "2px solid red");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        
       datos.text($(this).val()).show();
    });

    //Mousedown y mouseUp

    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    })
    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });
    
    //MouseMove
      $(document).mousemove(function(){
            var sigueme = $("#sigueme");
            $('body').css("cursor","none");
            sigueme.css("left", event.clientX );
            sigueme.css("top", event.clientY );
      });







});
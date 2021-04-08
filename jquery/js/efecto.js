$(document).ready(function(){

    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        $("#caja").show("fast");
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        $("#caja").hide("fast");
    });

});
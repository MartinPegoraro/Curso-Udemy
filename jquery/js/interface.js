$(document).ready(function(){

    //MOVER ELEMENTO POR LA PAGINA
    $(".elemento").draggable()

    //REDIMENSIONARLOS ELEMENTOS
    $(".elemento").resizable()

    //SELECCIONAR ELEMENTOS
   // $(".listaa").selectable()

    //ORDENAR
    $(".listaa").sortable()

    //DROP
    $("#elemento-movido").draggable()
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area")
        }
    })

    //EFECTOS
    $("#mostrar").click(function(){
        $(".caja-efecto").toggle("explode", "slow")
      //  $(".caja-efecto").toggle("slide")
      //  $(".caja-efecto").toggle("blind")
      //  $(".caja-efecto").toggle("drop")
      //  $(".caja-efecto").toggle("fold")
      //  $(".caja-efecto").toggle("puff")
      //  $(".caja-efecto").fadeToggle()
    })

    //TOOLTIP
    $(document).tooltip();

    //CUADRO DE DIALOGO
    $("#lanzame").click(function(){
        $("#popup").dialog()
    })

    //CALENDARIO
    $("#calendario").datepicker()

    //TABS O PANEL DE PESTAÑS
    $("#pestana").tabs();
   


});
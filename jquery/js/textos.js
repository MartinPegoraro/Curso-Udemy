$(document).ready(function(){
    
    realoadLinks();

    $("#boton").click(function(){

       // $("#menu").html('<li><a href="'+$("#add").val()+'"></a></li>');  
       //(con html agrega pero borra los links anterior)
        
       
       $("#menu").append('<li><a href="'+$("#add").val()+'"></a></li>'); //append, prepend, before, after
       $("#add").val('');
       realoadLinks();
    });

    

    function realoadLinks(){
        $('a').each(function(index){
            var that = $(this);
            var enlace = $(this).attr("href");
            
            that.attr('target', '_blank');

            that.text(enlace);
        });
    };
})
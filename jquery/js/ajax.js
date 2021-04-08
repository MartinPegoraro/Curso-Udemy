$(document). ready(function(){

//load ajax
 //   $("#datos").load("https://reqres.in/");


//GEt 
    $.get("https://reqres.in/api/users", {page: 3}, function(response){

        console.log(response);
        response.data.forEach((element, index) => {
          $("#datos").append("<p>"+element.first_name+" "+element.last_name+" </p>");
        }) ;
    

    });



    //POST

    $("#formulario").submit(function(e){
        e.preventDefault();
       
        var usuario = {
            name: $('input[name = "name"]').val(),
            web: $('input[name = "web"]').val()
        }

      //  $.post($(this).attr("action"), usuario, function(response){
     //       console.log(response)
      //  });

        //Medoto con ajax
         $.ajax({
             type: "POST",
              url: $(this).attr("action"),
             data: usuario,
              beforeSend: function(){
                 console.log("se esta enviando la info");
              },
             success: function(response){
                  console.log(response)
             },
              error: function(){
                  console.log(" ah ocurrido un errorcillo")
              },
              timeout: 2000
          })

    });

    
  
    

   

});
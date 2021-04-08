$(document).ready(function(){

   //SLIDER
   if(window.location.href.indexOf('index') > -1){

    $(".galeria").bxSlider({
        mode: 'vertical',
        captions: true,
        slideWidth: 1200,
        responsive: true,
      });

   }
    


    //POST
    if(window.location.href.indexOf('index') > -1){
        var post = [
        {
            title: "Prueba de titulo 1",
            date: moment().format("MMMM dddd YYYY"),
            //date: moment().date() //saca el dia en numero y no en string
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },

        {
            title: "Prueba de titulo 2",
            date: moment().format("MMMM dddd YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },

        {
            title: "Prueba de titulo 3",
            date: moment().format("MMMM dddd YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },

        {
            title: "Prueba de titulo 4",
            date: moment().format("MMMM dddd YYYY"),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }

        ]
    
        post.forEach((item, index) => {
            var posts = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class=${item.date}</span>
                    <p>
                    ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
            `
            $("#post").append(posts)
    });
    }

    //SELECTOR DE TEMA

    var theme= $("#theme")

    $("#to-blue").click(function(){

        theme.attr("href", "css/blue.css")
    })
    $("#to-red").click(function(){

        theme.attr("href", "css/red.css")
    })
    $("#to-green").click(function(){

        theme.attr("href", "css/green.css")
    })

    //SCROLL ARRIBA DE LA WEB

    $(".subir").click(function(e){
         e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500)

        return false;
    });


    //LOGIN FALSO

    $("#login form").submit(function(){
        var form_name = $("#name").val()

        localStorage.setItem("nombre", form_name)
        
    })

  

    var form_name = localStorage.getItem("nombre")
    
    if(form_name != null && form_name != "undefined" ){

        var usuario = $("#usuario p")

        usuario.html("Bienvenido, "+ form_name+" ")
        usuario.append("<br><br><a href='#' id='logout'>Cerrar Sesion</a>" )


        $("#login form").hide()
        $("#login span").hide()

        $("#logout").click(function(){
            localStorage.clear()
            location.reload()
        })
    }
   
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion()
    }

    
    if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss")

            $("#reloj").html(reloj)
        }, 1000)
        
    }

    //VALIDACION
    if(window.location.href.indexOf('contact') > -1){
        
        $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
        })

        $.validate({
            lang: "es"
        })
    }

})
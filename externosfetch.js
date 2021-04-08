window.addEventListener('load', function(){
   //fetch (ajax) y peticiones a servicios / api rest
    var usuario = [];
    
    
    var fecha = new Date();
    var year = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDate();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();


    var textoHora = `
        El ano es: ${year}
        El mes es: ${mes}
        El dia es: ${dia}
        La hora es: ${hora}
        Los minutos son: ${minuto}
    `;
   
    console.log(textoHora);


    var div_usuario = document.querySelector("#usuarios");
    var div_janet = document.querySelector("#janet");
    var div_profesor = document.querySelector("#profesor");
   
   getUsuario()
   .then(data => data.json())
   .then(users => {
      
        listadoUsuario(users.data);

        return getJanet();
   })
   .then(data => data.json())
   .then(user =>{
       mostrarJanet(user.data);

       return getInfo();
   })
   .then( user => {
      div_profesor.innerHTML = user;
   })
   .catch(error => {
       alert("Se encontro un error");
   });


   function getUsuario(){
       return fetch('https://reqres.in/api/users');
   }

   function getJanet(){
       return fetch('https://reqres.in/api/users/2');
    }

    function getInfo(){
        var profesor = {
            nombre: 'Victor',
            apellido: 'Robles',
            url: 'https://twitter.com/home'
        };
        return new Promise((resolve, reject) => {
           var prof = JSON.stringify(profesor);

           if( typeof prof != 'string') return reject('error');

           return resolve(prof)
        });
        
        
    }

   function listadoUsuario(usuario){
    usuario.map((user, i) =>{   
           
        let nombre = document.createElement("h2");
        nombre.innerHTML = i + " " + user.first_name + " " + user.last_name + " " + user.email;
        
        div_usuario.appendChild(nombre);
    });
   }

   function mostrarJanet(user){    
        let nombre = document.createElement("h4");
        let avatar = document.createElement("img");

        avatar.src = user.avatar;
        nombre.innerHTML =user.first_name + " " + user.last_name + " " + user.email;
        div_janet.appendChild(avatar);
        div_janet.appendChild(nombre);
   }


});
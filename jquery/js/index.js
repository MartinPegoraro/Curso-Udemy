$(document).ready(function(){
document.querySelector('#boton').addEventListener('click', getDatos());

function getDatos(){
   
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'datos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);

            for(let i of datos){
                console.log(item);
            }
        }
    }
}
})
/*

const express = require('express');
const app = express();

//SETTINGS
app.set('appName','MARTIN PEGORARO');

app.set('port', 5000),


//MIDLEWARRS
app.use(express.json());



//ROUTES
app.get('/about', (req,res)=>{
    res.json({
        cueanexo: String,
        nombre: String,
        estado: String
    });
})

app.get('/search', (req,res)=>{
    res.send('buscar')
})

app.get('/listar', (req,res)=>{
    res.send('listado')
})

app.delete('/eliminar/:id', (req, res)=>{
    res.send(`usuario ${req.params.id} eliminado`)
})

app.use(express.static('public'));

app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log('Servidor escuchando', app.get('port'))
})

*/
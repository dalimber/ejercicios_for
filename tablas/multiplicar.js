function generarTablas() 
{
    let contenido="";
    let tabla=3;
    let cmpContenedor=document.getElementById("contenedor");
    let cmpTitulo=document.getElementById("txtTitiulo");
    cmpTitulo.innerText="🌈 Aprende la Tabla del "+tabla+" 🌈";
    //cmpContenedor.innerHTML="<h1>PROBANDO</h1>";
    for (let index = 1; index <=12; index++) 
        {
            let resultado=tabla*index;
            contenido=contenido+"<div class='fila' id='items'><span>3 × "+index
        +"</span><span>=</span><strong>"+resultado+"</strong></div>";
        cmpContenedor.innerHTML=contenido;
        
    }
}
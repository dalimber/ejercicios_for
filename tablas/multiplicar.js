function generarTablas() 
{
    //VALIDAR NUMERO
    let validacion=validarNumeroTabla();
    if (validacion==false) 
        {return;}
    //INICIALIZAR VARIABLES
    let contenido="";
    let tabla=txtNumeroTabla.value;
    let cmpContenedor=document.getElementById("contenedor");
    let cmpTitulo=document.getElementById("txtTitiulo");
    cmpTitulo.innerText="🌈 Aprende la Tabla del "+tabla+" 🌈";
    //cmpContenedor.innerHTML="<h1>PROBANDO</h1>";
    for (let index = 1; index <=12; index++) 
        {
            let resultado=tabla*index;
            contenido=contenido+"<div class='fila' id='items'><span>"+tabla+" × "+index
        +"</span><span>=</span><strong>"+resultado+"</strong></div>";
        cmpContenedor.innerHTML=contenido;
        
    }
}

function validarNumeroTabla(){
    
    const txtNumeroTabla = document.getElementById("txtNumeroTabla");
    const errorNumeroTabla = document.getElementById("errorNumeroTabla");
    txtNumeroTabla.classList.remove("input-error");
    txtNumeroTabla.classList.remove("input-correcto");

    txtNumeroTabla.addEventListener("blur", validarNumeroTabla);

    const numero = Number(txtNumeroTabla.value);

    // Limpiar estado anterior
    txtNumeroTabla.classList.remove("input-error");
    errorNumeroTabla.classList.remove("mostrar-error");
    errorNumeroTabla.textContent = "";

    // Campo vacío
    if(txtNumeroTabla.value.trim() === ""){

        txtNumeroTabla.classList.add("input-error");
        errorNumeroTabla.textContent = "Debe ingresar un número.";
        errorNumeroTabla.classList.add("mostrar-error");

        return false;

    }

    // Validación del rango

    if(numero < 1 || numero > 12){

        txtNumeroTabla.classList.add("input-error");
        errorNumeroTabla.textContent = "El número debe estar entre 1 y 12.";
        errorNumeroTabla.classList.add("mostrar-error");

        return false;

    }
    // Si todo está correcto
    txtNumeroTabla.classList.add("input-correcto");
    return true;

}
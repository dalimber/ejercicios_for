function ejecutar(ejercicio) 
{
    if (ejercicio==1) 
        {incremento();}
    else if (ejercicio==2) 
        {decremento();}
    else if (ejercicio==3) 
        {abreviado();}
    else if (ejercicio==4) 
        {listarImpares();}
}
function incremento() 
{
    for (let index = 0; index < 3; index++) 
        {console.log(index);}
}

function decremento() 
{
    for (let index = 3; index >1; index--) 
        {console.log(index);}
}

function abreviado() 
{
    for (let index = 0; index < 10; index+=2) 
        {console.log(index);}
}

function listarImpares() 
{
    for (let index = 1; index <= 7; index+=2) 
        {console.log(index);}
}
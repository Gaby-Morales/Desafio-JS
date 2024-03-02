
const precio = 400000;

function calcularPrecioTotal(){
    
}

function aumentar(){
    const cantidadElement = document.querySelector('.cantidad');
    const cantidadValue = Number(document.querySelector('.cantidad').innerHTML);

    cantidadElement.innerHTML = cantidadValue + 1;
}

function restar(){
    const cantidadElement = document.querySelector('.cantidad');
    const cantidadValue = Number(document.querySelector('.cantidad').innerHTML);
    
    if(cantidadValue >0){
    cantidadElement.innerHTML = cantidadValue - 1;
}
}
   

const precioSpan = document.querySelector(".precio-inicial");

precioSpan.innerHTML = precio;
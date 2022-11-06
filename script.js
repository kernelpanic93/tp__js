const PRECIO_ENTRADA = 200;
const RESUMEN_ERROR = "Error";

function calcularDcto() {
    let cantidadEntradas = document.getElementById('label__etiqueta__cantidad').value;
    let categoria = document.getElementById('label__etiqueta__categoria').value;
    
    const DESCUENTOS = {
        1 : 0.8,
        2 : 0.5,
        3 : 0.15
    }
    if (cantidadEntradas < 0) {
        document.getElementById('output').innerHTML = RESUMEN_ERROR;
        return;
    }
    let resumenConDcto = (cantidadEntradas * PRECIO_ENTRADA * DESCUENTOS[categoria]);
    
    document.getElementById('output').innerHTML = "Total a Pagar: $" + resumenConDcto;
}

function borrar() {
    document.getElementById('output').innerHTML = "Total a Pagar: ";
}
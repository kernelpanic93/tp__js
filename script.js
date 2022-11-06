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
    if (categoria < 0) {
        resumenConDcto = RESUMEN_ERROR;
    }
    let resumenConDcto = (cantidadEntradas* PRECIO_ENTRADA * DESCUENTOS[categoria]) || RESUMEN_ERROR;
    
    document.getElementById('output').innerHTML = "Total a Pagar: $" + resumenConDcto;
}


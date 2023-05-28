const cuerpoDePagina = document.querySelector("body");
const imagenProductos = document.querySelector("#imagen-1");
const nombreProducto = document.querySelector("#nombre-1");
const precioProductos = document.querySelector("#precio-1");


const selectCantidad = document.querySelector("#eleccion-cantidad");
const carritoCompra = document.querySelector("#lista-compra");
const precioTotal = document.querySelector("#monto-total");

const PRECIO_1 = 500;
const DESC_PRECIO1_3UNID = 10;
const DESC_PRECIO1_7UNID = 25;


const PRECIO_2 = 750;
const DESC_PRECIO2_1UNID = 15;
const DESC_PRECIO2_7UNID = 30;
const REGALO_EXTRA = 1;


const NOMBRE_1 = "Caramel Macchiato";
const NOMBRE_2 = "Scon de Queso";

const IMAGEN_1 = "https://th.bing.com/th/id/OIP.wYA3397YuPDrbRFG2wCi-QHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const IMAGEN_2 = "https://th.bing.com/th/id/OIP.tqX9NzQxjQGC4QAYeS7rLwHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7";

imagenProductos.src = IMAGEN_1;

let nombreProductoActual = NOMBRE_1;
let precioProductoActual = PRECIO_1;

let montoTotal = 0;

function compraAgregada() {
    let cantidadProducto = parseInt(selectCantidad.value);
    let descuentoAplicado = actualizaMontoTotal(cantidadProducto);
    precioTotal.innerHTML = `Precio Total : $${montoTotal}`;
    let textoCarrito = `${nombreProductoActual} (${cantidadProducto}) unid`;
    if (descuentoAplicado > 0) {
    textoCarrito += ` ${descuentoAplicado}% de descuento`;
    }

    if (nombreProductoActual === NOMBRE_2 && cantidadProducto === 7) {
    textoCarrito += " + 1 unidad de regalo";
    }

    carritoCompra.innerHTML += `<li>${textoCarrito}</li>`;
}


function siguienteCompra() {
    imagenProductos.src = IMAGEN_2;
    nombreProducto.innerHTML = NOMBRE_2;
    precioProductos.innerHTML = `Precio : $${PRECIO_2}`;
    actualizaInfoActual();
}


function actualizaInfoActual() {
    nombreProductoActual = NOMBRE_2;
    precioProductoActual = PRECIO_2;
}


function actualizaMontoTotal(cantidadProducto) {
    let descuentoProductos = 0
    descuentoProductos = descuentoAplicado(cantidadProducto);
    montoTotal += (precioProductoActual * ((100 - descuentoProductos) / 100)) * cantidadProducto;
    return descuentoProductos;
}
        
    
function descuentoAplicado(cantidadProducto) {
    
    let descuentoProductos = 0;

    switch (nombreProductoActual) {
        case NOMBRE_1:
            switch (cantidadProducto) {

                case 3:
                    descuentoProductos = DESC_PRECIO1_3UNID;
                    break;
                case 7:
                    descuentoProductos = DESC_PRECIO1_7UNID;
            }
            break;
        case NOMBRE_2:
            switch (cantidadProducto) {
                case 1:
                    descuentoProductos = DESC_PRECIO2_1UNID;
                    break;
                case 7:
                    descuentoProductos = DESC_PRECIO2_7UNID;
            }
            break;
       
    }

    return descuentoProductos;
}



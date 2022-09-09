const suma = (a,b) => a + b;
const resta = (a,b) => a- b;
const iva = x => x * 0.21;

let precioServicio = 12000;
let descuentoEfectivo = 1000;

let nuevoPrecio = resta ( suma (precioServicio,iva(precioServicio)),descuentoEfectivo);
console.log (nuevoPrecio);

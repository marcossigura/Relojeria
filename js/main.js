const nombre=prompt("Ingrese su nombre:");
const apellido=prompt("Ingrese su apellido:");
const anio= parseInt(prompt("Ingrese su año de nacimiento:"));
const anioActual=parseInt(prompt("Ingrese el año actual:"));

const edad=anioActual-anio;

alert("Bienvenido " + nombre+" "+apellido + ", su edad es: " + edad + " años");
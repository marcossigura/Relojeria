const veces=parseInt(prompt("Ingrese la cantidad de personas a calcular su edad:"));

for(let i=0;i<veces;i++){

    let nombre=prompt("Ingrese su nombre:");
    let apellido=prompt("Ingrese su apellido:");
    let anio= parseInt(prompt("Ingrese su año de nacimiento:"));
    let anioActual=parseInt(prompt("Ingrese el año actual:"));

    const edad=anioActual-anio;

    if(edad>=18){
       alert("Bienvenido " + nombre+" "+apellido + ", su edad es: " + edad + " años y eres mayor de edad");
       console.log("Bienvenido " + nombre+" "+apellido + ", su edad es: " + edad + " años y eres mayor de edad");
    }else{
    alert("Bienvenido " + nombre+" "+apellido + ", su edad es: " + edad + " años y eres menor de edad");
       console.log("Bienvenido " + nombre+" "+apellido + ", su edad es: " + edad + " años y eres menor de edad");
    }
}




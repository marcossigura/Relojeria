function clasificarEdad(edad){
   if(edad<=17){
      return "niño/adolescente"
   }else if(edad<=59){
      return "adulto"
   }else{
      return "adulto mayor"
   }
}

function verificarJubilacion(edad, sexo) {
   if (edad >= 60 && sexo == "femenino")
      return "puede jubilarse";
   else if (edad >= 65 && sexo == "masculino") {
      return "puede jubilarse";
   } else {
      return "no puede jubilarse";
   }
}

const mostrarResultado=(nombre, apellido, sexo, edad, categoria, jubilacion)=>{
   alert(
      "Nombre: " + nombre + "\n" +
      "Apellido: " + apellido + "\n" +
      "Sexo: " + sexo + "\n" +
      "Edad: " + edad + "\n" +
      "Categoria: " + categoria + "\n" +
      "Jubilacion: " + jubilacion
   );
}

let continuar="si";
while(continuar=="si"){
   let nombre = prompt("Ingrese su nombre: ");
   let apellido = prompt("Ingrese su apellido: ");
   let sexo = prompt("Ingrese su sexo (Masculino o Femenino): ").toLowerCase();
   let edad = parseInt(prompt("Ingrese su edad:"));
      
   const categoria=clasificarEdad(edad);
   const jubilacion=verificarJubilacion(edad, sexo);

   mostrarResultado(nombre, apellido,sexo,edad,categoria,jubilacion);
   
   continuar=prompt("¿Desea cargar a otra persona (si o no)?").toLowerCase();
}




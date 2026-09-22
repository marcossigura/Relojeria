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

   if (edad >= 60 && sexo == "femenino"){
      return "puede jubilarse";
   }
   else if (edad >= 65 && sexo == "masculino") {
      return "puede jubilarse";
   } else {
      return "no puede jubilarse";
   }
}

function calcularAños(edad, sexo){

   let añosFaltantes;

   if(edad<60 && sexo=="femenino"){
      añosFaltantes=60-edad;
      return añosFaltantes;
   }
   else if(edad<65 && sexo=="masculino"){
      añosFaltantes=65-edad;
      return añosFaltantes;
   }
}

const mostrarResultado=(nombre, apellido, sexo, edad, categoria, jubilacion,años)=>{

   if(edad<60 && sexo=="femenino" || edad<65 && sexo=="masculino" ){
      alert(
      "Nombre: " + nombre + "\n" +
      "Apellido: " + apellido + "\n" +
      "Sexo: " + sexo + "\n" +
      "Edad: " + edad + "\n" +
      "Categoria: " + categoria + "\n" +
      "Jubilacion: " + jubilacion + "\n" +
      "Años faltantes para jubilarte: " + años
   );
   }
   else{
      alert(
      "Nombre: " + nombre + "\n" +
      "Apellido: " + apellido + "\n" +
      "Sexo: " + sexo + "\n" +
      "Edad: " + edad + "\n" +
      "Categoria: " + categoria + "\n" +
      "Jubilacion: " + jubilacion
   );
   }

}

const personasRegistradas=["Laura Gómez", "Nicolás Pérez", "Marta Díaz", "Juan Gimenez", "Carla Ruiz"];

function listarRegistrados(personasRegistradas){

   console.log("Personas registradas");
   for(const persona of personasRegistradas){
      console.log("Persona:" + persona);
   }
}

let continuar="si";
while(continuar=="si"){

   let nombre = prompt("Ingrese su nombre: ");
   let apellido = prompt("Ingrese su apellido: ");
   let sexo = prompt("Ingrese su sexo (Masculino o Femenino): ").toLowerCase();
   let edad = parseInt(prompt("Ingrese su edad:"));
      
   const categoria=clasificarEdad(edad);
   const jubilacion=verificarJubilacion(edad, sexo);
   const años=calcularAños(edad, sexo);

   mostrarResultado(nombre, apellido,sexo,edad,categoria,jubilacion,años);
   
   const nombreCompleto=nombre + " " + apellido;

   if(jubilacion=="puede jubilarse"){
      personasRegistradas.unshift(nombreCompleto);
   } else {
      personasRegistradas.push(nombreCompleto);
   }

   continuar=prompt("¿Desea cargar a otra persona (si o no)?").toLowerCase();
}

listarRegistrados(personasRegistradas);

const corregir=prompt("¿Alguna persona escribió mal su nombre y querés corregirlo? (si o no)").toLowerCase();
if(corregir=="si"){

   const nombreACorregir=prompt("Ingresá el nombre (tal cual está escrito) que querés corregir:");
   if(personasRegistradas.includes(nombreACorregir)){

      const posicion=personasRegistradas.indexOf(nombreACorregir);
      const nombreCorregido=prompt("Ingresá el nombre corregido:");

      personasRegistradas.splice(posicion,1, nombreCorregido);
      console.log("Nombre corregido. Registro actualizado:");

      listarRegistrados(personasRegistradas);
   }else{
      console.log(nombreACorregir + " no está registrado, no se puede corregir");
   }
}else{
   console.log("No se realizaron correcciones");
}


class Persona {
   constructor(nombre, apellido, sexo, edad){
      this.nombre = nombre;
      this.apellido = apellido;
      this.sexo = sexo;
      this.edad = edad;
   }

   obtenerNombreCompleto(){
      return this.nombre + " " + this.apellido;
   }

   clasificarEdad(){
      if(this.edad <= 17){
         return "niño/adolescente";
      } else if(this.edad <= 59){
         return "adulto";
      } else {
         return "adulto mayor";
      }
   }

   verificarJubilacion(){
      if(this.edad >= 60 && this.sexo == "femenino"){
         return "puede jubilarse";
      } else if(this.edad >= 65 && this.sexo == "masculino"){
         return "puede jubilarse";
      } else {
         return "no puede jubilarse";
      }
   }

   calcularAños(){
      if(this.edad < 60 && this.sexo == "femenino"){
         return 60 - this.edad;
      } else if(this.edad < 65 && this.sexo == "masculino"){
         return 65 - this.edad;
      }
   }
}

const mostrarResultado = (persona, categoria, jubilacion, años) => {
   if(persona.edad<60 && persona.sexo=="femenino" || persona.edad<65 && persona.sexo=="masculino"){
      console.log(
         "Nombre: " + persona.nombre + "\n" +
         "Apellido: " + persona.apellido + "\n" +
         "Sexo: " + persona.sexo + "\n" +
         "Edad: " + persona.edad + "\n" +
         "Categoria: " + categoria + "\n" +
         "Jubilacion: " + jubilacion + "\n" +
         "Años faltantes para jubilarte: " + años
      );
   } else {
      console.log(
         "Nombre: " + persona.nombre + "\n" +
         "Apellido: " + persona.apellido + "\n" +
         "Sexo: " + persona.sexo + "\n" +
         "Edad: " + persona.edad + "\n" +
         "Categoria: " + categoria + "\n" +
         "Jubilacion: " + jubilacion
      );
   }
};

const personasRegistradas = ["Laura Gómez", "Nicolás Pérez", "Marta Díaz", "Juan Gimenez", "Carla Ruiz"];

function listarRegistrados(personasRegistradas){
   console.log("Personas registradas");
   for(const persona of personasRegistradas){
      console.log("Persona:" + persona);
   }
}

let continuar = "si";
while(continuar == "si"){

   let nombre = prompt("Ingrese su nombre: ");
   let apellido = prompt("Ingrese su apellido: ");
   let sexo = prompt("Ingrese su sexo (Masculino o Femenino): ").toLowerCase();
   let edad = parseInt(prompt("Ingrese su edad:"));

   const persona = new Persona(nombre, apellido, sexo, edad);

   const categoria = persona.clasificarEdad();
   const jubilacion = persona.verificarJubilacion();
   const años = persona.calcularAños();

   mostrarResultado(persona, categoria, jubilacion, años);

   if(jubilacion == "puede jubilarse"){
      personasRegistradas.unshift(persona.obtenerNombreCompleto());
   } else {
      personasRegistradas.push(persona.obtenerNombreCompleto());
   }

   continuar = prompt("¿Desea cargar a otra persona (si o no)?").toLowerCase();
}

listarRegistrados(personasRegistradas);

const corregir = prompt("¿Alguna persona escribió mal su nombre y querés corregirlo? (si o no)").toLowerCase();
if(corregir == "si"){

   const nombreACorregir = prompt("Ingresá el nombre (tal cual está escrito) que querés corregir:");
   if(personasRegistradas.includes(nombreACorregir)){

      const posicion=personasRegistradas.indexOf(nombreACorregir);
      const nombreCorregido=prompt("Ingresá el nombre corregido:");

      personasRegistradas.splice(posicion,1,nombreCorregido);
      console.log("Nombre corregido. Registro actualizado:");

      listarRegistrados(personasRegistradas);
   }else{
      console.log(nombreACorregir + " no está registrado, no se puede corregir");
   }
}else{
   console.log("No se realizaron correcciones");
}


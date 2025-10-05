function caracterdepalabra() {
// Declaración de variables al inicio
let palabraOriginal;
let palabra;
let palabraMinusculas;
let totalCaracteres;
let totalVocales;
let esValida;
let info;
let mensajeFinal;
let mensajeVocales;
   let letraBuscada;
   let totalLetraBuscada;

// Declaración de constantes
const vocales = ['a','e','i','o','u','á','é','í','ó','ú','ü'];

// -------------------------------
// Asignación de valores
// -------------------------------

// Entrada del usuario
palabraOriginal = prompt("Ingrese una palabra:"); 
palabra = palabraOriginal.trim(); 
palabraMinusculas = palabra.toLowerCase(); 

   // Segundo prompt para pedir una letra específica
   letraBuscada = prompt("Ingrese una letra para contar sus apariciones en la palabra:");
   letraBuscada = letraBuscada ? letraBuscada.toLowerCase().trim() : "";

// Procesos
totalCaracteres = palabra.length; 
totalVocales = 0; 
esValida = totalCaracteres > 0; 
   totalLetraBuscada = 0;

// Objeto con datos de la palabra
info = {
  original: palabraOriginal,
  limpia: palabra,
  longitud: totalCaracteres
};

// Recorremos la palabra para contar vocales
for (let i = 0; i < palabraMinusculas.length; i++) {
  const caracter = palabraMinusculas[i];
  if (vocales.includes(caracter)) {
    totalVocales++;
  }
     if (letraBuscada && caracter === letraBuscada) {
       totalLetraBuscada++;
     }
}

// Mensajes finales
mensajeFinal = `La palabra "${palabra}" tiene ${totalCaracteres} letras.`;
mensajeVocales = `Contiene ${totalVocales} vocal(es).`;
   let mensajeLetra = letraBuscada ? `La letra "${letraBuscada}" aparece ${totalLetraBuscada} vez/veces.` : "No se ingresó una letra para buscar.";

// Salida
   alert(mensajeFinal + "\n" + mensajeVocales + "\n" + mensajeLetra); 
   console.log(mensajeFinal); 
   console.log(mensajeVocales);
   console.log(mensajeLetra);
   console.log("Detalle objeto:", info);
}
caracterdepalabra()
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

// Asignación de valores

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

//----------------------------------------------------------------------
//2.contar apariciones de una letra especifica
function numerodevocales() {
let fraseOriginal;      
let frase;              
let letraBuscar;         
let letraMinuscula;     
let totalApariciones;     
let esValida;           
let info;                
let mensajeFinal;        

// Constantes
const alfabetoVocales = ['a','e','i','o','u','á','é','í','ó','ú','ü'];

// Entrada de datos
fraseOriginal = prompt("Ingrese una frase:"); 
frase = fraseOriginal.trim(); // Eliminamos espacios en los extremos

letraBuscar = prompt("Ingrese la letra que desea contar:"); 
letraMinuscula = letraBuscar.toLowerCase(); // Normalizamos a minúscula

// Validación y preparación

totalApariciones = 0;
esValida = frase.length > 0 && letraBuscar.length === 1; // Validamos frase y que la letra sea solo 1

info = {
  fraseOriginal: fraseOriginal,
  letraBuscada: letraBuscar,
  longitudFrase: frase.length
};

// Proceso: conteo de apariciones
for (let i = 0; i < frase.length; i++) {
  const caracterActual = frase[i].toLowerCase(); // Convertimos cada carácter a minúscula
  if (caracterActual === letraMinuscula) {
    totalApariciones++;
  }
}

// Salida de resultados
mensajeFinal = `La letra '${letraBuscar}' aparece ${totalApariciones} vez(es) en la frase.`;

alert(mensajeFinal);
console.log(mensajeFinal);
console.log("Detalle objeto:", info);
}
numerodevocales()


//-----------------------------------------------------------------------
//3.invertir un texto
function invertirtexto() {
let textoOriginal;     
let texto;             
let textoMinusculas;   
let textoInvertido;    
let totalCaracteres;   
let esValido;         
let info;              
let mensajeFinal;     

// Entrada de datos
textoOriginal = prompt("Ingrese un texto:"); 
texto = textoOriginal.trim(); // Eliminamos espacios al inicio y final
textoMinusculas = texto.toLowerCase(); // Opcional: para estandarizar

// Procesos
totalCaracteres = texto.length;
esValido = totalCaracteres > 0;

// Creamos objeto de información
info = {
  textoOriginal: textoOriginal,
  longitud: totalCaracteres
};

// Invertimos el texto
textoInvertido = "";
for (let i = totalCaracteres - 1; i >= 0; i--) {
  textoInvertido += textoMinusculas[i]; // agregamos cada carácter desde el final
}

// Salida
mensajeFinal = `El texto invertido es: "${textoInvertido}"`;

alert(mensajeFinal);
console.log(mensajeFinal);
console.log("Detalle objeto:", info);
}
invertirtexto()

//-----------------------------------------------------------------------
//4.comparar longitudes de cadenas
function compararLongitudes() {
    // Variables dentro de la función
    let longitud1 = cadena1.trim().length;
    let longitud2 = cadena2.trim().length;
    let mensaje;

    // Comparación
    if (longitud1 > longitud2) {
        mensaje = `El apellido '${cadena1}' tiene más letras.`;
    } else if (longitud2 > longitud1) {
        mensaje = `El apellido '${cadena2}' tiene más letras.`;
    } else {
        mensaje = `Ambos apellidos '${cadena1}' y '${cadena2}' tienen la misma cantidad de letras.`;
    }

    return mensaje;
}

// Entrada de datos
let apellido1 = prompt("Ingrese el primer apellido:");
let apellido2 = prompt("Ingrese el segundo apellido:");

// Llamada a la función y salida
let resultado = compararLongitudes(apellido1, apellido2);

alert(resultado);
console.log(resultado)

compararLongitudes()

//-----------------------------------------------------------------------
//5.iniciales de un nombre completo
function inicialdenombre() {
let nombreCompleto;   
let palabras;         
let iniciales;        
let mensajeFinal;    
let info;            


nombreCompleto = prompt("Ingrese su nombre completo:"); 
nombreCompleto = nombreCompleto.trim(); // Eliminamos espacios al inicio y final

palabras = nombreCompleto.split(" ");  

// Inicializamos las iniciales vacías
iniciales = "";

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 0) { // Evitamos palabras vacías
        iniciales += palabras[i][0].toUpperCase() + ".";
    }
}

// Creamos objeto de información
info = {
    nombreOriginal: nombreCompleto,
    cantidadPalabras: palabras.length,
    iniciales: iniciales
};

// Salida
mensajeFinal = `Las iniciales de "${nombreCompleto}" son: ${iniciales}`;

alert(mensajeFinal);
console.log(mensajeFinal);
console.log("Detalle objeto:", info);
}
inicialdenombre()

//------------------------------------------------------------------------
//6.remplazo de caracteres
function remplazo() {
let textoOriginal;     
let texto;             
let caracterReemplazar; 
let caracterNuevo;     
let textoModificado;   
let mensajeFinal;      
let info;              

textoOriginal = prompt("Ingrese un texto:");
texto = textoOriginal.trim();

caracterReemplazar = prompt("Ingrese el caracter que desea reemplazar:");
caracterNuevo = prompt("Ingrese el nuevo caracter que lo reemplazará:");

textoModificado = "";
for (let i = 0; i < texto.length; i++) {
    let caracterActual = texto[i];
    if (caracterActual === caracterReemplazar) {
        textoModificado += caracterNuevo;
    } else {
        textoModificado += caracterActual;
    }
}

// Objeto de información
info = {
    textoOriginal: textoOriginal,
    caracterReemplazado: caracterReemplazar,
    caracterNuevo: caracterNuevo,
    textoModificado: textoModificado
};

// Salida
mensajeFinal = `Texto modificado: "${textoModificado}"`;

alert(mensajeFinal);
console.log(mensajeFinal);
console.log("Detalle objeto:", info);
}
remplazo ()

//-----------------------------------------------------------------------
//7.palabra palindroma
function palindromo () {
let palabraOriginal;   
let palabra;          
let palabraMinusculas; 
let palabraInvertida;  
let esPalindromo;      
let mensajeFinal;     
let info;              

palabraOriginal = prompt("Ingrese una palabra:");
palabra = palabraOriginal.trim();
palabraMinusculas = palabra.toLowerCase();

palabraInvertida = "";
for (let i = palabraMinusculas.length - 1; i >= 0; i--) {
    palabraInvertida += palabraMinusculas[i];
}

// Comparación
esPalindromo = (palabraMinusculas === palabraInvertida);

// Objeto de información
info = {
    palabraOriginal: palabraOriginal,
    palabraInvertida: palabraInvertida,
    esPalindromo: esPalindromo
};

if (esPalindromo) {
    mensajeFinal = `La palabra '${palabraOriginal}' es un palíndromo.`;
} else {
    mensajeFinal = `La palabra '${palabraOriginal}' NO es un palíndromo.`;
}

alert(mensajeFinal);
console.log(mensajeFinal);
console.log("Detalle objeto:", info);
}
palindromo()

//------------------------------------------------------------------------
//8.frase con mayor cantidad de caracteres
function frasemayor() {
let frase1;         
let frase2;          
let longitud1;       
let longitud2;       
let mensajeFinal;    
let info;            

frase1 = prompt("Ingrese la primera frase:").trim();
frase2 = prompt("Ingrese la segunda frase:").trim();

longitud1 = frase1.length;
longitud2 = frase2.length;

if (longitud1 > longitud2) {
    mensajeFinal = `La frase '${frase1}' tiene más caracteres.`;
} else if (longitud2 > longitud1) {
    mensajeFinal = `La frase '${frase2}' tiene más caracteres.`;
} else {
    mensajeFinal = `Ambas frases tienen la misma cantidad de caracteres.`;
}

// Creamos objeto de información
info = {
    frase1: frase1,
    frase2: frase2,
    longitudFrase1: longitud1,
    longitudFrase2: longitud2
};

alert(mensajeFinal);
console.log(mensajeFinal);
console.log("Detalle objeto:", info);
}
frasemayor()

//------------------------------------------------------------------------
//9.contar apariciones de un caracter elegido
function contarapariciones() {
let textoOriginal;    
let texto;            
let caracterBuscar;    
let totalApariciones;  
let mensajeFinal;     
let info;              

textoOriginal = prompt("Ingrese un texto:").trim();
texto = textoOriginal;

caracterBuscar = prompt("Ingrese el carácter a contar:");

totalApariciones = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caracterBuscar) {
        totalApariciones++;
    }
}

// Objeto con información adicional
info = {
    textoOriginal: textoOriginal,
    caracterBuscado: caracterBuscar,
    totalApariciones: totalApariciones
};

mensajeFinal = `La letra '${caracterBuscar}' aparece ${totalApariciones} vez(es).`;

alert(mensajeFinal);
console.log(mensajeFinal);
console.log("Detalle objeto:", info);
}
contarapariciones()


//-------------------------------------------------------------------------
//10.dividir oracion en palabras
function dividiroracion() {
let oracionOriginal;   
let oracion;          
let palabras;          
let mensajeFinal;      
let info;              

oracionOriginal = prompt("Ingrese una oración:").trim();
oracion = oracionOriginal;

// Dividimos la oración en palabras usando espacios como separador
palabras = oracion.split(" ");

// Creamos objeto de información
info = {
    oracionOriginal: oracionOriginal,
    cantidadPalabras: palabras.length,
    palabras: palabras
};

mensajeFinal = "Las palabras de la oración son:\n";
for (let i = 0; i < palabras.length; i++) {
    mensajeFinal += palabras[i] + "\n"; // agregamos cada palabra en una línea
}

alert(mensajeFinal);
console.log(mensajeFinal);
console.log("Detalle objeto:", info);
}
dividiroracion()

//-------------------------------------------------------------------------

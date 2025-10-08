//PSeint
Proceso ContarCaracteres
    Definir palabraOriginal, palabra Como Cadena
    Definir totalCaracteres Como Entero

    Escribir "Ingrese una palabra:"
    Leer palabraOriginal

    // Eliminar espacios en blanco al inicio y al final
    palabra <- Trim(palabraOriginal)

    // Contar la cantidad de caracteres con la función Longitud
    totalCaracteres <- Longitud(palabra)

    Escribir "La palabra '", palabra, "' tiene ", totalCaracteres, " caracteres en total."
FinProceso

//JAVA SCRIPT
//. Contar caracteres de una palabra
function caracterdepalabra() {
  // Declaración de variables
  let palabraOriginal;
  let palabra;
  let totalCaracteres;
  let mensajeFinal;

  // Entrada del usuario
  palabraOriginal = prompt("Ingrese una palabra:");
  
  // Eliminar espacios extra al inicio y al final
  palabra = palabraOriginal.trim();

  // Calcular cantidad de caracteres
  totalCaracteres = palabra.length;

  // Crear mensaje final
  mensajeFinal = `La palabra "${palabra}" tiene ${totalCaracteres} caracteres en total.`;

  // Mostrar resultado
  alert(mensajeFinal);
  console.log(mensajeFinal);
}

caracterdepalabra();

//----------------------------------------------------------------------


//PSeint
//2.contar apariciones de una letra especifica
Proceso ContarLetraEspecifica
    Definir fraseOriginal, frase, letraBuscar, letraMinuscula, caracterActual Como Cadena
    Definir totalApariciones, i Como Entero
    Definir esValida Como Logico

    Escribir "Ingrese una frase:"
    Leer fraseOriginal
    frase <- Trim(fraseOriginal)

    Escribir "Ingrese la letra que desea contar:"
    Leer letraBuscar
    letraMinuscula <- Minusculas(letraBuscar)

    totalApariciones <- 0
    esValida <- Longitud(frase) > 0 Y Longitud(letraBuscar) = 1

    Si No esValida Entonces
        Escribir "Debe ingresar una frase válida y solo una letra para buscar."
        FinProceso
    FinSi

    Para i <- 1 Hasta Longitud(frase) Con Paso 1 Hacer
        caracterActual <- Minusculas(Subcadena(frase, i, i))
        Si caracterActual = letraMinuscula Entonces
            totalApariciones <- totalApariciones + 1
        FinSi
    FinPara

    Escribir "La letra '", letraBuscar, "' aparece ", totalApariciones, " vez(es) en la frase."
FinProceso

//JAVA SCRIPT
//2.contar apariciones de una letra especifica
// Contar apariciones de una letra específica
function numerodevocales() {
  let fraseOriginal;
  let frase;
  let letraBuscar;
  let letraMinuscula;
  let totalApariciones;
  let esValida;
  let mensajeFinal;

  // Entrada de datos
  fraseOriginal = prompt("Ingrese una frase:"); 
  frase = fraseOriginal.trim(); // Eliminamos espacios al inicio y al final

  letraBuscar = prompt("Ingrese la letra que desea contar:"); 
  letraMinuscula = letraBuscar.toLowerCase(); // Normalizamos a minúscula

  // Inicialización y validación
  totalApariciones = 0;
  esValida = frase.length > 0 && letraBuscar.length === 1; 

  if (!esValida) {
    alert("Debe ingresar una frase válida y solo una letra para buscar.");
    return; // Sale de la función si la entrada es inválida
  }

  // Proceso: conteo de apariciones
  for (let i = 0; i < frase.length; i++) {
    const caracterActual = frase[i].toLowerCase();
    if (caracterActual === letraMinuscula) {
      totalApariciones++;
    }
  }

  // Salida de resultados
  mensajeFinal = `La letra '${letraBuscar}' aparece ${totalApariciones} vez(es) en la frase.`;
  alert(mensajeFinal);
  console.log(mensajeFinal);
}

numerodevocales();

//----------------------------------------------------------------------
//PSeint
Proceso InvertirTexto
    Definir textoOriginal, texto, textoMinusculas, textoInvertido, mensajeFinal Como Cadena
    Definir totalCaracteres Como Entero
    Definir i Como Entero

    // Entrada de datos
    Escribir "Ingrese un texto:"
    Leer textoOriginal
    texto <- Trim(textoOriginal)           // Elimina espacios al inicio y final
    textoMinusculas <- Minusculas(texto)   // Opcional: para estandarizar

    totalCaracteres <- Longitud(texto)     // Contar cuántos caracteres tiene el texto

    Si totalCaracteres = 0 Entonces
        Escribir "No ingresó ningún texto."
        FinProceso
    FinSi

    // Invertir el texto
    textoInvertido <- ""
    Para i <- totalCaracteres Hasta 1 Paso -1
        textoInvertido <- textoInvertido + Subcadena(textoMinusculas, i, i)
    FinPara

    // Salida
    mensajeFinal <- "El texto invertido es: """ + textoInvertido + """"
    Escribir mensajeFinal
FinProceso

//JAVA SCRIPT
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
//PSeint
Proceso CompararLongitudes
    Definir apellido1, apellido2 Como Cadena
    Definir longitud1, longitud2 Como Entero
    Definir mensaje Como Cadena

    // Entrada de datos
    Escribir "Ingrese el primer apellido:"
    Leer apellido1
    Escribir "Ingrese el segundo apellido:"
    Leer apellido2

    // Calcular longitudes
    longitud1 <- Longitud(Trim(apellido1))
    longitud2 <- Longitud(Trim(apellido2))

    // Comparación
    Si longitud1 > longitud2 Entonces
        mensaje <- "El apellido '" + apellido1 + "' tiene más letras."
    Sino
        Si longitud2 > longitud1 Entonces
            mensaje <- "El apellido '" + apellido2 + "' tiene más letras."
        Sino
            mensaje <- "Ambos apellidos '" + apellido1 + "' y '" + apellido2 + "' tienen la misma cantidad de letras."
        FinSi
    FinSi

    // Salida
    Escribir mensaje
FinProceso

//JAVA SCRIPT
//4.comparar longitudes de cadenas
function compararLongitudes(cadena1, cadena2) {
    // Variables dentro de la función
    let longitud1 = cadena1.trim().length; // Contar caracteres de la primera cadena
    let longitud2 = cadena2.trim().length; // Contar caracteres de la segunda cadena
    let mensaje;

    // Comparación de longitudes
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
console.log(resultado);


//-----------------------------------------------------------------------
//PSeint
Proceso InicialesDeNombre
    Definir nombreCompleto, palabras, iniciales, mensajeFinal Como Cadena
    Definir i Como Entero

    // Entrada de datos
    Escribir "Ingrese su nombre completo:"
    Leer nombreCompleto
    nombreCompleto <- Trim(nombreCompleto)  // Quita espacios al inicio y final

    // Dividir el nombre en palabras
    palabras <- Split(nombreCompleto, " ")  // Cada palabra se guarda en un arreglo

    // Inicializamos las iniciales vacías
    iniciales <- ""

    // Recorremos cada palabra para obtener la primera letra
    Para i <- 1 Hasta Dimension(palabras) Con Paso 1
        Si Longitud(palabras[i]) > 0 Entonces   // Evitar palabras vacías (por doble espacio)
            iniciales <- iniciales + Mayuscula(Subcadena(palabras[i],1,1)) + "."
        FinSi
    FinPara

    // Mostrar resultado
    mensajeFinal <- "Las iniciales de '" + nombreCompleto + "' son: " + iniciales
    Escribir mensajeFinal
FinProceso

//JAVA SCRIPT
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
//PSeint
Proceso ReemplazoDeCaracter
    Definir texto, caracterReemplazar, caracterNuevo, textoModificado, mensajeFinal Como Cadena
    Definir i Como Entero

    // Entrada de datos
    Escribir "Ingrese un texto:"
    Leer texto
    texto <- Trim(texto)  // Eliminar espacios al inicio y final

    Escribir "Ingrese el caracter que desea reemplazar:"
    Leer caracterReemplazar

    Escribir "Ingrese el nuevo caracter que lo reemplazará:"
    Leer caracterNuevo

    // Inicializar el texto modificado
    textoModificado <- ""

    // Recorremos cada carácter del texto
    Para i <- 1 Hasta Longitud(texto) Con Paso 1
        Si Subcadena(texto, i, i) = caracterReemplazar Entonces
            textoModificado <- textoModificado + caracterNuevo
        Sino
            textoModificado <- textoModificado + Subcadena(texto, i, i)
        FinSi
    FinPara

    // Salida
    mensajeFinal <- "Texto modificado: " + textoModificado
    Escribir mensajeFinal
FinProceso

//JAVA SCRIPT
//6.remplazo de caracteres
function remplazo() {
    let texto = prompt("Ingrese un texto:").trim();
    let caracterReemplazar = prompt("Ingrese el caracter que desea reemplazar:");
    let caracterNuevo = prompt("Ingrese el nuevo caracter que lo reemplazará:");
    let textoModificado = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracterReemplazar) {
            textoModificado += caracterNuevo;
        } else {
            textoModificado += texto[i];
        }
    }

    let mensajeFinal = `Texto modificado: "${textoModificado}"`;
    alert(mensajeFinal);
    console.log(mensajeFinal);
}

remplazo();


//-----------------------------------------------------------------------
//PSeint
Proceso Palindromo
    Definir palabraOriginal, palabraMinusculas, palabraInvertida, mensajeFinal Como Cadena
    Definir i Como Entero
    Definir esPalindromo Como Logico

    // Entrada
    Escribir "Ingrese una palabra:"
    Leer palabraOriginal
    palabraOriginal <- Trim(palabraOriginal)
    palabraMinusculas <- Minuscula(palabraOriginal)

    // Invertir la palabra
    palabraInvertida <- ""
    Para i <- Longitud(palabraMinusculas) Hasta 1 Paso -1
        palabraInvertida <- palabraInvertida + Subcadena(palabraMinusculas, i, i)
    FinPara

    // Comparación
    esPalindromo <- (palabraMinusculas = palabraInvertida)

    // Salida
    Si esPalindromo Entonces
        mensajeFinal <- "La palabra '" + palabraOriginal + "' es un palíndromo."
    Sino
        mensajeFinal <- "La palabra '" + palabraOriginal + "' NO es un palíndromo."
    FinSi

    Escribir mensajeFinal
FinProceso

//JAVASCRIPT
//7.palabra palindroma
function palindromo() {
    let palabraOriginal = prompt("Ingrese una palabra:").trim();
    let palabraMinusculas = palabraOriginal.toLowerCase();
    let palabraInvertida = "";

    for (let i = palabraMinusculas.length - 1; i >= 0; i--) {
        palabraInvertida += palabraMinusculas[i];
    }

    let esPalindromo = (palabraMinusculas === palabraInvertida);
    let mensajeFinal = esPalindromo 
        ? `La palabra '${palabraOriginal}' es un palíndromo.` 
        : `La palabra '${palabraOriginal}' NO es un palíndromo.`;

    alert(mensajeFinal);
    console.log(mensajeFinal);
}

palindromo();


//------------------------------------------------------------------------
//PSeint
Proceso FraseMayor
    Definir frase1, frase2, mensajeFinal Como Cadena
    Definir longitud1, longitud2 Como Entero

    // Entrada de datos
    Escribir "Ingrese la primera frase:"
    Leer frase1
    frase1 <- Trim(frase1)

    Escribir "Ingrese la segunda frase:"
    Leer frase2
    frase2 <- Trim(frase2)

    // Longitudes
    longitud1 <- Longitud(frase1)
    longitud2 <- Longitud(frase2)

    // Comparación
    Si longitud1 > longitud2 Entonces
        mensajeFinal <- "La frase '" + frase1 + "' tiene más caracteres."
    Sino
        Si longitud2 > longitud1 Entonces
            mensajeFinal <- "La frase '" + frase2 + "' tiene más caracteres."
        Sino
            mensajeFinal <- "Ambas frases tienen la misma cantidad de caracteres."
        FinSi
    FinSi

    // Salida
    Escribir mensajeFinal
FinProceso

//JAVA SCRIPT
//8.frase con mayor cantidad de caracteres
function frasemayor() {
    let frase1 = prompt("Ingrese la primera frase:").trim();
    let frase2 = prompt("Ingrese la segunda frase:").trim();

    let longitud1 = frase1.length;
    let longitud2 = frase2.length;

    let mensajeFinal;
    if (longitud1 > longitud2) {
        mensajeFinal = `La frase '${frase1}' tiene más caracteres.`;
    } else if (longitud2 > longitud1) {
        mensajeFinal = `La frase '${frase2}' tiene más caracteres.`;
    } else {
        mensajeFinal = `Ambas frases tienen la misma cantidad de caracteres.`;
    }

    alert(mensajeFinal);
    console.log(mensajeFinal);
}

frasemayor();


//------------------------------------------------------------------------
//PSENIT
Proceso ContarApariciones
    Definir texto, caracterBuscar, mensajeFinal Como Cadena
    Definir totalApariciones, i Como Entero

    // Entrada de datos
    Escribir "Ingrese un texto:"
    Leer texto
    texto <- Trim(texto)

    Escribir "Ingrese el carácter a contar:"
    Leer caracterBuscar

    // Inicializar contador
    totalApariciones <- 0

    // Recorrer cada carácter
    Para i <- 1 Hasta Longitud(texto) Con Paso 1
        Si Subcadena(texto, i, i) = caracterBuscar Entonces
            totalApariciones <- totalApariciones + 1
        FinSi
    FinPara

    // Salida
    mensajeFinal <- "La letra '" + caracterBuscar + "' aparece " + totalApariciones + " vez(es)."
    Escribir mensajeFinal
FinProceso

//JAVA SCRIPT
//9.contar apariciones de un caracter elegido
function contarapariciones() {
    let texto = prompt("Ingrese un texto:").trim();
    let caracterBuscar = prompt("Ingrese el carácter a contar:");
    let totalApariciones = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracterBuscar) {
            totalApariciones++;
        }
    }

    let mensajeFinal = `La letra '${caracterBuscar}' aparece ${totalApariciones} vez(es).`;
    alert(mensajeFinal);
    console.log(mensajeFinal);
}

contarapariciones();



//-------------------------------------------------------------------------
//PSeint
Proceso DividirOracion
    Definir oracion, mensajeFinal Como Cadena
    Definir palabras Como Cadena[100] // Arreglo para almacenar palabras
    Definir i, cantidadPalabras Como Entero

    // Entrada
    Escribir "Ingrese una oración:"
    Leer oracion
    oracion <- Trim(oracion)

    // Dividir oración en palabras
    palabras <- Split(oracion, " ")  // Split devuelve un arreglo de palabras
    cantidadPalabras <- Dimension(palabras)

    // Construir mensaje final
    mensajeFinal <- "Las palabras de la oración son:" + SaltodeLinea
    Para i <- 1 Hasta cantidadPalabras Con Paso 1
        mensajeFinal <- mensajeFinal + palabras[i] + SaltodeLinea
    FinPara

    // Salida
    Escribir mensajeFinal
FinProceso

//JAVA SCRIPT
//10.dividir oracion en palabras
function dividiroracion() {
    let oracion = prompt("Ingrese una oración:").trim();
    let palabras = oracion.split(" ");
    let mensajeFinal = "Las palabras de la oración son:\n";

    for (let i = 0; i < palabras.length; i++) {
        mensajeFinal += palabras[i] + "\n";
    }

    alert(mensajeFinal);
    console.log(mensajeFinal);
}

dividiroracion();


//-------------------------------------------------------------------------

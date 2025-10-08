//PSeint
Proceso PromedioArreglo
    Definir n, i, num, suma, promedio Como Real

    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    suma <- 0
    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, ":"
        Leer num
        suma <- suma + num
    FinPara

    promedio <- suma / n

    Escribir "El promedio es: ", promedio
FinProceso

//JAVA SACRIPT
//17 promedio de numeros en un arreglo
function promedioarreglo() {
let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));

// Declaramos el arreglo vacío
let numeros = [];

// Ingresamos los valores del arreglo
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(num);
}

// Calculamos la suma de los números
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

// Calculamos el promedio
let promedio = suma / numeros.length;

// Mostramos el resultado
console.log(`El promedio es ${promedio}.`);
}
promedioarreglo()

//------------------------------------------------------------------------
//PSeint
Proceso ContarImpares
    Definir n, i, num, contador Como Entero

    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    contador <- 0
    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, ":"
        Leer num
        Si num % 2 <> 0 Entonces
            contador <- contador + 1
        FinSi
    FinPara

    Escribir "Cantidad de impares: ", contador
FinProceso

//JAVA SCRIPT
//18.contar impares de un arreglo
function contarImpares() {
    // Pedimos la cantidad de números
    let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));
    let numeros = [];

    // Ingresamos los números en el arreglo
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);
    }

    // Contamos los números impares
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            contador++;
        }
    }

    // Mostramos el resultado
    console.log(`Cantidad de impares: ${contador}`);
}

contarImpares();

//-----------------------------------------------------------------------
//PSeint
Proceso MayoresDeEdad
    Definir n, i, edad, contador Como Entero

    Escribir "Ingrese la cantidad de edades en el arreglo:"
    Leer n

    contador <- 0
    Para i <- 1 Hasta n
        Escribir "Ingrese la edad ", i, ":"
        Leer edad
        Si edad >= 18 Entonces
            contador <- contador + 1
        FinSi
    FinPara

    Escribir "Mayores de edad: ", contador
FinProceso

//JAVA SCRIPT
//19.mayores de edad en un arreglo
function mayoresDeEdad() {
    // Pedimos la cantidad de números (edades)
    let n = parseInt(prompt("Ingrese la cantidad de edades en el arreglo:"));
    let edades = [];

    // Ingresamos las edades
    for (let i = 0; i < n; i++) {
        let edad = parseInt(prompt(`Ingrese la edad ${i + 1}:`));
        edades.push(edad);
    }

    // Contamos cuántos son mayores o iguales a 18
    let contador = 0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            contador++;
        }
    }

    // Mostramos el resultado
    console.log(`Mayores de edad: ${contador}`);
}

mayoresDeEdad();

//-----------------------------------------------------------------------
//PSeint
Proceso BuscarValor
    Definir n, i, num, valor Como Entero
    Definir encontrado Como Logico

    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    encontrado <- Falso

    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, ":"
        Leer num
        Si num = valor Entonces
            encontrado <- Verdadero
        FinSi
    FinPara

    Escribir "Ingrese el valor a buscar en el arreglo:"
    Leer valor

    encontrado <- Falso
    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, ":"
        Leer num
        Si num = valor Entonces
            encontrado <- Verdadero
        FinSi
    FinPara

    Si encontrado Entonces
        Escribir "El valor ", valor, " sí existe en el arreglo."
    Sino
        Escribir "El valor ", valor, " no existe en el arreglo."
    FinSi
FinProceso

//JAVA SCRIPT
//20.buscar valor en un arreglo
function buscarValor() {
    // Pedimos la cantidad de números
    let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));
    let numeros = [];

    // Ingresamos los números en el arreglo
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);
    }

    // Pedimos el valor a buscar
    let valor = parseInt(prompt("Ingrese el valor a buscar en el arreglo:"));

    // Verificamos si existe el valor en el arreglo
    let encontrado = false;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valor) {
            encontrado = true;
            break;
        }
    }

    // Mostramos el resultado
    if (encontrado) {
        console.log(`El valor ${valor} sí existe en el arreglo.`);
    } else {
        console.log(`El valor ${valor} no existe en el arreglo.`);
    }
}

buscarValor();

//------------------------------------------------------------------------
//PSeint
Proceso ConcatenarPalabras
    Definir n, i Como Entero
    Definir palabra, resultado Como Cadena

    Escribir "Ingrese la cantidad de palabras en el arreglo:"
    Leer n

    resultado <- ""

    Para i <- 1 Hasta n
        Escribir "Ingrese la palabra ", i, ":"
        Leer palabra
        resultado <- resultado + palabra
        Si i < n Entonces
            resultado <- resultado + " "
        FinSi
    FinPara

    Escribir "Resultado concatenado: ", resultado
FinProceso

//JAVA SCRIPT
//21.concatenar palabras en un arreglo
function concatenarPalabras() {
    // Pedimos la cantidad de palabras
    let n = parseInt(prompt("Ingrese la cantidad de palabras en el arreglo:"));
    let palabras = [];

    // Ingresamos las palabras en el arreglo
    for (let i = 0; i < n; i++) {
        let palabra = prompt(`Ingrese la palabra ${i + 1}:`);
        palabras.push(palabra);
    }

    // Concatenamos las palabras con espacios
    let resultado = palabras.join(" ");

    // Mostramos el resultado
    console.log(resultado);
}

concatenarPalabras();

//-------------------------------------------------------------------------
//PSeint
Proceso CuboElementos
    Definir n, i Como Entero
    Definir num, cubo Como Real

    Escribir "Ingrese la cantidad de números:"
    Leer n

    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, ":"
        Leer num
        cubo <- num ^ 3
        Escribir "El cubo de ", num, " es: ", cubo
    FinPara
FinProceso

//JAVA SCRIPt
//22.cubo de elementos de un arreglo
function cuboElementos() {
    // Pedimos la cantidad de números
    let n = parseInt(prompt("Ingrese la cantidad de números en el arreglo:"));
    let numeros = [];

    // Ingresamos los números en el arreglo
    for (let i = 0; i < n; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);
    }

    // Calculamos el cubo de cada número
    let cubos = [];
    for (let i = 0; i < numeros.length; i++) {
        cubos.push(Math.pow(numeros[i], 3));
    }

    // Mostramos el resultado
    console.log(`Cubo de los elementos: [${cubos.join(", ")}]`);
}

cuboElementos();

//------------------------------------------------------------------------
//PSeint
Proceso TablaDeMultiplicar
    Definir n, i, j, num Como Entero
    Dimension numeros[100]
    
    Escribir "Ingrese la cantidad de números para generar tablas:"
    Leer n

    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, ":"
        Leer numeros[i]
    FinPara

    Para i <- 1 Hasta n
        num <- numeros[i]
        Escribir "Tabla de ", num, ":"
        Para j <- 1 Hasta 10
            Escribir num, " x ", j, " = ", num * j
        FinPara
        Escribir ""  // línea en blanco entre tablas
    FinPara
FinProceso

//JAVA SCRIPT
//23.tabla de multiplicar de elementos
function tablaMultiplicar() {
    // Pedimos la cantidad de números
    let n = parseInt(prompt("Ingrese la cantidad de números para generar tablas:"));
    let numeros = [];

    // Ingresamos los números en el arreglo
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);
    }

    // Generamos la tabla de multiplicar para cada número
    for (let i = 0; i < numeros.length; i++) {
        let num = numeros[i];
        let tabla = [];
        for (let j = 1; j <= 10; j++) {
            tabla.push(num * j);
        }
        console.log(`Tabla de ${num}: ${tabla.join(", ")}`);
    }
}

tablaMultiplicar();

//---------------------------------------------------------------------------
//PSeint
Proceso FactorialDeArreglo
    Definir n, i, j, factorial Como Entero
    Dimension numeros[100], factoriales[100]
    
    Escribir "Ingrese la cantidad de números en el arreglo:"
    Leer n

    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, ":"
        Leer numeros[i]
    FinPara

    Para i <- 1 Hasta n
        factorial <- 1
        Para j <- 1 Hasta numeros[i]
            factorial <- factorial * j
        FinPara
        factoriales[i] <- factorial
    FinPara

    Escribir "Factoriales:"
    Para i <- 1 Hasta n
        Escribir "El factorial de ", numeros[i], " es ", factoriales[i]
    FinPara
FinProceso

//JAVA SCRIPT
//24.factorial de cada numero en un arreglo
function factorialArreglo() {
    // Pedimos la cantidad de números
    let n = parseInt(prompt("Ingrese la cantidad de números en el arreglo:"));
    let numeros = [];

    // Ingresamos los números en el arreglo
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);
    }

    // Calculamos el factorial de cada número
    let factoriales = [];
    for (let i = 0; i < numeros.length; i++) {
        let factorial = 1;
        for (let j = 1; j <= numeros[i]; j++) {
            factorial *= j;
        }
        factoriales.push(factorial);
    }

    // Mostramos el resultado
    console.log(`Factoriales: [${factoriales.join(", ")}]`);
}

factorialArreglo();

//------------------------------------------------------------------------
//PSeint
Proceso CopiarPares
    Definir n, i Como Entero
    Dimension numeros[100], pares[100]
    
    Escribir "Ingrese la cantidad de números en el arreglo:"
    Leer n

    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, ":"
        Leer numeros[i]
    FinPara

    Definir contadorPares Como Entero
    contadorPares <- 0

    Para i <- 1 Hasta n
        Si numeros[i] % 2 = 0 Entonces
            contadorPares <- contadorPares + 1
            pares[contadorPares] <- numeros[i]
        FinSi
    FinPara

    Escribir "Números pares:"
    Para i <- 1 Hasta contadorPares
        Escribir pares[i]
    FinPara
FinProceso

//JAVA SCRIPT
//25.copiar pares a otro arreglo
function copiarPares() {
    // Pedimos la cantidad de números
    let n = parseInt(prompt("Ingrese la cantidad de números en el arreglo:"));
    let numeros = [];

    // Ingresamos los números en el arreglo
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);
    }

    // Creamos un nuevo arreglo con los números pares
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    // Mostramos el resultado
    console.log(`Números pares: [${pares.join(", ")}]`);
}

copiarPares();

//------------------------------------------------------------------------
//PSeint
Proceso SumarArreglos
    Definir n, i Como Entero
    Dimension A[100], B[100], C[100]
    
    Escribir "Ingrese la cantidad de elementos de los arreglos:"
    Leer n

    Escribir "=== Ingreso de elementos para el arreglo A ==="
    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, " del arreglo A:"
        Leer A[i]
    FinPara

    Escribir "=== Ingreso de elementos para el arreglo B ==="
    Para i <- 1 Hasta n
        Escribir "Ingrese el número ", i, " del arreglo B:"
        Leer B[i]
    FinPara

    Para i <- 1 Hasta n
        C[i] <- A[i] + B[i]
    FinPara

    Escribir "Arreglo C (suma de A y B):"
    Para i <- 1 Hasta n
        Escribir "C[", i, "] = ", C[i]
    FinPara
FinProceso

//JAVA SCRIPT
//26.suma de dos arreglos en un tercer arreglo
function sumarArreglos() {
    // Pedimos la cantidad de elementos de los arreglos
    let n = parseInt(prompt("Ingrese la cantidad de elementos de los arreglos:"));
    let A = [];
    let B = [];

    // Ingresamos los valores para el arreglo A
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1} del arreglo A:`));
        A.push(num);
    }

    // Ingresamos los valores para el arreglo B
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1} del arreglo B:`));
        B.push(num);
    }

    // Sumamos los arreglos elemento a elemento
    let C = [];
    for (let i = 0; i < n; i++) {
        C.push(A[i] + B[i]);
    }

    // Mostramos el resultado
    console.log(`Arreglo C (suma de A y B): [${C.join(", ")}]`);
}

sumarArreglos();


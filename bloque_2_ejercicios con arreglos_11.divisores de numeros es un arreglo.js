//PSEINT
Proceso DivisoresDeUnNumero
    Definir n, i, j, num Como Entero
    Definir numeros[100] Como Entero // Arreglo de hasta 100 números
    Definir divisores Como Cadena

    // Pedir cantidad de números
    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    // Pedir los números
    Para i <- 1 Hasta n Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer num
        numeros[i] <- num
    FinPara

    // Calcular divisores
    Para i <- 1 Hasta n Con Paso 1
        num <- numeros[i]
        divisores <- ""
        Para j <- 1 Hasta num Con Paso 1
            Si num % j = 0 Entonces
                Si divisores = "" Entonces
                    divisores <- ConvertirATexto(j)
                Sino
                    divisores <- divisores + ", " + ConvertirATexto(j)
                FinSi
            FinSi
        FinPara
        Escribir "Divisores de ", num, ": ", divisores
    FinPara
FinProceso

//JAVA SCRIPT
//11.calcular divisores
function divisoresdeunnumero() {
// Pedimos al usuario la cantidad de números
let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));

// Declaramos el arreglo vacío
let numeros = [];

// Pedimos los números y los guardamos en el arreglo
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(num);
}

// Calculamos y mostramos los divisores de cada número
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    let divisores = [];

    for (let j = 1; j <= num; j++) {
        if (num % j === 0) {
            divisores.push(j);
        }
    }

    console.log(`Divisores de ${num}: ${divisores.join(", ")}`);
}
}
divisoresdeunnumero()

//----------------------------------------------------------------------
//PSeint
Proceso SumaDeDivisores
    Definir n, i, j, num, sumaDivisores Como Entero
    Definir numeros[100] Como Entero // Arreglo de hasta 100 números

    // Entrada de datos
    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    // Ingresar los valores
    Para i <- 1 Hasta n Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer num
        numeros[i] <- num
    FinPara

    // Calcular suma de divisores de cada número
    Para i <- 1 Hasta n Con Paso 1
        num <- numeros[i]
        sumaDivisores <- 0
        Para j <- 1 Hasta num Con Paso 1
            Si num % j = 0 Entonces
                sumaDivisores <- sumaDivisores + j
            FinSi
        FinPara
        Escribir "Suma divisores de ", num, " = ", sumaDivisores
    FinPara
FinProceso

//JAVA SCRIPT
//12.suma de divisores de un arreglo
function sumadedivisores() {
let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));

// Declaramos el arreglo vacío
let numeros = [];

// Ingresamos los valores del arreglo
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(num);
}

// Calculamos la suma de divisores de cada número
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    let sumaDivisores = 0;

    // Buscamos los divisores y sumamos
    for (let j = 1; j <= num; j++) {
        if (num % j === 0) {
            sumaDivisores += j;
        }
    }

    // Mostramos el resultado
    console.log(`Suma divisores de ${num} = ${sumaDivisores}`);
}
}
sumadedivisores()

//----------------------------------------------------------------------
//PSeint
Proceso NumerosPerfectos
    Definir n, i, j, num, sumaDivisores Como Entero
    Definir numeros[100], perfectos[100] Como Entero
    Definir cantidadPerfectos Como Entero

    cantidadPerfectos <- 0

    // Entrada de datos
    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    Para i <- 1 Hasta n Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer num
        numeros[i] <- num
    FinPara

    // Buscar números perfectos
    Para i <- 1 Hasta n Con Paso 1
        num <- numeros[i]
        sumaDivisores <- 0
        Para j <- 1 Hasta num - 1 Con Paso 1
            Si num % j = 0 Entonces
                sumaDivisores <- sumaDivisores + j
            FinSi
        FinPara

        Si sumaDivisores = num Entonces
            cantidadPerfectos <- cantidadPerfectos + 1
            perfectos[cantidadPerfectos] <- num
        FinSi
    FinPara

    // Mostrar resultados
    Si cantidadPerfectos > 0 En

//JAVA SCRIPT
//13.numeros perfectos en un arreglo
function numerosperfectos() {
let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));

// Declaramos el arreglo vacío
let numeros = [];

// Ingresamos los valores del arreglo
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(num);
}

// Arreglo para guardar los números perfectos
let perfectos = [];

// Recorremos cada número del arreglo
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    let sumaDivisores = 0;

    // Sumamos los divisores propios (sin incluir el número mismo)
    for (let j = 1; j < num; j++) {
        if (num % j === 0) {
            sumaDivisores += j;
        }
    }

    // Verificamos si es perfecto
    if (sumaDivisores === num) {
        perfectos.push(num);
    }
}

// Mostramos el resultado
if (perfectos.length > 0) {
    console.log(`Números perfectos: ${perfectos.join(", ")}`);
} else {
    console.log("No hay números perfectos en el arreglo.");
}
}
numerosperfectos()

//-----------------------------------------------------------------------
//PSeint
Proceso NumerosPrimos
    Definir n, i, j, num Como Entero
    Definir numeros[100], primos[100] Como Entero
    Definir cantidadPrimos Como Entero
    cantidadPrimos <- 0

    // Entrada de datos
    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    Para i <- 1 Hasta n Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer num
        numeros[i] <- num
    FinPara

    // Buscar números primos
    Para i <- 1 Hasta n Con Paso 1
        num <- numeros[i]
        esPrimo <- Verdadero

        Si num < 2 Entonces
            esPrimo <- Falso
        Sino
            Para j <- 2 Hasta Raiz(num) Con Paso 1
                Si num % j = 0 Entonces
                    esPrimo <- Falso
                    Salir // rompe el bucle
                FinSi
            FinPara
        FinSi

        Si esPrimo Entonces
            cantidadPrimos <- cantidadPrimos + 1
            primos[cantidadPrimos] <- num
        FinSi
    FinPara

    // Mostrar resultados
    Si cantidadPrimos > 0 Entonces
        Escribir "Números primos: "
        Para i <- 1 Hasta cantidadPrimos Con Paso 1
            Escribir primos[i]
        FinPara
    Sino
        Escribir "No hay números primos en el arreglo."
    FinSi
FinProceso

//JAVA SCRIPT
//14.numeros primos de un arreglo
function numerosprimos() {
let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));

// Declaramos el arreglo vacío
let numeros = [];

// Ingresamos los valores del arreglo
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(num);
}

// Arreglo para guardar los números primos
let primos = [];

// Recorremos cada número del arreglo
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    let esPrimo = true;

    // Excluimos los números menores que 2
    if (num < 2) {
        esPrimo = false;
    } else {
        // Verificamos si tiene algún divisor aparte de 1 y él mismo
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    // Si es primo, lo agregamos al arreglo
    if (esPrimo) {
        primos.push(num);
    }
}

// Mostramos el resultado
if (primos.length > 0) {
    console.log(`Números primos: ${primos.join(", ")}`);
} else {
    console.log("No hay números primos en el arreglo.");
}
}

//-----------------------------------------------------------------------
//PSeint
Proceso FactorialDeArreglo
    Definir n, i, j, num, factorial Como Entero
    Definir numeros[100] Como Entero

    // Pedir cantidad de números
    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    // Ingresar los números
    Para i <- 1 Hasta n Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer num
        numeros[i] <- num
    FinPara

    // Calcular factorial de cada número
    Para i <- 1 Hasta n Con Paso 1
        num <- numeros[i]
        factorial <- 1
        Para j <- 1 Hasta num Con Paso 1
            factorial <- factorial * j
        FinPara
        Escribir num, "! = ", factorial
    FinPara
FinProceso

//JAVA SCRIPT
//15.factorial de numeros en uun arreglo
function factorialdearreglo() {
let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));

// Declaramos el arreglo vacío
let numeros = [];

// Ingresamos los valores del arreglo
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(num);
}

// Calculamos el factorial de cada número
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    let factorial = 1;

    for (let j = 1; j <= num; j++) {
        factorial *= j;
    }

    console.log(`${num}! = ${factorial}`);
}
}

//------------------------------------------------------------------------
//PSeint
Proceso InvertirNumeros
    Definir n, i, num, invertido Como Entero
    Definir numeros[100], invertidos[100] Como Entero
    Definir digitos, invertidoTexto Como Cadena

    // Pedir cantidad de números
    Escribir "Ingrese la cantidad de números del arreglo:"
    Leer n

    // Ingresar números
    Para i <- 1 Hasta n Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer num
        numeros[i] <- num
    FinPara

    // Invertir los números
    Para i <- 1 Hasta n Con Paso 1
        num <- numeros[i]
        digitos <- ConvertirATexto(num)
        invertidoTexto <- ""
        Para j <- Longitud(digitos) Hasta 1 Con Paso -1
            invertidoTexto <- invertidoTexto + Subcadena(digitos, j, j)
        FinPara
        invertidos[i] <- ConvertirANumero(invertidoTexto)
    FinPara

    // Mostrar resultados
    Escribir "Números invertidos:"
    Para i <- 1 Hasta n Con Paso 1
        Escribir invertidos[i]
    FinPara
FinProceso

//JAVA SCRIPT
//16.invertir numeros de un arreglo
function invertirnumeros() {
let n = parseInt(prompt("Ingrese la cantidad de números del arreglo:"));

// Declaramos el arreglo vacío
let numeros = [];

// Ingresamos los valores del arreglo
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(num);
}

// Arreglo para guardar los números invertidos
let invertidos = [];

// Recorremos el arreglo y los invertimos
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];

    // Convertimos a string, dividimos, invertimos y unimos
    let invertido = parseInt(num.toString().split('').reverse().join(''));

    invertidos.push(invertido);
}

// Mostramos el resultado
console.log(`Números invertidos: [${invertidos.join(", ")}]`);
}
invertirnumeros()


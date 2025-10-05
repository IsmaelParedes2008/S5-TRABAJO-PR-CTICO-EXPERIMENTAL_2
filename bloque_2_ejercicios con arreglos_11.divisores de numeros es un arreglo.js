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

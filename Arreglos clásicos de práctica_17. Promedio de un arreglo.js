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

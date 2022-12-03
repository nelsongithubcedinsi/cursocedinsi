'use strict'
//Unidad 7 Ejercicios Segunda semana JavaScript
//Favor descomentar de uno en uno cada ejercicio y ejecutar el index.html para verlo funcionar

/*Ejercicio 1
Realizar un programa que permita generar 100 números e imprimir solo los número pares

let numeros = 0;
for (let itera=0; itera<100; itera++){
  //Se parsea a Int para poder observar el comportamiento del programa
  numeros = parseInt((Math.random() * 5) + 1); 
  //console.log("El número es:",numeros);
  if (numeros % 2 == 0){
    console.log("Es número par:",numeros);
  }
}
*/

/*Ejercicio 2

Realizar un programa que permita sumar los 150 primero números

let numeros150 = 0;
let suma150numeros = 0;
for (let iter = 1; iter <=150; iter++){
  suma150numeros += iter;
}

console.log("La suma de los primeros 150 números es:", suma150numeros);
*/


/*Ejercicio 3
Leer 10 precios de productos y calcular cuánto cuestan los 10 productos

let precios = [];
let sumaprecios = 0;
for (let iter=0;iter<10; iter++){
    precios[iter]= parseFloat(prompt("Digite el precio:"));
    sumaprecios += precios[iter];
}
console.log("Los precios suministrados son:", precios);
console.log("La suma de los precios es:",sumaprecios);
*/


/*Ejercicio 4
Leer 12 notas de estudiantes y determinara cuántas aprobó y cuántas reprobó
dado a un rango de 0 a 10, reprueba cuando la nota está entre 0 y 5


let aprobo = 0;
let reprobo = 0;
let notas = [];

console.log("Digite las 12 notas del estudiante:");
let itera = 0;
while (itera <12){
  let nota = 0.0;
  nota= parseFloat(prompt(`Digite la nota número ${itera+1}: `));
  if (nota <0 || nota>10){
    console.log("La nota que digitó No es válida, vuelva a digitarla");
  }else if(nota>=0 && nota<=5){
      notas.push(nota);
      reprobo += 1;
      itera += 1;
    }  else if(nota>5 && nota<=10) {
      notas.push(nota);
      aprobo += 1;
      itera += 1;
    }
}

console.log("las notas fueron:");
console.log(notas);
console.log("De las 12 notas aprobó", aprobo, " y reprobó ",reprobo);
*/

/*Ejercicio 5
Leer los primeros 50 números y contar cuántos múltiplos de 3 hay, imprimir la cantidad


let cuantosMultiplosDe3 = 0;
let numeros = [];
console.log("Debes digitar 50 números")
for (let itera = 0; itera<50; itera++){
   let numero =0.0;
   numero = parseFloat(prompt(`Digita un número (van ${itera +1} números: )`));
   if (numero % 3 == 0){ 
    cuantosMultiplosDe3 += 1;
   }
   numeros.push(numero);
}

console.log("los números digitados fueron: ");
console.log(numeros);
console.log(`De esos números hay ${cuantosMultiplosDe3} múltiplo(s) de 3`);
*/

/*Ejercicio 6
Leer n cantidad de notas de un estudiante e imprimir por pantalla

let cuantasNotas = 0;
let notas = [];
do{
cuantasNotas=parseInt(prompt("Cuántas notas va a digitar (Si es una cantidad inválida le continuaré preguntando):"));
}while (cuantasNotas<1);

let itera = 0;
while (itera <cuantasNotas){
  let nota = 0.0;
  nota= parseFloat(prompt(`Digite la nota número ${itera+1}: `));
  if (nota <0 || nota>10){
    console.log("La nota que digitó No es válida, vuelva a digitarla");
  }else if(nota>=0 && nota<=5){
      notas.push(nota);
      itera += 1;
    }  else if(nota>5 && nota<=10) {
      notas.push(nota);
      itera += 1;
    }
}

console.log("las notas fueron:");
console.log(notas);

*/

/*Ejercicio  7 

Leer n cantidad de número y determinar cantidad de impares, imprimir cantidad de impares

let cantidadNumeros = 0;
do{
cantidadNumeros = parseInt(prompt("Digite la cantidad de números a ingresar: "));
}while (cantidadNumeros < 0);

let numerosDigitados = [];
let cantidadImpares = 0;
let numero = 0;
for(let itera=0; itera< cantidadNumeros; itera++){
  numero = parseInt(prompt(`Digita el número (van ${itera} numero(s)):`));
  numerosDigitados.push(numero);
  if(numero % 2 == 1){
    cantidadImpares += 1;
  }
}
console.log(`los números ${cantidadNumeros} digitados son:`);
console.log(numerosDigitados);
console.log(`Se digitaron ${cantidadImpares} números impares`);
*/

/* Ejercicio 8
Leer n cantidad de sueldos de empleados y determianar el sueldo más bajo, imprimir los sueldos y el sueldo más bajo

let cantidadSueldos = 0;
do{
cantidadSueldos = parseInt(prompt("Digite la cantidad de sueldos a ingresar: "));
}while (cantidadSueldos < 0);

let sueldosDigitados = [];
let menorSueldo = 0;
let sueldo = 0;
for(let itera=0; itera< cantidadSueldos; itera++){
  sueldo = parseInt(prompt(`Digita el sueldo (número ${itera + 1}) :`));
  sueldosDigitados.push(sueldo);
  if(itera == 0){
    menorSueldo = sueldo;
  } else if(sueldo < menorSueldo) {
    menorSueldo = sueldo;
  }
}
console.log(`los ${cantidadSueldos} sueldo(s) digitado(s) son:`);
console.log(sueldosDigitados);
console.log(`El menor sueldo de todos es ${menorSueldo} `);
*/

/* Ejercicio 9
Realizar un programa que pida la base, el exponente y se ecute el cálculo sin uso de bibliotecas


let base = 0.0;
let exponente = 0;
let resultado = 0.0;
 base = parseInt(prompt("Digite la base : "));
do{
  exponente = parseInt(prompt("Digite el exponente (debe ser entero positivo): "));
  }while (exponente < 0);

if(exponente == 0){
   resultado = 1;
}  else {
  resultado = 1;
  for (let itera=0; itera<exponente; itera++){
    resultado *= base;
  }
}

console.log(`El resultado de elevar ${base} al exponente ${exponente} es: ${resultado}`);

*/

/*Ejercicio 10
Llenar un arreglo de tamaño n y los elemntos sean 1 y 0 alternado e imprimir por consola

let numeros=[];
let cantidad = 0;
do{
  cantidad = parseInt(prompt("Digite la cantidad de elementos en el arreglo (debe ser entero positivo mayor a cero): "));
  }while (cantidad <= 0);
  
  for(let itera=1; itera <= cantidad; itera++ ){
    numeros.push(itera % 2);
  }

  console.log("El contenido del arrego es");
  console.log(numeros);
*/

/*Ejercicio 11
Llenar un arreglo de tamaño n, este tamaño debe ser impar y el contenido del arrglo deben ser los números pares partiendo de 2

let numeros=[];
let cantidad = 0;
do{
  cantidad = parseInt(prompt("Digite la cantidad de elementos en el arreglo (debe ser entero positivo mayor a cero e impar): "));
  }while (cantidad <= 0 || cantidad % 2 == 0);
  
  for(let itera=1; itera <= cantidad; itera++ ){
    numeros.push(itera * 2);
  }

  console.log("El contenido del arrego es");
  console.log(numeros);
*/

/*Ejercicio 12
Llenar un arreglo con los 100 primeros números de la sucesión de Fibonacci


let Fibonacci = [0,1];
let elementoSucesion = 0;
for(let itera = 2; itera < 100; itera ++){
 elementoSucesion = Fibonacci[itera - 2] + Fibonacci[itera -1];
 Fibonacci.push(elementoSucesion);
}
console.log("Los primeros 100 números de la sucesión de Fibonacci son:");
console.log(Fibonacci);

*/

/*Ejercicio 13
Llenar un arreglo con los primeros 100 números pares y muestre la suma de los elementos del arreglo;

let numeros=[];
let sumaPares = 0;
for(let itera=1; itera <= 100; itera++ ){
  numeros.push(itera * 2);
  sumaPares += (itera * 2);
}

  console.log("El contenido del arrego es");
  console.log(numeros);
  console.log("La suma de los primeros 100 números pares es: ", sumaPares);
*/

/*Ejercicio 14
Llenar un arreglo de tamaño n que se llene con números ingresados por el usuario y determine la candida de positivos y la de negativos


let numeros=[];
let cantidad = 0;
let numero = 0;
let cantidadPositivos = 0;
let cantidadNegativos = 0;
let cantidadCeros = 0;
do{
  cantidad = parseInt(prompt("Digite la cantidad de elementos en el arreglo (debe ser entero positivo mayor a cero): "));
  }while (cantidad <= 0);
  
  for(let itera=1; itera <= cantidad; itera++ ){
    numero = parseInt(prompt(`Digita el número (van ${itera} numero(s)):`));
    numeros.push(numero);
    if(numero > 0){
      cantidadPositivos += 1;
    } else if (numero < 0){
      cantidadNegativos += 1;
    } else {
      cantidadCeros += 1;
    }
  }

  console.log("El contenido del arrego es");
  console.log(numeros);
  console.log(`Entre los números digitados hay ${cantidadPositivos} números positivos `);
  console.log(`Entre los números digitados hay ${cantidadNegativos} números negativos `);
  console.log(`Entre los números digitados hay ${cantidadCeros} que son cero `);



*/







'use strict'
//Ejercicio unidad 6  primera semana JavaScript
//Favor descomentar de uno en uno cada ejercicio y ejecutar el index.html para verlo funcionar

/*
Ejercicio 1 
 litro en centilitros   1L  = 100 cl
 litro en decilitro     1L  = 10 dl
 litro en galones (USA) 1L  = 0.264172 Gl
 litro en onza (USA)    1L  = 33.814 oz


let factorCentilitros = 100;
let factorDecilitros = 10;
let factorGalones = 0.264172;
let factorOnzas = 33.814;

let litros = parseFloat(prompt("Digite la cantidad de litros a convertir: "));

let centilitros = litros*factorCentilitros;
let decilitros = litros*factorDecilitros;
let galones = litros*factorGalones;
let onzas = litros*factorOnzas;

console.log(`La cantidad de ${litros} litros equivale a ${centilitros} centilitros`);
console.log(`La cantidad de ${litros} litros equivale a ${decilitros} decilitros`);
console.log(`La cantidad de ${litros} litros equivale a ${galones} galones`);
console.log(`La cantidad de ${litros} litros equivale a ${onzas} onzas`);
*/




/* Ejercicio 2 
 Algoritmo que realice las 4 operaciones básicas para dos números de entrada

 let numero1 = 0.0;
 let numero2 = 0.0;
 numero1 = parseFloat(prompt("Digite el primer número:"));
 numero2 = parseFloat(prompt("Digite el segundo número:"));

 let suma = 0; 
 suma = numero1 + numero2;
 let resta = numero1 - numero2;
 let multiplicacion = numero1 * numero2;


 console.log(`La suma de ${numero1} + ${numero2} es: ${suma}`);
 console.log(`La resta de ${numero1} - ${numero2} es: ${resta}`);
 console.log(`La multiplicación de ${numero1} * ${numero2} es: ${multiplicacion}`);
 if (numero2 != 0) { 
    let division = numero1 / numero2;
    console.log(`La división de ${numero1} / ${numero2} es: ${division}`);
 }else {
   console.log(`No se puede dividir por cero`);
 }
 
*/


/* Ejercicio 3 
 Algoritmo que converte grados centrígrados en Fahrenheit y viceversa
 //  C = (F-32)*5/9 
let centigrados = 0.0;
let Fahrenheit = 0.0;
centigrados  = parseFloat(prompt("Digite los grados centígrados a convertir a grados Fahrenheit"));
Fahrenheit= parseFloat(prompt("Digite los grados Fahrenheit a convertir en centígrados"));
 
let centigradosaFahrenheit = (centigrados* 9/5 )+ 32;
let Fahrenheitacentigrados = (Fahrenheit - 32)* 5/9;

console.log(`Los grados ${centigrados} centígrados  equivalen a ${centigradosaFahrenheit} Fahrenheit`);
console.log(`Los grados ${Fahrenheit} Fahrenheit  equivalen a ${Fahrenheitacentigrados} Centígrados`);
*/




/* Ejercicio 4
 Algoritmo que calcula el valor a pagar por galones de gasolina si sabemos que cada centilitro cuesta 25 pesos. Imprimir el valor a pagar y la  cantidad de gasolina despachada en litros

 let factorGalones = 0.264172;
 let centilitros = 0.0;
 let galones = 0.0
 let litros = 0.0;
 galones = parseFloat(prompt ("Digite la cantidad de galones vendidos: "));
 litros = galones/factorGalones;
 centilitros = litros*100;

 console.log(`La cantidad de galones convertidos en litros vendidos es de ${litros} y su valor es de ${centilitros*25} pesos`);

*/


/* Ejercicio 5
 Calcular el salario de un empleado según los siguientes parámetros
 a. si gana menos de 699.999, descuento de pensión = 2% y más un auxilio de transporte = 6%
 b. Si gana entre 700.000 y 999.999, descuento de pensión = 4%, subsidio familiar = 12.000, sino le pagan el mismo salario
 c. Si gana más del millón descuento de pensión = 6%


let salario = 0.0;
salario = parseFloat(prompt("Digite el salario sin descuentos: "));
let descuentoPension = 0.0;
let auxilioTransporte = 0.0;
let subsidioFamiliar = 0.0;
 if (salario < 699999){
 descuentoPension= salario * 0.02;
 auxilioTransporte = salario * 0.06;
}
  else {
      if (salario > 699999 && salario <= 999999){
        descuentoPension= salario * 0.04;
        subsidioFamiliar= 12000;
      }
      else{
        descuentoPension= salario * 0.06;

      }
  }
 
console.log(`Al ser su salario ${salario} el descuento por pensión es ${descuentoPension},el auxilio de transporte es de ${auxilioTransporte} y el subsidio familiar es de ${subsidioFamiliar}`);

*/

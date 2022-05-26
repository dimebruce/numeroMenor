let num1 = parseFloat(prompt("Ingresa el primer número: ", "Entre el 1 y el 100"));
let num2 = parseFloat(prompt("Ingresa el segundo número: ", "Entre el 1 y el 100"));
let num3 = parseFloat(prompt("Ingresa el tercer número: ", "Entre el 1 y el 100"));
let numeroMenor;

if(num1 <= num2 && num1 <= num3) {
    numeroMenor = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    numeroMenor = num2;
}
else {
    numeroMenor = num3;
}

console.log("El número menor es: " + numeroMenor);
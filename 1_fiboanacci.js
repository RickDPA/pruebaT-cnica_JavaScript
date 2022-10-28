//1.Create an algorithm that displays n number of digits of the fiboanaccinacci series,
// e.g.: input fibo(5), output "0,1,1,2,3".
//Extra if you can do it with recursion

"use strict";

const resultado = [];

const fiboanacci = (valor) => {
    if(valor < 2){
        return valor;
    }else{
        return fiboanacci(valor - 1) + fiboanacci(valor - 2); 
    }
}

const fibo = (veces) => {
    
    for(let i = 0; i<veces;i++){ 
        resultado.push(fiboanacci(i));
    }
    console.log(resultado);
}


//Método para imprimir arreglo
fibo(5);


"use strict";

const ordenar = (arreglo) => {
    
    let bandera = true;
    while(bandera){
        let errores = 0;

        for(let i = 0; i<arreglo.length; i++){
            if(arreglo[i] > arreglo[i+1]){
                let menor = arreglo[i+1];
                
                arreglo[i+1] = arreglo[i];
                arreglo[i] = menor;

                errores += 1;
            } 
        }

        if(errores == 0 ){
            bandera = false;
        }

        errores = 0;

    }
    return arreglo; 
}


const arreglo = [1,4,5,12,7,23,12,12];
console.log(ordenar(arreglo));


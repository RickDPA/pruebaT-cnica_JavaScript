"use strict";
 
let arreglo: string[] = ["Happy BirthDay", "Sorry but not is u BirthDay"];
 
 
const happyBirthDay = (mes, dia, arreglo) => {
    let hoy = new Date();
    let diaActual = hoy.getDate();
    let mesActual = hoy.getMonth() + 1;
 
    if(mes === mesActual && dia === diaActual){
        console.log(arreglo[0]);
    }else{
        console.log(arreglo[1]);
    }
}
 
happyBirthDay(10,28,arreglo);

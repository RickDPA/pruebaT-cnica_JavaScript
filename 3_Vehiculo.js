"use strict";
//------------------ CLASE VEHICULO ----------------------------
class Vehiculo{

    static tipoVehiculo = "vehiculo";
    
    constructor(){
        this.tipo = Vehiculo.tipoVehiculo;
    }

    run (){
        return this.tipo ;
    }

    stop(){
        return this.tipo;
    }
    
    action(){
        return this.tipo;
    }

}

let veh = new Vehiculo();
console.log(veh.run());


//------------------ CLASE CARRO ----------------------------
class Carro extends Vehiculo{

    static tipoVehiculo = "carro";
    constructor(){
        super();
        this.tipo = Carro.tipoVehiculo;
    }

    run(){
        return `El ${super.run()} está arrancando`;
    }

    stop(){
        return `El ${super.stop()} se detiene`;
    }
    
    action(){
        return `El ${super.action()} conduce`;
    }

}

let carro = new Carro();
console.log(carro.run());
console.log(carro.stop());
console.log(carro.action());


//------------------ CLASE AVIÓN ----------------------------
class Avion extends Vehiculo{

    static tipoVehiculo = "avión";
    constructor(){
        super();
        this.tipo = Avion.tipoVehiculo;
    }

    run(){
        return `El ${super.run()} está subiendo`;
    }

    stop(){
        return `El ${super.stop()} está bajando`;
    }
    
    action(){
        return `El ${super.action()} vuela`;
    }

}

let avion = new Avion();
console.log(avion.run());
console.log(avion.stop());
console.log(avion.action());



//------------------ CLASE TREN ----------------------------
class Tren extends Vehiculo{

    static tipoVehiculo = "tren";
    constructor(){
        super();
        this.tipo = Tren.tipoVehiculo;
    }

    run(){
        return `El ${super.run()} está encendiendo`;
    }

    stop(){
        return `El ${super.stop()} está frenando`;
    }
    
    action(){
        return `El ${super.action()} viajando`;
    }

}

let tren = new Tren();
console.log(tren.run());
console.log(tren.stop());
console.log(tren.action());


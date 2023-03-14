// Problema a resolver
//Sistema para la gestion de cuentas bancarias | Datos de clientes | N de cuenta | etc.

/*
    {
        nombreCliente;
        dniCliente;
        numeroCuenta;
        saldoCuenta;
    }
 */


class Clientes{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente{
    numero;
    #saldo;
    agencia;

    constructor(){
        this.numero="";
        this.#saldo=0;
        this.agencia="";
    }

    depositoCuenta(valor){
        
        if (valor > 0)
            this.#saldo += valor;

        return this.#saldo

    }

    retirarCuenta(valor){
        if (valor <= this.#saldo)
        this.#saldo -= valor;

        return this.#saldo;
    }

    consultarSaldo (){
       return this.#saldo; 
    }

}

const cuentaCliente = new cuentaCorriente ();
// cuentaCliente.saldo=0;
let saldo = cuentaCliente.consultarSaldo();
console.log('El saldo actual es '+saldo);


saldo = cuentaCliente.depositoCuenta(100);
console.log("El saldo actual es " + saldo);


saldo = cuentaCliente.retirarCuenta(50);
console.log("El saldo actual es " + saldo); 
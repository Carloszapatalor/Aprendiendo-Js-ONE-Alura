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
import cuentaCorriente from "./cuentaCorriente.js";
import Clientes from "./clientes.js";

const cuentaCliente = new cuentaCorriente ();
// cuentaCliente.saldo=0;
let saldo = cuentaCliente.consultarSaldo();
console.log('El saldo actual es '+saldo);


saldo = cuentaCliente.depositoCuenta(100);
console.log("El saldo actual es " + saldo);


saldo = cuentaCliente.retirarCuenta(50);
console.log("El saldo actual es " + saldo); 
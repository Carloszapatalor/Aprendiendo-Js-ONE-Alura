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

const cliente = new Clientes();
cliente.nombreCliente = "Carlos";
cliente.dniCliente = "12351232";
cliente.rutCliente = "343453454";

const cuentaCliente = new cuentaCorriente ();
cuentaCliente.numero = "1";
cuentaCliente.agencia = "hey";
cuentaCliente.cliente = cliente;

console.log (cuentaCliente);

let saldo = cuentaCliente.consultarSaldo();


saldo = cuentaCliente.depositoCuenta(150);
console.log("El saldo actual de "+ cliente.nombreCliente+ " es de "+saldo);

//----------------------------------------------



const clienta = new Clientes();
clienta.nombreCliente = "Maria";
clienta.dniCliente = "6543452135";
clienta.rutCliente = "23461";

const cuentaClienta = new cuentaCorriente();
cuentaClienta.numero = "2";
cuentaClienta.agencia = "23423432";
cuentaClienta.cliente = cliente;

console.log(cuentaClienta);


cuentaCliente.trasnferirCuenta(100, cuentaClienta);
console.log(cliente.nombreCliente +" transfirió saldo a " + clienta.nombreCliente);
let saldo1 = cuentaCliente.consultarSaldo();
console.log("El saldo actual de " + cliente.nombreCliente + " es de " + saldo1);

let salda = cuentaClienta.consultarSaldo();
console.log("El saldo actual de "+clienta.nombreCliente+ " es de " + salda);
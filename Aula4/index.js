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
    saldo;
    agencia;

    depositoCuenta(valor){
       this.saldo += valor
    }

}

const cliente = new Clientes();
const cuenta = new cuentaCorriente();

cliente.nombreCliente = "Leonardo";
cliente.dniCliente = "1240003332";
cliente.rutCliente="34234234";
cuenta.numero = "1235132536123";
cuenta.saldo= 1000;
cuenta.agencia="hey";

console.log(cliente);
console.log(cuenta.saldo);
cuenta.depositoCuenta(100);
console.log (cuenta.saldo);

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
    numeroCuenta;
    saldoCuenta;
}

const cliente = new Clientes();

cliente.nombreCliente = "Leonardo";
cliente.dniCliente = "1240003332";
cliente.numeroCuenta = "1235132536123";
cliente.saldoCuenta= 1000;

console.log(cliente);

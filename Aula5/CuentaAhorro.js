import Cuenta from "./Cuenta.js";

class CuentaAhorro extends Cuenta {

   constructor(cliente, numero, agencia,saldo) {
        super(cliente, numero,agencia,saldo);
        CuentaCorriente.cantidadCuentas++;
    }
 
}



export default CuentaAhorro;
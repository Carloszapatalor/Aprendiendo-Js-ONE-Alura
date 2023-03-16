import Cuenta from "./Cuenta.js";

class CuentaAhorro extends Cuenta {
  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo);
    CuentaCorriente.cantidadCuentas++;
  }

  retirarDeCuenta(valor) {
    
    
    super._retirarDeCuenta(valor,2);
  }
}



export default CuentaAhorro;
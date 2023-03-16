import Cuenta from "./Cuenta.js"

class CuentaAhorro extends Cuenta {
  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo);
  }

  retirarDeCuenta(valor) { 
    super._retirarDeCuenta(valor,2);
  }
}



export default CuentaAhorro;
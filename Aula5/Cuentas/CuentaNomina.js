import Cuenta from "./Cuenta.js";

class CuentaNomina extends Cuenta {
  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo);
  }

  retirarDeCuenta(valor) {
    super._retirarDeCuenta(valor, 1);
  }
}

export default CuentaNomina;
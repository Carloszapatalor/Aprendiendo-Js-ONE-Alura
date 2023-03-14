class cuentaCorriente {
  numero;
  agencia;
  #saldo;

  constructor() {
    this.cliente = null;
    this.numero = "";
    this.agencia = "";
    this.#saldo = 0;
  }

  depositoCuenta(valor) {
    if (valor > 0) this.#saldo += valor;

    return this.#saldo;
  }

  retirarCuenta(valor) {
    if (valor <= this.#saldo) this.#saldo -= valor;

    return this.#saldo;
  }

  consultarSaldo() {
    return this.#saldo;
  }

  trasnferirCuenta(valor,cuentaDestino){
    this.retirarCuenta(valor);
    cuentaDestino.depositoCuenta(valor);
  }
}

export default cuentaCorriente;
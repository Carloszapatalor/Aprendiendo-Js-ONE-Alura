class cuentaCorriente {
  numero;
  #saldo;
  agencia;

  constructor() {
    this.numero = "";
    this.#saldo = 0;
    this.agencia = "";
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
}

export default cuentaCorriente;
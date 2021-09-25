import { Cuenta } from "./cuenta";

export class Banco {

  cuenta: Cuenta;

  historicoCuentas: Array<Cuenta>;

  constructor() {
    this.historicoCuentas = []
  }

  crearCuenta(estado: boolean, saldo: number) {

    if (this.cuenta) {
      // existe la cuenta
      const nuevaCuenta = new Cuenta(this.cuenta.activa, this.cuenta.saldo, ['account-already-initialized']);
      this.cuenta = nuevaCuenta;
      this.historicoCuentas.push(nuevaCuenta);
      return this.cuenta;
    }

    const cuenta = new Cuenta(estado, saldo);
    this.cuenta = cuenta;
    this.historicoCuentas.push(cuenta);
    return cuenta;
  }

  devolverOperacion() {
    this.cuenta = this.historicoCuentas.pop()
  }

  resultado(cuenta: Cuenta) {
   return {
        'account': {
          'active-card': cuenta.activa,
          'available-limit': cuenta.saldo
        },
        'violations': cuenta.violations
      }
  }

  ejecutarTransaccion(transaccion) {
    if (!this.cuenta) {
      const nuevaCuenta = new Cuenta(undefined, undefined, ["account-not-initialized"]);
      this.cuenta = nuevaCuenta;
      this.historicoCuentas.push(nuevaCuenta);
      return this.cuenta;
    }

    //SALDO DISPONIBLE

    // TRANSACCION DUPLICADA

  }

}
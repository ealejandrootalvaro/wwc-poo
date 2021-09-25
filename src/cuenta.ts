export class Cuenta {

  activa: boolean;
  saldo: number;
  violations: Array<string>

  constructor(activa: boolean, saldo: number, violations: Array<string> = []) {
    this.activa = activa;
    this.saldo = saldo;
    this.violations = violations
  }

}
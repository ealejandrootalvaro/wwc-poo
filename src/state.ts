import { Account } from "./account/account";
import { Operation } from "./operations/operation";

export class State {

  operations: Array<Operation>
  accountStates: Array<Account>
  account : Account;

  constructor() {
    this.operations = [];
    this.accountStates = [];
  }

  step(operation: Operation) {
    this.account = operation.execute();
    this.accountStates.push(this.account);
    this.operations.push(operation);
  }

  devolverEstado() {
    this.account = this.accountStates.pop();
  }

}
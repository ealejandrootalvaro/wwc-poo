import { Account } from './../account/account';
import { ResponseDTO } from './../types';
import { Violation } from "../types";

export abstract class Operation {
  
  data: Account;
  violations: Array<Violation>

  constructor() {
    this.violations = [];
  }

  setData(data : Account) {
    this.data = data;
  }

  abstract execute() : Account;

}
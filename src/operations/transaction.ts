import { Operation } from './operation';
import { Account } from '../account/account';
import { Violation } from '../types';

export class Transaction extends Operation {

  merchant: string;
  amount: number;
  time: string;

  constructor(merchant: string, amount: number, time: string) {
    super();
    this.merchant = merchant;
    this.amount = amount;
    this.time = time;
  }

  execute() {
    if (!this.data) {
      return new Account(undefined, undefined, [Violation.NotInitialized]);
    }

    if (this.data.availableLimit - this.amount < 0) {
      return new Account(this.data.activeCard, this.data.availableLimit, [Violation.InsufficientLimit])
    }

    return new Account(this.data.activeCard, this.data.availableLimit - this.amount, []);
  }

}
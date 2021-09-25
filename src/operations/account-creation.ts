import { Operation } from './operation';
import { Account } from '../account/account';
import { Violation } from '../types';

export class AccountCreation extends Operation {

  account: Account;

  activeCard: boolean;
  availableLimit: number;

  constructor(activeCard: boolean, availableLimit: number) {
    super();
    this.activeCard = activeCard;
    this.availableLimit = availableLimit;
  }

  execute() {

    if (this.data) {
      return new Account(this.data.activeCard, this.data.availableLimit, [Violation.AlreadyInitialized]);
    }

    const account = new Account(this.activeCard, this.availableLimit, []);
  
    return account;
  }

}
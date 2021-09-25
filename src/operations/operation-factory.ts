import { Account } from "../account/account";
import { AccountCreation } from "./account-creation";
import { Operation } from "./operation";
import { Transaction } from "./transaction";

export class OperationFactory {

  static createOperation(operation: any) : Operation {
    if ('account' in operation) {
      return new AccountCreation(operation.account["active-card"], operation.account["available-limit"])
    } else if ('transaction' in operation) {
      return new Transaction(operation.transaction.merchant, operation.transaction.amount, operation.transaction.time);
    }
  }


}
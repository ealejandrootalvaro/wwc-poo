export enum Violation {
  AlreadyInitialized = "account-already-initialized",
  InsufficientLimit = "insufficient-limit",
  NotInitialized = "account-not-initialized"
}

export interface AccountDetail {
  "active-card": boolean
  "available-limit": number;
}

export interface TransactionDetail {
  merchant: string;
  amount: number;
  time: string;
}

export interface AccountCreationDTO {
  account: AccountDetail
}

export interface TransactionDTO {
  transaction: TransactionDetail
}

export interface ResponseDTO {
  account: AccountDetail,
  violations: Array<string>
}
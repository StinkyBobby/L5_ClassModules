import { BankAccount } from "./account.js";

export class SavingsAccount extends BankAccount {
  _interestRate; // процентная ставка

  constructor(balance = 0, ownerName = "Unknown", isActive = true, interestRate = 0) {
    super(balance, ownerName, isActive);
    this._interestRate = interestRate;
  }


  get interestRate() {
    return this._interestRate;
  }

  set interestRate(value) {
    if (typeof value !== "number" || Number.isNaN(value) || value < 0) {
      throw new Error("interestRate должен быть неотрицательным числом");
    }
    this._interestRate = value;
  }


  show() {
    console.log("SavingsAccount:");
    console.log("  ownerName:", this._ownerName);
    console.log("  balance:", this._balance);
    console.log("  isActive:", this._isActive);
    console.log("  interestRate:", this._interestRate);
  }

  delete() {
    super.delete();
    this._interestRate = null;
  }

  copy() {
    return this;
  }

  static clone(account) {
    if (!(account instanceof SavingsAccount)) {
      throw new Error("clone ожидает SavingsAccount");
    }

    return new SavingsAccount(
      account._balance,
      account._ownerName,
      account._isActive,
      account._interestRate
    );
  }
}

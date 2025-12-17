export class BankAccount {
  _balance;
  _ownerName;
  _isActive;

  constructor(balance = 0, ownerName = "Unknown", isActive = true) {
    this._balance = balance;
    this._ownerName = ownerName;
    this._isActive = isActive;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new Error("balance должен быть числом");
    }
    if (value < 0) {
      throw new Error("balance не может быть отрицательным");
    }
    this._balance = value;
  }

  get ownerName() {
    return this._ownerName;
  }

  set ownerName(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("ownerName должен быть непустой строкой");
    }
    this._ownerName = value;
  }

  get isActive() {
    return this._isActive;
  }

  set isActive(value) {
    this._isActive = Boolean(value);
  }

  _freezeAccount() {
    this._isActive = false;
  }


  show() {
    console.log("BankAccount:");
    console.log("  ownerName:", this._ownerName);
    console.log("  balance:", this._balance);
    console.log("  isActive:", this._isActive);
  }

  delete() {
    this._balance = null;
    this._ownerName = null;
    this._isActive = null;

    Object.freeze(this);
  }

  copy() {
    return this;
  }

  static clone(account) {
    if (!(account instanceof BankAccount)) {
      throw new Error("clone ожидает BankAccount");
    }

    return new BankAccount(
      account._balance,
      account._ownerName,
      account._isActive
    );
  }
}

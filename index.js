import { SavingsAccount } from "./savingsAccount.js";

const accounts = [
  new SavingsAccount(5000, "Walter", true, 3.5),
  new SavingsAccount(2000, "Jessie", true, 5.0),
];

accounts[0].show();
accounts[1].show();

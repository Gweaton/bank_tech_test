var Account = function() {
  this.balance = 0;
};

Account.prototype.showBalance = function() {
  return this.balance;
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function(amount) {
  if (this.balance - amount < 0) {
    throw "Sorry, your account has insufficient funds for this transaction.";
  }
  this.balance -= amount;
};

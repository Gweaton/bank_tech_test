var Account = function() {
  this.balance = 0;
  this.transactionHistory = new TransactionHistory();;
};

Account.prototype.showBalance = function() {
  return this.balance.toFixed(2);
};

Account.prototype.deposit = function(amount) {
  var transaction = new Transaction();
  transaction.deposit(amount, this.balance + amount);
  this.balance += amount;
  this.transactionHistory.addTransaction("deposit", amount, this.balance);
};

Account.prototype.withdraw = function(amount) {
  if (this.balance - amount < 0) { throw "Sorry, your account has insufficient funds for this transaction." }
  var transaction = new Transaction();
  transaction.withdraw(amount, this.balance - amount);
  this.balance -= amount;
  this.transactionHistory.addTransaction("withdrawal", amount, this.balance);
};

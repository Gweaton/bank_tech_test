var Transaction = function() {
  this.date = new Date();
  this.credit = 0;
  this.debit = 0;
  this.balance;
}

Transaction.prototype.deposit = function(amount, balance) {
  this.credit += amount;
  this.getBalance(balance);
};

Transaction.prototype.withdraw = function(amount) {
  this.debit += amount;
};

Transaction.prototype.getBalance = function(amount) {
  this.balance = amount;
};

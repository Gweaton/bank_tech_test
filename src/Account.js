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
  this.balance -= amount;
};

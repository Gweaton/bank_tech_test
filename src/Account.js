var Account = function() {
  this.balance = 0;
  this.transactionHistory = [];
};

Account.prototype.showBalance = function() {
  return this.balance;
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
  this.addTransaction(amount, 0);
};

Account.prototype.withdraw = function(amount) {
  if (this.balance - amount < 0) {
    throw "Sorry, your account has insufficient funds for this transaction.";
  }
  this.balance -= amount;
};

Account.prototype.formatDate = function() {
  var today = new Date(),
      day = today.getDate(),
      month = today.getMonth() + 1,
      year = today.getFullYear();

  function format(date) {
    return (date < 10) ? ("0" + date) : date
  };
  return `${format(day)}/${format(month)}/${year}`;
};

Account.prototype.addTransaction = function(credit, debit) {
  this.currentTransaction = {
    date: this.formatDate(),
    credit: credit,
    debit: debit,
    balance: this.balance,
  }
  this.transactionHistory.push(this.currentTransaction);
};

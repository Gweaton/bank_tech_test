var Account = function() {
  this.balance = 0;
  this.transactionHistory = [];
};

Account.prototype.showBalance = function() {
  return this.formatMoney(this.balance);
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
  this.addTransaction(this.formatMoney(amount), "    ");
};

Account.prototype.withdraw = function(amount) {
  if (this.balance - amount < 0) {
    throw "Sorry, your account has insufficient funds for this transaction.";
  }
  this.balance -= amount;
  this.addTransaction("    ", this.formatMoney(amount));
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
    balance: this.showBalance()
  }
  this.transactionHistory.push(this.currentTransaction);
};

Account.prototype.formatMoney = function(amount) {
  return amount.toFixed(2);
};

Account.prototype.formatTransaction = function(transaction) {
  return `${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}\n`
};



Account.prototype.processAccountStatement = function() {
  var statement = ""
  statement += "date       || credit || debit || balance\n"
  for (var i = this.transactionHistory.length -1 ; i >= 0; i-- ) {
    statement += this.formatTransaction(this.transactionHistory[i])
    }
    console.log(statement);
    return(statement);
};

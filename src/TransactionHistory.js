var TransactionHistory = function() {
  this.history = []
};

TransactionHistory.prototype.showHistory = function() {
  return this.history;
};

TransactionHistory.prototype.addTransaction = function(type, amount, balance) {
  if (type === "deposit") {
    this.currentTransaction = {
      date: this.formatDate(),
      credit: this.formatMoney(amount),
      debit: '    ',
      balance: this.formatMoney(balance)
    }
  } else if (type === "withdrawal") {
    this.currentTransaction = {
      date: this.formatDate(),
      credit: '    ',
      debit: this.formatMoney(amount),
      balance: this.formatMoney(balance)
    }
  }
  this.history.push(this.currentTransaction);
}

TransactionHistory.prototype.formatDate = function() {
  var today = new Date(),
      day = today.getDate(),
      month = today.getMonth() + 1,
      year = today.getFullYear();

  function format(date) {
    return (date < 10) ? ("0" + date) : date
  };
  return `${format(day)}/${format(month)}/${year}`;
};

TransactionHistory.prototype.formatMoney = function(amount) {
  return amount.toFixed(2);
};

TransactionHistory.prototype.formatTransaction = function(transaction) {
  return `${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}\n`
};


TransactionHistory.prototype.processAccountStatement = function() {
  var statement = ""
  statement += "date       || credit || debit || balance\n"
  for (var i = this.history.length -1 ; i >= 0; i-- ) {
    statement += this.formatTransaction(this.history[i])
    }
    console.log(statement);
    return(statement);
};

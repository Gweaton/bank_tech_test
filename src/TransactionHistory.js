var TransactionHistory = function() {
  this.history = []
};

TransactionHistory.prototype.showHistory = function() {
  return this.history;
};

TransactionHistory.prototype.addTransaction = function(type, amount, balance) {
    this.currentTransaction = {
      date: this.formatDate(),
      credit: null,
      debit: null,
      balance: this.formatMoney(balance)
    }
  this.currentTransaction.credit = type === "deposit" ? this.formatMoney(amount) : '    '
  this.currentTransaction.debit = type === "withdrawal" ? this.formatMoney(amount) : '    '
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

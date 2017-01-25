var TransactionHistory = function() {
  this.history = []
};

TransactionHistory.prototype.showHistory = function() {
  return this.history;
};

TransactionHistory.prototype.addTransaction = function(transaction) {
  this.history.push(transaction);
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

TransactionHistory.prototype.addHeaders = function() {
  return "<table><tr><th>Date</th><th>Credit></th><th>Debit</th><th>Balance</th></tr>"
}

TransactionHistory.prototype.formatTransaction = function(transaction) {
  var statement = this.addHeaders();
  for (var i = 0; i < this.history.length; i++) {
    statement +=  `<tr><td>${transaction.date}</td><td>${transaction.credit}</td><td>${transaction.debit}</td><td>${transaction.balance}</td></tr>`
  };
  statement += '</table>'
  return statement;
};

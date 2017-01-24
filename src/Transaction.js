var Transaction = function(type, amount, balance) {
  this.date = new Date();
  this.credit = (type = "deposit" ? amount : "");
  this.debit = (type = "withdrawal" ? amount : "");
  this.balance = balance;
};

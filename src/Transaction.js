var Transaction = function() {
  this.date = new Date();
  this.credit = 0;
}

Transaction.prototype.deposit = function(amount) {
  this.credit += amount;
};

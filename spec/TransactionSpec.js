//responsible for deposits and withdrawals
describe ("Transaction", function() {
  var transaction;
});

  beforeEach(function() {
    transaction = new Transaction();
  });

  describe("date", function() {
    it("should get today's date", function() {
    expect(transaction.date instanceof Date).toBeTruthy();
    });
  });

  describe("getBalance", function() {
    it("should store the amount passed to it in 'balance' for each transaction", function() {
      transaction.getBalance(10);
      expect(transaction.balance).toEqual(10);
    });
  });

  describe("deposit", function() {
    it("should store the amount in credit", function() {
      transaction.deposit(10, 10);
      expect(transaction.credit).toEqual(10);
    });
  });

  describe("withdraw", function() {
    it("should add the amount in debit", function() {
      transaction.withdraw(10, 0);
      expect(transaction.debit).toEqual(10);
    });
  });

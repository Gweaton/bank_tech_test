//responsible for deposits and withdrawals
describe ("Transaction", function() {
  var transaction;
});

  describe("date", function() {
    it("should get today's date", function() {
    transaction = new Transaction()
    expect(transaction.date instanceof Date).toBeTruthy();
    });
  });

  describe("credit", function() {
    it("should store the amount when passed a 'type' of deposit", function() {
      transaction = new Transaction("deposit", 10, 10);
      expect(transaction.credit).toEqual(10);
    });
  });

  describe("debit", function() {
    it("should store the amount when passed a 'type' of withdrawal", function() {
      transaction = new Transaction("withdrawal", 10, 10);
      expect(transaction.debit).toEqual(10);
    });
  });

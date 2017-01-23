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


  describe("deposit", function() {
    it("should store the amount in credit", function() {
      transaction.deposit(10);
      expect(transaction.credit).toEqual(10);
    });

  });

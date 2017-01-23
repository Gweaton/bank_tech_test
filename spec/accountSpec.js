describe("Account", function() {
  var account;
});

  beforeEach(function() {
    account = new Account();
  });

  describe("balance", function() {
    it("should start on 0 for a new account", function() {
      expect(account.balance).toEqual(0);
    });

    it("should have a showBalance function", function() {
      expect(account.showBalance()).toEqual(0);
    });
  });

  describe("deposit", function() {
    it("should add money to the account's balance", function() {
      account.deposit(100);
      expect(account.showBalance()).toEqual(100);
    });
  });

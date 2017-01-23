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
  });

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

    beforeEach(function() {
      account.deposit(100);
    });

      it("should add money to the account's balance", function() {
        expect(account.showBalance()).toEqual(100);
      });
    });

  describe("withdraw", function() {
    beforeEach(function() {
      account.deposit(100);
    })
    it("should remove money from the account's balance", function() {
      account.withdraw(10);
      expect(account.showBalance()).toEqual(90);
    });

    it("should not let you overdraw", function() {
      expect(function() {account.withdraw(110)}).toThrow("Sorry, your account has insufficient funds for this transaction.")
    });
  });

  describe("formatDate", function() {
    it("should show today's date nicely formatted", function() {
      expect(account.formatDate()).toEqual("23/01/2017")
    });
  });

  describe("addTransaction", function() {
    it("should add the current transaction to transactionHistory", function() {
      account.deposit(100);
      expect(account.transactionHistory).toEqual( [{ date: '23/01/2017',
                                                     credit: 100,
                                                     debit: 0,
                                                     balance: 100    }]);
    });
  });

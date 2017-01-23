describe("Account", function() {
  var account;
});

  beforeEach(function() {
    account = new Account();
  });

  describe("balance", function() {
    it("should start on 0 for a new account", function() {
      expect(account.balance).toEqual(0.00);
    });

    it("should have a showBalance function", function() {
      expect(account.showBalance()).toEqual(0.00);
    });
  });

  describe("deposit", function() {

    beforeEach(function() {
      account.deposit(100);
    });

      it("should add money to the account's balance", function() {
        expect(account.showBalance()).toEqual(100.00);
      });
    });

  describe("withdraw", function() {
    beforeEach(function() {
      account.deposit(100);
    })
    it("should remove money from the account's balance", function() {
      account.withdraw(10);
      expect(account.showBalance()).toEqual(90.00);
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
    beforeEach(function() {
      account.deposit(100);
    });

      it("should add a deposit to transactionHistory", function() {
        expect(account.transactionHistory).toEqual( [{ date: '23/01/2017',
                                                       credit: 100.00,
                                                       debit: 0.00,
                                                       balance: 100.00    }]);
      });
      it("should add a withdrawal to transactionHistory", function() {
        account.withdraw(80);
        expect(account.transactionHistory).toEqual( [{ date: '23/01/2017',
                                                       credit: 100.00,
                                                       debit: 0.00,
                                                       balance: 100.00    },
                                                     { date: '23/01/2017',
                                                       credit: 0.00,
                                                       debit: 80.00,
                                                       balance: 20.00    }

                                                     ])

      })

    });

  describe("formatMoney", function() {
    it("should set money to two decimal places", function() {
      expect(String(account.formatMoney(12))).toEqual("12.00");
    });
  });

  // describe("processAccountStatement", function() {
  //   it("should print out a nearly formatted transactionHistory", function() {
  //     account.deposit(100);
  //     account.withdraw(80);
  //     expect(account.processAccountStatement()).toEqual(
  //       `date       || credit || debit || balance\n
  //        23/01/2017 || 100.00 || 0     || 100.00 \n
  //        23/01/2017 || 0      || 80.00 || 20.00  \n`
  //     );
  //   });
  // });

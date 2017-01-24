describe("TransactionHistory", function() {
  var transactionHistory;
  var transaction;
});

  beforeEach(function() {
    transactionHistory = new TransactionHistory();
    transaction = { date: "24/01/2017",
                    credit: "100.00",
                    debit: "",
                    balance: "100.00"}
  });

    describe("history", function() {
      it("should start out empty", function() {
        expect(transactionHistory.showHistory()).toEqual([]);
      });
    });

    describe("formatDate", function() {
      it("should show today's date nicely formatted", function() {
        expect(transactionHistory.formatDate()).toEqual("24/01/2017")
      });
    });

    describe("addTransaction", function() {
      it("should add a transaction to history", function() {
        transactionHistory.addTransaction(transaction);
        expect(transactionHistory.showHistory()).toEqual(
          [{ date: "24/01/2017",
             credit: "100.00",
             debit: "",
             balance: "100.00"}]);
      });
    });

    describe("formatMoney", function() {
      it("should set money to two decimal places", function() {
        expect(String(transactionHistory.formatMoney(12))).toEqual("12.00");
      });
    });

    describe("formatTransaction", function() {
      xit("should print out a formatted line from history", function() {
        transactionHistory.addTransaction("deposit", 100, 100);
        expect(transactionHistory.formatTransaction(transactionHistory.history[0])).toEqual("23/01/2017 || 100.00 ||      || 100.00\n")
      });
    });

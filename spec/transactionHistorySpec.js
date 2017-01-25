describe("TransactionHistory", function() {
  var transactionHistory;
  var transaction;
});

  beforeEach(function() {
    transactionHistory = new TransactionHistory();
    transaction = { date: "25/01/2017",
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
        expect(transactionHistory.formatDate()).toEqual("25/01/2017")
      });
    });

    describe("addTransaction", function() {
      it("should add a transaction to history", function() {
        transactionHistory.addTransaction(transaction);
        expect(transactionHistory.showHistory()).toEqual(
          [{ date: "25/01/2017",
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
      it("should print out a formatted line from history", function() {
        transactionHistory.addTransaction(transaction);
        expect(transactionHistory.formatTransaction(transactionHistory.history[0])).toEqual("<table><tr><th>Date</th><th>Credit></th><th>Debit</th><th>Balance</th></tr><tr><td>25/01/2017</td><td>100.00</td><td></td><td>100.00</td></tr></table>")
      });
    });

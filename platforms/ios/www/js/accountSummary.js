$(document).ready(function(){
    loadInfo();

});

function loadInfo(){
  var user = window.localStorage.getItem('user');
  var usuario = document.querySelector("#usuario");
  //usuario.value = user;
  usuario.textContent = user;

  var balance;
  var amount;
  var credit;
  var date;

  if (user == "carol"){
    balance = window.localStorage.getItem("carol_historyBalance");
    amount = window.localStorage.getItem("carol_amount");
    credit = window.localStorage.getItem("carol_credit");
    date = window.localStorage.getItem("carol_dates");
  }else if (user == "marcos"){
    balance = window.localStorage.getItem("marcos_historyBalance");
    amount = window.localStorage.getItem("marcos_amount");
    credit = window.localStorage.getItem("marcos_credit");
    date = window.localStorage.getItem("marcos_dates");
  }

  if (amount.length > 0){
    insertTransaction(date, balance, amount, credit);
  }
}

var btnBack = document.querySelector("#btnBack");
btnBack.addEventListener("click", function(event){
  window.history.back();
});

function insertTransaction(date, balance, amount, credit) {
    var bodyTable = $(".transactions").find("tbody");
    //var user = "Marcos";
    //var numWords = $("#count-words").text();
    var splitAmount = amount.split(";");
    var splitBalace = balance.split(";");
    var splitCredit = credit.split(";");
    var splitDate = date.split(";");

    if (splitAmount.length > 0){
      for (var i = 0; i < splitAmount.length-1; i++ ){
        var line = newLine(splitDate[i], splitBalace[i], splitAmount[i], splitCredit[i]);
        bodyTable.prepend(line);
      }
    }
    //line.find(".button-remove").click(removeLine);

}

function removeLine (event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}

function newLine(date, currentBalance, splitTransactions, credit){

    var line = $("<tr>");

    var date = $("<td>").text(date);
    var posNeg = splitTransactions.substring(0, 1);
    if (posNeg == "-"){
      var columnTransactionOut = $("<td>").addClass("notready").text("$"+splitTransactions.substring(1, splitTransactions.length));
      var columnTransactionIn = $("<td>").text("");
    }else{
      var columnTransactionOut = $("<td>").text("");
      var columnTransactionIn = $("<td>").addClass("ready").text("$"+splitTransactions.substring(1, splitTransactions.length));
    }
    var columnBalance;
    if (Number(currentBalance)>0){
      columnBalance   = $("<td>").addClass("ready").text("$"+currentBalance);
    }else{
      columnBalance   = $("<td>").addClass("notready").text("$"+currentBalance);
    }

    var columnCredit;
    if (Number(credit) > 0){
      columnCredit = $("<td>").addClass("ready").text("$"+credit);
    }else{
      columnCredit = $("<td>").addClass("notready").text("$"+credit);
    }
    //var columnRemove = $("<td>");

    //var link = $("<a>").attr("href","#").addClass("button-remove");
    //var icon = $("<i>").addClass("small").addClass("material-icons").text("delete");

    //link.append(icon);

    //columnRemove.append(link);

    line.append(date);
    line.append(columnTransactionOut);
    line.append(columnTransactionIn);
    line.append(columnBalance);
    line.append(columnCredit);

    return line;
}

/*if (user == "carol"){
  divCredit.classList.add("invisible");
}else{
  divCredit.classList.remove("invisible");
}*/


/*var initialBalanceSum = document.querySelector("#initialBalanceSum");
var finalBalanceSum = document.querySelector("#finalBalanceSum");
var initialCreditSum = document.querySelector("#initialCreditSum");
var availableCreditSum = document.querySelector("#availableCreditSum");
var sumTransactions = document.querySelector("#sumTransactions");

initialBalanceSum.value = initialBalance;
finalBalanceSum.value = finalBalance;
initialCreditSum.value = credit;
availableCreditSum.value = finalCredit;
sumTransactions.value = times; */

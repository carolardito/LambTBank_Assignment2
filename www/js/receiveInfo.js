// função pra ler querystring
//https://pt.stackoverflow.com/questions/75557/passando-valores-js-para-outra-pagina-html
function queryString(parameter) {
      var loc = location.search.substring(1, location.search.length);
      var param_value = false;
      var params = loc.split("&");
      for (i=0; i<params.length;i++) {
          param_name = params[i].substring(0,params[i].indexOf('='));
          if (param_name == parameter) {
              param_value = params[i].substring(params[i].indexOf('=')+1)
          }
      }
      if (param_value) {
          return param_value;
      }
      else {
          return undefined;
      }
}

var user = window.localStorage.getItem('user');//queryString("user");
var receivedUser = document.querySelector("#receivedUser");
var divCredit = document.querySelector("#divCredit");
receivedUser.textContent = user;

/*if (!isUser(user)){
  divCredit.classList.add("invisible");
}else{
  divCredit.classList.remove("invisible");
}*/

var storageBalance;
var storageCredit;
if (user == "carol") {
  storageBalance = window.localStorage.getItem("carol_currentBalance");
  storageCredit = window.localStorage.getItem("carol_currentCredit");
}else{
  storageBalance = window.localStorage.getItem("marcos_currentBalance");
  storageCredit = window.localStorage.getItem("marcos_currentCredit");
}

var currentBalance = document.querySelector("#currentBalance");
var auxBalance = "";
for (var i = 0; i < storageBalance.length-1; i++){
  auxBalance += storageBalance.substring(i, i+1);
}
currentBalance.value = auxBalance;

var currentCredit = document.querySelector("#credit");
var auxCredit = "";
for (var i = 0; i < storageCredit.length-1; i++){
  auxCredit += storageCredit.substring(i, i+1);
}
currentCredit.value = auxCredit;




/*
window.onpageshow = function fillFields(){
  var user = window.localStorage.getItem('user');//queryString("user");
  var receivedUser = document.querySelector("#receivedUser");
  var divCredit = document.querySelector("#divCredit");
  receivedUser.textContent = user;

  if (!isUser(user)){
    divCredit.classList.add("invisible");
  }else{
    divCredit.classList.remove("invisible");
  }

  if (user == "carol"){
    initialBalance = window.localStorage.getItem("carol_initialBalance");
    finalBalance = window.localStorage.getItem("carol_finalBalance");
    credit = window.localStorage.getItem("carol_credit");
    finalCredit = window.localStorage.getItem("carol_finalCredit");
  }else if (user == "marcos"){
    initialBalance = window.localStorage.getItem("marcos_initialBalance");
    finalBalance = window.localStorage.getItem("marcos_finalBalance");
    credit = window.localStorage.getItem("marcos_credit");
    finalCredit = window.localStorage.getItem("marcos_finalCredit");
  }

  var initialBalanceSum = document.querySelector("#initialBalanceSum");
  var finalBalanceSum = document.querySelector("#finalBalanceSum");
  var initialCreditSum = document.querySelector("#initialCreditSum");
  var availableCreditSum = document.querySelector("#availableCreditSum");
  var sumTransactions = document.querySelector("#sumTransactions");

  initialBalanceSum.value = initialBalance;
  finalBalanceSum.value = finalBalance;
  initialCreditSum.value = credit;
  availableCreditSum.value = finalCredit;
  sumTransactions.value = times;

}*/

function isUser(user){
  if (user == "marcos") {
    return true;
  }
  return false;
}

var btnSubmit = document.querySelector('#btnSubmit');
btnSubmit.addEventListener("click", function(event){
  var user = window.localStorage.getItem('user');
  var currentBalance = document.querySelector("#currentBalance").value;
  var finalBalance = document.querySelector("#totalBalance").value;
  var initialCredit = document.querySelector("#credit").value;
  var finalCredit = document.querySelector("#creditAvailable").value;
  var amount = document.querySelector("#amount").value;
  //var userBack = document.querySelector("#receivedUser").textContent;
  var newdate = formatDate(new Date());

  if (user == "carol"){
    window.localStorage.setItem("carol_currentBalance", finalBalance + ";");
    window.localStorage.setItem("carol_currentCredit", finalCredit + ";");

    var carolHistoryBalance = window.localStorage.getItem("carol_historyBalance");
    window.localStorage.setItem("carol_historyBalance", carolHistoryBalance + finalBalance + ";");

    var carolCredit = window.localStorage.getItem("carol_credit");
    window.localStorage.setItem("carol_credit", carolCredit + finalCredit + ";");

    var carolAmount = window.localStorage.getItem("carol_amount");
    window.localStorage.setItem("carol_amount", carolAmount + "-" + amount + ";");

    var carolDates = window.localStorage.getItem("carol_dates");
    window.localStorage.setItem("carol_dates", carolDates + newdate + ";");
    var marcosDates = window.localStorage.getItem("marcos_dates");
    window.localStorage.setItem("marcos_dates", marcosDates + newdate + ";");

    var marcosCurrentBalance = window.localStorage.getItem("marcos_currentBalance");
    var auxCurrentBalance = "";
    for (var i = 0; i < marcosCurrentBalance.length-1; i++){
      auxCurrentBalance += marcosCurrentBalance.substring(i, i+1);
    }
    window.localStorage.setItem("marcos_currentBalance", Number(auxCurrentBalance) + Number(amount) + ";");

    var marcosHistoryBalance = window.localStorage.getItem("marcos_historyBalance");
    window.localStorage.setItem("marcos_historyBalance", marcosHistoryBalance + (Number(auxCurrentBalance) + Number(amount)) +";");

    var marcosCredit = window.localStorage.getItem("marcos_credit");
    var marcosCurrentCredit = window.localStorage.getItem("marcos_currentCredit");
    window.localStorage.setItem("marcos_credit", marcosCredit + marcosCurrentCredit);

    var marcosAmount = window.localStorage.getItem("marcos_amount");
    window.localStorage.setItem("marcos_amount", marcosAmount + "+" + amount + ";");

    /*var times = window.localStorage.getItem("carol_times");
    if (times) {
      window.localStorage.setItem("carol_times", Number(times) + 1);
    }else{
      window.localStorage.setItem("carol_times", "1");
    }*/
  }else if (user == "marcos"){
    window.localStorage.setItem("marcos_currentBalance", finalBalance + ";");
    window.localStorage.setItem("marcos_currentCredit", finalCredit + ";");

    var marcosHistoryBalance = window.localStorage.getItem("marcos_historyBalance");
    window.localStorage.setItem("marcos_historyBalance", marcosHistoryBalance + finalBalance + ";");

    var marcosCredit = window.localStorage.getItem("marcos_credit");
    window.localStorage.setItem("marcos_credit", marcosCredit + finalCredit + ";");

    var marcosAmount = window.localStorage.getItem("marcos_amount");
    window.localStorage.setItem("marcos_amount", marcosAmount + "-" + amount + ";");

    var marcosDates = window.localStorage.getItem("marcos_dates");
    window.localStorage.setItem("marcos_dates", marcosDates + newdate + ";");
    var carolDates = window.localStorage.getItem("carol_dates");
    window.localStorage.setItem("carol_dates", carolDates + newdate + ";");

    var carolCurrentBalance = window.localStorage.getItem("carol_currentBalance");
    var auxCurrentBalance = "";
    for (var i = 0; i < carolCurrentBalance.length-1; i++){
      auxCurrentBalance += carolCurrentBalance.substring(i, i+1);
    }
    window.localStorage.setItem("carol_currentBalance", Number(auxCurrentBalance) + Number(amount) + ";");

    var carolHistoryBalance = window.localStorage.getItem("carol_historyBalance");
    window.localStorage.setItem("carol_historyBalance", carolHistoryBalance + (Number(auxCurrentBalance) + Number(amount)) +";");

    var carolCredit = window.localStorage.getItem("carol_credit");
    var carolCurrentCredit = window.localStorage.getItem("carol_currentCredit");
    window.localStorage.setItem("carol_credit", carolCredit + carolCurrentCredit);

    var carolAmount = window.localStorage.getItem("carol_amount");
    window.localStorage.setItem("carol_amount", carolAmount + "+" + amount + ";");

    /*var times = window.localStorage.getItem("marcos_times");
    if (times) {
      window.localStorage.setItem("marcos_times", Number(times) + 1);
    }else{
      window.localStorage.setItem("marcos_times", "1");
    }*/
  }

  window.history.back();
});

var btnBack = document.querySelector("#btnBack");
btnBack.addEventListener("click", function(event){
  window.history.back();
});

/*var dadosArquivados = JSON.parse(sessionStorage.getItem('login'));

url = "transferFunds.html";

var test = document.querySelector("#receivedUser");
test.textContent = dadosArquivados.user.value;



var xhr = new XMLHttpRequest();
// we defined the xhr

xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);

        // we get the returned data
    }

    // end of state change: it can be after some time (async)
};

xhr.open('GET', yourUrl, true);
xhr.send();
*/
//var user = Request.QueryString["user"];
//var user1 = Request["user"];

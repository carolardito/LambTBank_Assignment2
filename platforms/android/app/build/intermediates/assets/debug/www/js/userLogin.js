/*var sectionReload = document.querySelector("#sectionReload");
sectionReload.on("pageinit", function(event){
  var page = $(this);
  admLogin();
});

window.on("pageshow", function(event){
  admLogin();
});*/

window.onpageshow = function login(){
  //var admPage = document.querySelector("#admPage");
  //admPage.src="admConsole.html";
  //document.getElementById('admPage').src = "admConsole.html";
  //window.frame['admPage'].location.replace("admConsole.html");
  //frames.admPage.src = ("admConsole.html");
  //parent.admPage.location.reload()

  //window.top.frames['admPage'].location.href.reload()

  var countTimes = document.querySelector("#countTimes").value;

  if (Number(countTimes) > 0){
    var user = window.localStorage.getItem('userBack');
    var initialBalance = window.localStorage.getItem('initialBalance');
    var finalBalance = window.localStorage.getItem('finalBalance');

    if (Number(countTimes) == 1){
      var userReceived = document.querySelector("#firstUser");
      var inicialBalanceReceived = document.querySelector("#firstInicialBalance");
      var finalBalanceReceived = document.querySelector("#firstFinalBalance");

      userReceived.value = user;
      inicialBalanceReceived.value = initialBalance;
      finalBalanceReceived.value = finalBalance;

    }else if (Number(countTimes) == 2){
      var userReceived = document.querySelector("#secondUser");
      var inicialBalanceReceived = document.querySelector("#secondInicialBalance");
      var finalBalanceReceived = document.querySelector("#secondFinalBalance");

      userReceived.value = user;
      inicialBalanceReceived.value = initialBalance;
      finalBalanceReceived.value = finalBalance;
    }
  }

}

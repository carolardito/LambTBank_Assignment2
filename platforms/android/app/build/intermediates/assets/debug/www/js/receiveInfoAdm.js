var btnBack = document.querySelector("#btnBack");

btnBack.addEventListener("click", function(event){
  window.history.back();
});

window.onpageshow = function onAdmLogin(){
  var sourceUser = document.querySelector("#sourceUser");
  var sourceInitialBalance = document.querySelector("#sourceInitialBalance");
  var sourceActualBalance = document.querySelector("#sourceActualBalance");
  var targetUser = document.querySelector("#targetUser");
  var targetInitialBalance = document.querySelector("#targetInitialBalance");
  var targetActualBalance = document.querySelector("#targetActualBalance");

  var carolHistoryBalance = window.localStorage.getItem("carol_historyBalance");
  var splitCarolBalance = carolHistoryBalance.split(";");
  var carolCurrentBalance = window.localStorage.getItem("carol_currentBalance");

  var marcosHistoryBalance = window.localStorage.getItem("marcos_historyBalance");
  var splitMarcosBalance = marcosHistoryBalance.split(";");
  var marcosCurrentBalance = window.localStorage.getItem("marcos_currentBalance");

  var auxCarolBalance = carolCurrentBalance.substring(0, carolCurrentBalance.length-1);
  var auxMarcosBalance = marcosCurrentBalance.substring(0, marcosCurrentBalance.length-1);

  sourceUser.value = "carol"; //window.localStorage.getItem('user1ToConsole');
  sourceInitialBalance.value = splitCarolBalance[0]; //window.localStorage.getItem('initialBalance1ToConsole');
  sourceActualBalance.value = auxCarolBalance;
  targetUser.value = "marcos";//window.localStorage.getItem('user2ToConsole');
  targetInitialBalance.value = splitMarcosBalance[0]; //window.localStorage.getItem('initialBalance2ToConsole');
  targetActualBalance.value = auxMarcosBalance;



}

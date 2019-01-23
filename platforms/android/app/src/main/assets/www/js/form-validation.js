

var buttonSubmit = document.querySelector("#btnSubmit");

buttonSubmit.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-login");
  var errors = userValidation(form);

  if (errors.length > 0){
    navigator.vibrate(500);
    showErrorMessages(errors);
    return;
  }else{
    initiateStorage();
    redirect(form.user.value);
  }
});

function userValidation(form){

  var user_carol = window.localStorage.getItem('user_carol');
  var passord_carol = window.localStorage.getItem('password_carol');
  var user_marcos = window.localStorage.getItem('user_marcos');
  var passord_marcos = window.localStorage.getItem('passord_marcos');

  var user = form.user.value;
  var password = form.password.value;
  var error = [];

  if (user == "john" && password == "123"){
    return true; //ADM
  }else if (user == "carol"){
    if(passord_carol && passord_carol == password){
      return true;
    }else if (!passord_carol && password == "carol"){
      return true;
    }
  }else if (user == "marcos"){
    if(passord_marcos && passord_marcos == password){
      return true;
    }else if (!passord_marcos && password == "marcos"){
      return true;
    }
  }

  if (user.length == 0) {
    error.push("User empty.");
  }
  if (password.length == 0) {
    error.push("Password empty.");
  }
  if (user.length > 0 && password.length > 0) {
    error.push("User and/or password does not exist.");
  }

  return error;
}

function showErrorMessages(errors) {
    var ul = document.querySelector("#erro-messages");
    ul.innerHTML = ""
    errors.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
}

function redirect(user){
  //alert("test");
/*var url = "transferFunds.html";
  var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: user
}));
*/
  if(user == "john"){
    //var admPage = document.querySelector("#admPage");
    //admPage.src="admConsole.html";
    //parent.frames.admPage.src = "admConsole.html";
    //parent.frames.admPage.classList.remove("framegone");
    //window.top.frames['admPage'].src = "admConsole.html";
    var user1ToConsole = document.querySelector("#firstUser").value;
    var initialBalance1ToConsole = document.querySelector("#firstInicialBalance").value;
    var finalBalance1ToConsole = document.querySelector("#firstFinalBalance").value;
    var user2ToConsole = document.querySelector("#secondUser").value;
    var initialBalance2ToConsole = document.querySelector("#secondInicialBalance").value;
    var finalBalance2ToConsole = document.querySelector("#secondFinalBalance").value;

    window.localStorage.setItem('user1ToConsole', user1ToConsole);
    window.localStorage.setItem('initialBalance1ToConsole', initialBalance1ToConsole);
    window.localStorage.setItem('finalBalance1ToConsole', finalBalance1ToConsole);
    window.localStorage.setItem('user2ToConsole', user2ToConsole);
    window.localStorage.setItem('initialBalance2ToConsole', initialBalance2ToConsole);
    window.localStorage.setItem('finalBalance2ToConsole', finalBalance2ToConsole);

    window.location="admConsole.html";
  }else{
    //window.location="transferFunds.html?user="+user;
    var countTimes = document.querySelector("#countTimes");
    if (Number(countTimes.value) == 2){
      countTimes.value = Number(countTimes.value) - 1;
    }else{
      countTimes.value = Number(countTimes.value) + 1;
    }

    window.localStorage.setItem('user',user);
    //window.location="transferFunds.html";
    window.location="menu.html";


    //parent.frames.admPage.classList.add("framegone");
  }
  //var dados = JSON.stringify($('input').val());
  //sessionStorage.setItem('login', form);
}

function initiateStorage(){
  var carolCurrentBalance = window.localStorage.getItem("carol_currentBalance");
  var carolHistoryBalance = window.localStorage.getItem("carol_historyBalance");
  var carolCredit = window.localStorage.getItem("carol_credit");
  var carolCurrentCredit = window.localStorage.getItem("carol_currentCredit");
  var carolAmount = window.localStorage.getItem("carol_amount");
  var carolDates = window.localStorage.getItem("carol_dates");
  var marcosCurrentBalance = window.localStorage.getItem("marcos_currentBalance");
  var marcosHistoryBalance = window.localStorage.getItem("marcos_historyBalance");
  var marcosCredit = window.localStorage.getItem("marcos_credit");
  var marcosCurrentCredit = window.localStorage.getItem("marcos_currentCredit");
  var marcosAmount = window.localStorage.getItem("marcos_amount");
  var marcosDates = window.localStorage.getItem("marcos_dates");

  if (!carolCurrentBalance){window.localStorage.setItem("carol_currentBalance", "1000;");}
  if (!carolHistoryBalance){window.localStorage.setItem("carol_historyBalance", "1000;");}
  if (!carolCredit){window.localStorage.setItem("carol_credit", "1000;");}
  if (!carolCurrentCredit){window.localStorage.setItem("carol_currentCredit", "1000;");}
  if (!carolAmount){window.localStorage.setItem("carol_amount", "0;");}

  if (!marcosCurrentBalance){window.localStorage.setItem("marcos_currentBalance", "1000;");}
  if (!marcosHistoryBalance){window.localStorage.setItem("marcos_historyBalance", "1000;");}
  if (!marcosCredit){window.localStorage.setItem("marcos_credit", "1000;");}
  if (!marcosCurrentCredit){window.localStorage.setItem("marcos_currentCredit", "1000;");}
  if (!marcosAmount){window.localStorage.setItem("marcos_amount", "0;");}

  var datenow = formatDate(new Date());

  if (!carolDates){
    window.localStorage.setItem("carol_dates", datenow+";");
  }
  if (!marcosDates){
    window.localStorage.setItem("marcos_dates", datenow+";");
  }
}

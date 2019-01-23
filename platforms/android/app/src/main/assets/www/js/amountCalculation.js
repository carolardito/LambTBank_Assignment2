//onchange="alert(this.options[this.selectedIndex].text);"

window.onpageshow = function firstThings(){
  var btnSubmit = document.querySelector("#btnSubmit");
  btnSubmit.classList.add("disabled");
}

var toOptionUser = document.querySelector("#toOption");

toOptionUser.addEventListener("onchange", function(event){
  alert("funcionou");
  console.log(toOptionUser.value);
});

function optionSelectedTo(){
    var x = document.getElementById("toOption").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;
    var otherInput = document.querySelector("#otherInput");
    if (x == "other"){
      otherInput.classList.add("visible");
    }else{
      otherInput.classList.remove("visible");
    }
}
function optionSelectedFrom(){
    var x = document.getElementById("fromOption").value;

    var otherInputFrom = document.querySelector("#otherInputFrom");
    if (x == "other"){
      otherInputFrom.classList.add("visible");
    }else{
      otherInputFrom.classList.remove("visible");
    }

}

var calculateAmount = document.querySelector("#calculateAmount");

calculateAmount.addEventListener("click", function(event){
  finalBalance();
});

function finalBalance(){
  var currentBalance = document.querySelector("#currentBalance").value;
  var amount = document.querySelector("#amount").value;
  var totalBalance = document.querySelector("#totalBalance");
  var credit = document.querySelector("#credit").value;
  var creditAvailable = document.querySelector("#creditAvailable");
  var user = document.querySelector("#receivedUser").textContent;
  var errors = valitionAmount(currentBalance, amount, credit, user);
  var btnSubmit = document.querySelector("#btnSubmit");

  if (errors.length > 0){
    totalBalance.value = "";
    showErrorMessages(errors);
    btnSubmit.classList.add("disabled");
    return;
  }else{
    btnSubmit.classList.remove("disabled");

    //if (user == "marcos"){
      if(Number(amount) > Number(currentBalance)){
        var aux = amount - currentBalance;
        var aux2 = credit - aux;
        creditAvailable.value = aux2;
        totalBalance.value = 0;
      }else{
        creditAvailable.value = credit;
        totalBalance.value = Number(currentBalance) - Number(amount);
      }
    /*}else{
      totalBalance.value = Number(currentBalance) - Number(amount);
    }*/
  }
}

function valitionAmount(currentBalance, amount, credit, user){
  var errors = [];
  var cb = Number(currentBalance);
  var am = Number(amount);
  var cd = Number(credit);


  //if(user == "marcos"){
    if(cd < 0){
      errors.push("negative credit");
    }
    if (credit.length == 0){
      errors.push("empty credit");
    }
    if ((cb+cd) < am){
      errors.push("not enough balance");
    }
  /*}else{
    if (cb < am){
      errors.push("not enough balance");
    }
  }*/
  if (cb < 0){
    errors.push("negative balance");
  }
  if(am < 0){
    errors.push("negative amount");
  }

  if (currentBalance.length == 0){
    errors.push("empty balance");
  }
  if (amount.length == 0){
    errors.push("empty amount");
  }


  return errors
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

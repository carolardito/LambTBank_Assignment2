var user = window.localStorage.getItem('user');
var fiedluser = document.querySelector("#user");
fiedluser.value = user;

var buttonSubmit = document.querySelector("#btnSubmit");
buttonSubmit.addEventListener("click", function(event){
  var newpassword = document.querySelector("#newpassword").value;

  if (user == "carol"){
    window.localStorage.setItem('password_carol', newpassword);
  }else{
    window.localStorage.setItem('passord_marcos', newpassword);
  }

window.location="index.html";
});

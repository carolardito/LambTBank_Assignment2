var user = window.localStorage.getItem('user');

if (user == "carol"){
  document.getElementById("fullnameuser").innerHTML = "Carolini Freire Ardito Tavares ";
  document.getElementById("useraddress").innerHTML = "30 Heron's Hill Way";
  document.getElementById("usercity").innerHTML = "North York, ON, M2J 0A7";
  document.getElementById("bankname").innerHTML = "TD Trust Bank";
  document.getElementById("bankaddress").innerHTML = "1245 Dupont St";
  document.getElementById("bankcity").innerHTML = "Toronto, ON, M6H 2A6";
}else{
  document.getElementById("fullnameuser").innerHTML = "Marcos Bittencourt ";
  document.getElementById("useraddress").innerHTML = " 265 Yorkland Blvd";
  document.getElementById("usercity").innerHTML = "North York, ON, M2J 1S5";
  document.getElementById("bankname").innerHTML = "RBC Royal Bank";
  document.getElementById("bankaddress").innerHTML = "1800 Sheppard Ave E";
  document.getElementById("bankcity").innerHTML = "North York, ON M2J 5A7";
}

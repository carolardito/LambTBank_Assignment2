var user = window.localStorage.getItem('user');

$( document ).ready(function() {
	getWeatherWithZipCode();
    hideDiv();
	setUser();
});

var exitLink = document.querySelector("#exitLink");
exitLink.addEventListener("click", function(){
    window.localStorage.setItem('user', "");

});

function hideDiv(){
    var img;

    if (user == "carol"){
        img = window.localStorage.getItem('carol_img');
    }else{
        img = window.localStorage.getItem('marcos_img');
    }

    if (img) {
        var divToHide = document.querySelector("#divToHide");

        if (divToHide.style.display === "none") {
            divToHide.style.display = "block";
        } else {
            divToHide.style.display = "none";
        }
    }
}

function setUser(){
    //var exitLink = document.querySelector("#user");
    $("#user").text(user + "!");
}
/*
var btnBack = document.querySelector("#btnBack");
btnBack.addEventListener("click", function(event){
  window.history.back();
});


*/
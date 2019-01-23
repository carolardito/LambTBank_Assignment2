var user = window.localStorage.getItem('user');
var help;

const fileInput = document.getElementById('file-input');
fileInput.addEventListener("click", function(){
	navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
});
//fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));

const output = document.getElementById('output');


var submit = document.getElementById('submit');
submit.addEventListener('click', function(){
	if (user == "carol"){
	    window.localStorage.setItem('carol_img', help);
	    //setJSON(file);//window.localStorage.setItem("file", JSON.stringify(file));
	  }else{
	    window.localStorage.setItem('marcos_img', help);
	  }
});

/*
var img = null;

if (user == "carol"){
	img = JSON.parse(window.localStorage.getItem("file"));
	//img = window.localStorage.getItem('carol_img');
}else{
	img = window.localStorage.setItem('marcos_img', file);
}

if (img !== null) {
	let file = null;

	file = {
          'lastMod'    : img.lastMod,
          'lastModDate': img.lastModDate,
          'name'       : img.name,
          'size'       : img.size,
          'type'       : img.type,
    } 

	if (file !== null) {
	  output.src = URL.createObjectURL(file);
    //output.src = URL.createObjectURL(img);
	}
}*/

function doSomethingWithFiles(fileList) {
	let file = null;

	for (let i = 0; i < fileList.length; i++) {
	  if (fileList[i].type.match(/^image\//)) {
	    file = fileList[i];
	    break;
	  }
	}

	if (file !== null) {
	  output.src = URL.createObjectURL(file);
	  //window.localStorage.setItem('img', file);
	  
	  help = file;
	}
}
/*
function setJSON(data){
	var myArray = [];
    var file = {};

/*    console.log(data); // see the FileList
console.log("lastModified = " + data.lastModified); //
    // manually create a new file obj for each File in the FileList
    for(var i = 0; i < data.length; i++){

      file = {
          'lastMod'    : data[i].lastModified,
          'lastModDate': data[i].lastModifiedDate,
          'name'       : data[i].name,
          'size'       : data[i].size,
          'type'       : data[i].type,
      } 
      console.log("1");
      //add the file obj to your array
      myArray.push(file)
    }/

    file = {
          'lastMod'    : data.lastModified,
          'lastModDate': data.lastModifiedDate,
          'name'       : data.name,
          'size'       : data.size,
          'type'       : data.type,
      } 
      console.log(file);
    //stringify array
    console.log(JSON.stringify(file));
    window.localStorage.setItem("file", JSON.stringify(file));

}
*/
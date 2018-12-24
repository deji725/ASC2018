document.body.onload = addElement;
function addElement(){
    // create new div
    var newDiv = document.createElement('div');
    newDiv.className = "champ_container pyke";
    // add header to new div
    var header = document.createElement('h2');
    header.innerText = "pyke, the bloodharbor ripper";
    newDiv.appendChild(header);
    // add new div to main container
    var mainDiv = document.querySelector(".main_container");
    mainDiv.appendChild(newDiv);
}

var pykeimage = document.querySelector('.pkye');
pykeimage.style.backgroundImage = "url('assets/pyke.jpg')";   
pykeimage.style.backgroundColor = "#92fdfe";


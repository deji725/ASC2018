const  button = document.querySelector("#submitButton");
const  username = document.querySelector("#username");

function clickListener(event){
    event.preventDefault();
    alert(username.value);
    username.value = "";
}

button.addEventListener("click",clickListener);
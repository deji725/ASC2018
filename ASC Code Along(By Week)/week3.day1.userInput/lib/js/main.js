const mainTitle = document.querySelector("#main_title")
const titleInput = document.querySelector("#title_input")
const noun = document.querySelector("#noun")
const verb = document.querySelector("#verb")
const adjective = document.querySelector("#adjective")
const submitButton = document.querySelector("#submit_button");

function changeTitle(){
    const value = titleInput.value;
    mainTitle.innerHTML = value;
}

function isAnythingEmpty (){
    const anyEmpty = titleInput.value == "" ||
        noun.value == ""||
        verb.value == ""||
        adjective.value == ""
    return anyEmpty
}
titleInput.addEventListener("input",changeTitle);

function buttonClick(event){
    event.preventDefault()
    if(isAnythingEmpty()){
        alert("Please filin all forms")
    }else{
        let message = "Last night i ate a "
        message +=noun.value
        message += ", and today I just had to "
        message += verb.value
        message += " , What a "
        message += adjective.value
        message += " day!"
        document.querySelector(".form_container").remove()
        document.querySelector("#story_result").innerHTML = message
    }
}

submitButton.addEventListener("click", buttonClick)


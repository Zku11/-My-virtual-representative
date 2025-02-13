optionsIds=["optionA", "optionB", "optionC", "optionD", "optionE", "optionF", "optionG", "optionH"];

function NewPanel(clickFunction, optionsText){
    let optionsContainer = document.createElement("ul");
    optionsContainer.id="dialog-options";
    for(let i=0; i < optionsText.length; i++){
        optionsContainer.appendChild(NewOption(optionsText[i], optionsIds[i], clickFunction));
    }
    return optionsContainer;
}

function NewOption(optionText, optionId, clickFunction){
    let option = document.createElement("button");
    option.classList = "option-item";
    option.id = optionId;
    option.addEventListener("click", clickFunction);
    let textnode = document.createTextNode(optionText);
    option.appendChild(textnode);
    return option;
}

function DeletePreviousOptions(){
    let previousContainer = document.getElementById("dialog-options");
    if(previousContainer != null){
        previousContainer.remove();
    }
}
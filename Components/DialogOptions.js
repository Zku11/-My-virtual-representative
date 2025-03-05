optionsIds=["optionA", "optionB", "optionC", "optionD", "optionE", "optionF", "optionG", "optionH"];
let currentOptionIndex = 0;
let initialAnimationInterval = null;

function NewPanel(clickFunction, optionsText){
    let optionsContainer = document.createElement("ul");
    optionsContainer.id="dialog-options";
    for(let i=0; i < optionsText.length; i++){
        optionsContainer.appendChild(NewOption(optionsText[i], optionsIds[i], clickFunction));
    }
    InitialAnimationInterval();
    return optionsContainer;
}

function InitialAnimationInterval(){
    if(initialAnimationInterval != null){
        clearInterval(initialAnimationInterval);
    }
    currentOptionIndex = 0;
    initialAnimationInterval = setInterval(() => {
        let optionsContainer = document.getElementById("dialog-options");
        optionsContainer.children[currentOptionIndex].classList = "option-item scaled_option";
        currentOptionIndex++;
        if(currentOptionIndex > optionsContainer.children.length - 1){
            clearInterval(initialAnimationInterval);
        }
    }, 150);
}

function OptionInitialAnimation(){

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
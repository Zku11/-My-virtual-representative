window.onload = Start;
queuedFunctions = [];
allowUserInteraction = false;
executeQueuedFunctionsInterval = null;
scrollInterval = null;
dialogeAmountToOptimize = 10;
dialogeAmount = 0;
let allDialoges = [];

function Start(){
    GenerateStates();
    EnqueueFunction(function(){LucasDialog();});
    EnqueueFunction(function(){UpdateOptions();});
    
}

function StartScrollInterval(){
    window.scrollTo(0, document.body.scrollHeight);
    scrollInterval = setInterval(function(){window.scrollBy({
        top: 10,
        left: 0,
        behavior: "smooth",
      });}, 20);
}

function StopScrollInterval(){
    if(scrollInterval != null){
        clearInterval(scrollInterval);
        scrollInterval=null;
    }
}

function StartQueuedFunctionsInterval(){
    executeQueuedFunctionsInterval = setInterval(function(){ExecuteQueuedFunctions()}, 700);
}

function LucasDialog(){
    dialogeAmount++;
    if(dialogeAmount > dialogeAmountToOptimize){
        allDialoges[0].remove();
        allDialoges.shift();
    }
    chatContainer = document.getElementById("chatContainer");
    dialogA = NewLucasMessage("./images/lucasIcon.png", currentState.lucasMessage());
    chatContainer.appendChild(dialogA);
    allDialoges.push(dialogA);
}

function VisitorDialog(){
    dialogeAmount++;
    if(dialogeAmount > dialogeAmountToOptimize){
        allDialoges[0].remove();
        allDialoges.shift();
    }
    let chatContainer = document.getElementById("chatContainer");
    let dialog = NewVisitorMessage("./images/visitorIcon.png", currentState.visitorMessage());
    chatContainer.appendChild(dialog);
    allDialoges.push(dialog);
}

function UpdateOptions(){
    let optionsContainer = document.getElementById("optionsPanel");
    optionsContainer.innerHTML="";
    let currentStateOptions = currentState.childs;
    let optionsTexts = [];
    currentStateOptions.forEach(element => {
        optionsTexts.push(element.visitorMessage());
    });
    let options = NewPanel(clickFunction, optionsTexts);
    optionsContainer.appendChild(options);
}

function clickFunction(e){
    if(!allowUserInteraction){
        return;
    }
    StartScrollInterval();
    switch(e.target.id){
        case optionsIds[0]:
            SelectChild(0);
            break;
        case optionsIds[1]:
            SelectChild(1);
            break;
        case optionsIds[2]:
            SelectChild(2);
            break;
        case optionsIds[3]:
            SelectChild(3);
            break;
        case optionsIds[4]:
            SelectChild(4);
            break;
        case optionsIds[5]:
            SelectChild(5);
            break;
        case optionsIds[6]:
            SelectChild(6);
            break;
        case optionsIds[7]:
            SelectChild(7);
            break;
    }
    DeletePreviousOptions();
    VisitorDialog();
    EnqueueFunction(function(){
        LucasDialog();
    });
    EnqueueFunction(function(){
        UpdateOptions();
        StopScrollInterval();
    });
}

function EnqueueFunction(delayedFunction){
    queuedFunctions.push(delayedFunction);
    if(executeQueuedFunctionsInterval == null){
        StartQueuedFunctionsInterval();
    }
}

function ExecuteQueuedFunctions(){
    allowUserInteraction=false;
    let toExecute = queuedFunctions.shift();
    if(toExecute != null){
        toExecute();
    }
    else{
        allowUserInteraction = true;
        clearInterval(executeQueuedFunctionsInterval);
        executeQueuedFunctionsInterval = null;
    }
}
window.onload = Start;
queuedFunctions = [];
allowUserInteraction = false;
executeQueuedFunctionsInterval = null;
scrollInterval = null;

function Start(){
    GenerateStates();
    EnqueueFunction(function(){LucasDialog();});
    EnqueueFunction(function(){UpdateOptions();});
    let body = document.getElementsByTagName("body");
}

function StartScrollInterval(){
    window.scrollTo(0, document.body.scrollHeight);
    scrollInterval = setInterval(function(){window.scrollBy({
        top: 12,
        left: 0,
        behavior: "smooth",
      });}, 30);
}

function StopScrollInterval(){
    if(scrollInterval != null){
        clearInterval(scrollInterval);
        scrollInterval=null;
    }
}

function StartQueuedFunctionsInterval(){
    executeQueuedFunctionsInterval = setInterval(function(){ExecuteQueuedFunctions()}, 900);
}

function LucasDialog(){
    chatContainer = document.getElementById("chatContainer");
    dialogA = NewLucasMessage("./images/lucasIcon.png", currentState.lucasMessage());
    chatContainer.appendChild(dialogA);
}

function VisitorDialog(){
    let chatContainer = document.getElementById("chatContainer");
    let dialog = NewVisitorMessage("./images/visitorIcon.png", currentState.visitorMessage());
    chatContainer.appendChild(dialog);
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
states = [];

function GenerateStates(){
    let backToExperienceState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(experienceState)});
    let backToTrainingState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(trainingState)});
    let backToGamesPortfolioState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(gamesPortfolioState)});
    let backToAndroidPortfolioState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(androidAppsportfolio)});
    let backToPortfolioState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(portfolioState)});
    let backToInitialState = NewState(null, function(){return GetDialogLine("goToInit")}, null, function(){GoBack(initialState)});
    let backToLivemediaState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(livemediaState)});
    let backToSeaPetsWorkStore = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(SeaPetsWorkState)});
    let specialty = NewState([backToInitialState], function(){return GetDialogLine("specialtyQuestion")}, CreateSpecialityMessage, null);
    states.push(specialty);
    //----Bots chaos----
    let backToBotsChaosState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(botsChaosState)});
    let botsChaosIdea = NewState([backToBotsChaosState, backToInitialState], function(){return GetDialogLine("gameIdeaQuestion")}, CreateGeneralIdeaBotsChaos, null);
    let botsChaosImprovements = NewState([backToBotsChaosState, backToInitialState], function(){return GetDialogLine("possibleImprovements")}, CreateBotsChaosImprovementsMessage, null);
    let botsChaosStoreState = NewState([backToBotsChaosState, backToInitialState], function(){return GetDialogLine("showStoresLinks")}, CreateBotsChaosStoreMessage, null);
    let botsChaosState = NewState([botsChaosIdea, botsChaosImprovements, botsChaosStoreState, backToGamesPortfolioState, backToInitialState], function(){return GetDialogLine("botsChaos")}, CreateBotsChaosMessage, null);
    //----Genius at work----
    let backToGeniusAtWorkState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(geniusAtWorkState)});
    let geniusAtWorkIdea = NewState([backToGeniusAtWorkState, backToInitialState], function(){return GetDialogLine("gameIdeaQuestion")}, CreateGeneralIdeaGAW, null);
    let geniusAtWorkImprovements = NewState([backToGeniusAtWorkState, backToInitialState], function(){return GetDialogLine("possibleImprovements")}, CreateGawImprovementsMessage, null);
    let geniusAtWorkStoreState = NewState([backToGeniusAtWorkState, backToInitialState], function(){return GetDialogLine("showStoresLinks")}, CreateGeniusAtWorkStoreMessage, null);
    let geniusAtWorkState = NewState([geniusAtWorkIdea, geniusAtWorkImprovements, geniusAtWorkStoreState, backToGamesPortfolioState, backToInitialState], function(){return GetDialogLine("geniusAtWork")}, CreateGeniusAtWorkMessage, null);
    //----Quadruped match-------
    let backToQuadrupedMatcState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(quadrupedMatchState)});
    let quadrupedMatchStoreState = NewState([backToQuadrupedMatcState, backToInitialState], function(){return GetDialogLine("showStoresLinks")}, CreateQuadrupedMatchStoreMessage, null);
    let quadrupedMatchState = NewState([quadrupedMatchStoreState, backToGamesPortfolioState, backToInitialState], function(){return GetDialogLine("quadrupedMatch")}, CreateQuadrupedMatchMessage, null);
    //-----Proto akane----
    let backToProtoAkaneState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(protoAkaneState)});
    let protoAkaneStoreState = NewState([backToProtoAkaneState, backToInitialState], function(){return GetDialogLine("showStoresLinks")}, CreateProtoAkaneStoreMessage, null);
    let protoAkaneState = NewState([protoAkaneStoreState, backToGamesPortfolioState, backToInitialState], function(){return GetDialogLine("protoAkane")}, CreateProtoAkaneMessage, null);
    //-----Mecha Snake-----
    let backToMechaSnakeState = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(mechaSnakeState)});
    let mechaSnakeStoreState = NewState([backToMechaSnakeState, backToInitialState], function(){return GetDialogLine("showStoresLinks")}, CreateMechaSnakeStoreMessage, null);
    let mechaSnakeState = NewState([mechaSnakeStoreState, backToGamesPortfolioState, backToInitialState], function(){return GetDialogLine("mechaSnake")}, CreateMechaSnakeMessage, null);
    //------Sea Pets-------
    let backToSeaPets = NewState(null, function(){return GetDialogLine("goBack")}, null, function(){GoBack(SeaPetsState)});
    let seaPetsStoreState = NewState([backToSeaPets, backToInitialState], function(){return GetDialogLine("showStoresLinks")}, CreateSeaPetsStoreMessage, null);
    let SeaPetsState = NewState([seaPetsStoreState, backToGamesPortfolioState, backToInitialState], function(){return GetDialogLine("seaPets")}, CreateSeaPetsMessage, null);
    let seaPetsWorkStoreState = NewState([backToSeaPetsWorkStore, backToInitialState], function(){return GetDialogLine("showStoresLinks")}, CreateSeaPetsStoreMessage, null);
    let SeaPetsWorkState = NewState([seaPetsWorkStoreState, backToLivemediaState, backToInitialState], function(){return GetDialogLine("seaPets")}, CreateSeaPetsMessage, null);
    //-----Mobiamp---------
    let mobiampState = NewState([backToAndroidPortfolioState, backToInitialState], function(){return GetDialogLine("mobiAmp")}, CreateMobiAmpMessage, null);
    //----Zeta Explorer----
    let zetaExplorerState = NewState([backToAndroidPortfolioState, backToInitialState], function(){return GetDialogLine("zetaExplorer")}, CreateZetaExplorerMessage, null);
    //---------------------
    let gamesPortfolioState = NewState([botsChaosState, geniusAtWorkState, quadrupedMatchState, protoAkaneState, mechaSnakeState, SeaPetsState, backToPortfolioState, backToInitialState], function(){return GetDialogLine("gamesQuestion")}, CreateGamesPortfolioMessage, null);
    let androidAppsportfolio = NewState([mobiampState, zetaExplorerState, backToPortfolioState, backToInitialState], function(){return GetDialogLine("androidAppsQuestion")}, CreateAndroidAplicationsMessage, null);
    let webPortfolio = NewState([backToPortfolioState, backToInitialState], function(){return GetDialogLine("webAppsQuestion")}, CreateWebPortfolioMessage, null);
    let portfolioState = NewState([gamesPortfolioState, androidAppsportfolio, webPortfolio, backToInitialState], function(){return GetDialogLine("portfolioQuestion")}, CreatePortfolioMessage, null);
    // State: experience
    let laAnonimaState = NewState([backToExperienceState, backToInitialState], function(){return GetDialogLine("laAnonimaQuestion")}, CreateLaAnonimaMessage, null);
    let livemediaState = NewState([SeaPetsWorkState, backToExperienceState, backToInitialState], function(){return GetDialogLine("LivemediaQuestion")}, CreateLivemediaMessage, null);
    let independentState = NewState([portfolioState, backToExperienceState, backToInitialState], function(){return GetDialogLine("independentQuestion")}, CreateIndependentMessage, null);
    let experienceState = NewState([independentState, livemediaState, laAnonimaState, backToInitialState], function(){return GetDialogLine("jobExperienceQuestion")}, CreateExperienceMessage, null);
    states.push(experienceState);
    //----Education----
    let trainingS21state = NewState([backToTrainingState, backToInitialState], function(){return GetDialogLine("siglo21Question")}, CreateSiglo21Message , null);
    let trainingISSDstate = NewState([backToTrainingState, backToInitialState], function(){return GetDialogLine("issdQuestion")}, CreateIssdMessage, null);
    let trainingCodoACodo = NewState([backToTrainingState, backToInitialState], function(){return GetDialogLine("codoAcodoQuestion")}, CreateCodoACodoMessage, null);
    let trainingState = NewState([trainingS21state, trainingISSDstate, trainingCodoACodo, backToInitialState], function(){return GetDialogLine("trainingQuestion")}, CreateTrainingMessage, null);
    states.push(trainingState);
    //---------------
    states.push(portfolioState);
    let personalInformationState = NewState([backToInitialState], function(){return GetDialogLine("personalInfoQuestion")}, CreatePersonalInformationMessage, null);
    states.push(personalInformationState);
    let miniGameState = NewState([backToInitialState], function(){return GetDialogLine("gameQuestion")}, CreateGameMessage, null);
    states.push(miniGameState);
    let switchToSpanishState = NewState([backToInitialState], function(){return GetDialogLine("InSpanish")}, CreateToSpanishMessage, function(){SelectSpanish()});
    let switchToEnglishState = NewState([switchToSpanishState, backToInitialState], function(){return GetDialogLine("InEnglishPlease")}, CreateToEnglishMessage, function(){SelectEnglish()});
    let initialState = NewState(states, function(){return GetDialogLine("goToInit")}, CreateIitialMessage, null);
    let presentationState = NewState([initialState, switchToEnglishState], "x", CreatePresentationMessage, null);
    currentState = presentationState;
}

function NewState(childStates, visitormessage, lucasmessage, actionToPerform){
    let state = {childs: childStates, visitorMessage: visitormessage, lucasMessage: lucasmessage, action: actionToPerform};
    return state;
}

function SelectChild(selectedIndex){
    previousState = currentState;
    currentState = currentState.childs[selectedIndex];
    if(currentState.action != null){
        currentState.action();
    }
}

function GoBack(targetState){
    currentState = targetState;
}

function CreatePresentationMessage(){
    let creatMesagge = CreateMessage();
    let messaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(GetDialogLine("presentationA"));
    messaageLine1.appendChild(textnode);
    creatMesagge.appendChild(messaageLine1);
    let messaageLine2 = CreateMessageLine();
    let textnode2 = document.createTextNode("He creado este chat el cuál reemplaza a un sitio web completo. Es capaz de mostrar imágenes, videos... ¡y hasta puedes jugar videojuegos en él!");
    messaageLine2.appendChild(textnode2);
    creatMesagge.appendChild(messaageLine2);
    return creatMesagge;
}

function CreateGenericTextMessage(textMessage){
    let creatMesagge = CreateMessage();
    let textnode = document.createTextNode(textMessage);
    creatMesagge.appendChild(textnode);
    return creatMesagge;
}

function CreateIitialMessage(){
    let creatMesagge = CreateMessage();
    let textnode = document.createTextNode(GetDialogLine("initial"));
    creatMesagge.appendChild(textnode);
    return creatMesagge;
}

function CreateToEnglishMessage(){
    return CreateGenericTextMessage("OK!");
}

function CreateToSpanishMessage(){
    return CreateGenericTextMessage("¡De acuerdo!");
}

function CreateSpecialityMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let strongTag = document.createElement("strong");
    let textnode1 = document.createTextNode(GetDialogLine("specialtyA"));
    strongTag.appendChild(textnode1);
    mesaageLine1.appendChild(strongTag);
    let mesaageLine2 = CreateMessageLine();
    let textnode2 = document.createTextNode(GetDialogLine("specialtyB"));
    mesaageLine2.classList = "underline-text";
    mesaageLine2.appendChild(textnode2);
    let skillsLine1 = CreateMessageLine();
    skillsLine1.appendChild(NewUnitySkill());
    skillsLine1.appendChild(NewCsharpSkill());
    skillsLine1.appendChild(NewOopSkill());
    skillsLine1.appendChild(NewBlenderSkill());
    let mesaageLine3 = CreateMessageLine();
    let textnode3 = document.createTextNode(GetDialogLine("specialtyC"));
    mesaageLine3.appendChild(textnode3);
    mesaageLine3.classList = "underline-text";
    let skillsLine2 = CreateMessageLine();
    skillsLine2.appendChild(NewJavaSkill());
    skillsLine2.appendChild(NewAndroidStudioSkill());
    skillsLine2.appendChild(NewOopSkill());
    let mesaageLine4 = CreateMessageLine();
    let textnode4 = document.createTextNode(GetDialogLine("specialtyD"));
    mesaageLine4.appendChild(textnode4);
    mesaageLine4.classList = "underline-text";
    let skillsLine3 = CreateMessageLine();
    skillsLine3.appendChild(NewHtmlSkill());
    skillsLine3.appendChild(NewCssSkill());
    skillsLine3.appendChild(NewJavascriptSkill());
    skillsLine3.appendChild(NewPhpSkill());
    skillsLine3.appendChild(NewMysqlSkill());
    skillsLine3.appendChild(NewGitSkill());
    creatMesagge.appendChild(mesaageLine1);
    creatMesagge.appendChild(mesaageLine2);
    creatMesagge.appendChild(skillsLine1);
    creatMesagge.appendChild(mesaageLine3);
    creatMesagge.appendChild(skillsLine2);
    creatMesagge.appendChild(mesaageLine4);
    creatMesagge.appendChild(skillsLine3);
    let mesaageLine5 = CreateMessageLine();
    let strongTag2 = document.createElement("strong");
    let textnode5 = document.createTextNode(GetDialogLine("specialtyE"));    
    strongTag2.appendChild(textnode5);
    mesaageLine5.appendChild(strongTag2);
    let mesaageLine6 = CreateMessageLine();
    mesaageLine6.appendChild(NewElectricitySkill());
    mesaageLine6.appendChild(NewElectronicsSkill());
    creatMesagge.appendChild(mesaageLine5);
    creatMesagge.appendChild(mesaageLine6);
    return creatMesagge;
}

function CreateLaAnonimaMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let textnode1 = document.createTextNode(GetDialogLine("laAnonimaA"));
    mesaageLine1.appendChild(textnode1);
    let laAnonimaLogo = NewSmallImage("./images/laanonima_logo.jpeg");
    mesaageLine1.appendChild(laAnonimaLogo);
    let textnode2 = document.createTextNode(GetDialogLine("laAnonimaB"));
    mesaageLine1.appendChild(textnode2);
    creatMesagge.appendChild(mesaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let photo1 = NewMediumPortraitImage("./images/laanonima_logo.jpeg", "Logo");
    mesaageLine2.appendChild(photo1);
    creatMesagge.appendChild(mesaageLine2);
    let mesaageLine3 = CreateMessageLine();
    let textnode5 = document.createTextNode(GetDialogLine("laAnonimaC"));
    mesaageLine3.appendChild(textnode5);
    creatMesagge.appendChild(mesaageLine3);
    return creatMesagge;
}

function CreateLivemediaMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let textnode1 = document.createTextNode(GetDialogLine("LivemediaA"));
    mesaageLine1.appendChild(textnode1);
    let laAnonimaLogo = NewSmallImage("./images/livemedialogo.jpeg");
    mesaageLine1.appendChild(laAnonimaLogo);
    let textnode2 = document.createTextNode(GetDialogLine("LivemediaB"));
    mesaageLine1.appendChild(textnode2);
    creatMesagge.appendChild(mesaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let photo1 = NewMediumPortraitImage("./images/ligthsOff.webp", "Ligths Off (Móviles)");
    mesaageLine2.appendChild(photo1);
    let photo2 = NewMediumPortraitImage("./images/seaPets.webp", "Sea Pets (Móviles)");
    mesaageLine2.appendChild(photo2);
    creatMesagge.appendChild(mesaageLine2);
    let mesaageLine3 = CreateMessageLine();
    let textnode5 = document.createTextNode(GetDialogLine("LivemediaC"));
    mesaageLine3.appendChild(textnode5);
    creatMesagge.appendChild(mesaageLine3);
    return creatMesagge;
}

function CreateIndependentMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let textnode1 = document.createTextNode(GetDialogLine("IndependentLineA"));
    mesaageLine1.appendChild(textnode1);
    creatMesagge.appendChild(mesaageLine1);
    let messageLine2 = CreateMessageLine();
    let textnode2 = document.createTextNode(GetDialogLine("IndependentLineB"));
    messageLine2.appendChild(textnode2);
    creatMesagge.appendChild(messageLine2);
    let messageLine3 = CreateMessageLine();
    let textnode3 = document.createTextNode(GetDialogLine("IndependentLineC"));
    messageLine3.appendChild(textnode3);
    creatMesagge.appendChild(messageLine3);
    return creatMesagge;
}

function CreateExperienceMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine3 = CreateMessageLine();
    let programmerIcon = NewSmallImage("./images/programmerIcon.png");
    mesaageLine3.appendChild(programmerIcon);
    let textnode5 = document.createTextNode(GetDialogLine("jobExperienceE"));
    mesaageLine3.appendChild(textnode5);
    creatMesagge.appendChild(mesaageLine3);
    let mesaageLine2 = CreateMessageLine();
    let livemediaLogo = NewSmallImage("./images/livemediaLogo.jpeg");
    let textnode4 = document.createTextNode(GetDialogLine("jobExperienceC"));
    mesaageLine2.appendChild(livemediaLogo);
    mesaageLine2.appendChild(textnode4);
    let textnode3 = document.createTextNode(GetDialogLine("jobExperienceD"));
    mesaageLine2.appendChild(textnode3);
    creatMesagge.appendChild(mesaageLine2);
    let mesaageLine1 = CreateMessageLine();
    let laAnonimaLogo = NewSmallImage("./images/laanonima_logo.jpeg");
    let textnode1 = document.createTextNode(GetDialogLine("jobExperienceA"));
    mesaageLine1.appendChild(laAnonimaLogo);
    mesaageLine1.appendChild(textnode1);
    let textnode2 = document.createTextNode(GetDialogLine("jobExperienceB"));
    mesaageLine1.appendChild(textnode2);
    creatMesagge.appendChild(mesaageLine1);
    return creatMesagge;
}

function CreateTrainingMessage(){
    let creatMesagge = CreateMessage();
    let textnode = document.createTextNode(GetDialogLine("trainingA"));
    let textnode2 = document.createTextNode(GetDialogLine("trainingB"));
    let strongTag = document.createElement("strong");
    strongTag.appendChild(textnode2);
    creatMesagge.appendChild(textnode);
    creatMesagge.appendChild(strongTag);
    let textnode3 = document.createTextNode(GetDialogLine("trainingC"));
    creatMesagge.appendChild(textnode3);
    let strongTag2 = document.createElement("strong");
    let textnode4 = document.createTextNode(GetDialogLine("trainingD"));
    strongTag2.appendChild(textnode4);
    creatMesagge.appendChild(strongTag2);
    let textnode5 = document.createTextNode(GetDialogLine("trainingE"));
    creatMesagge.appendChild(textnode5);
    let strongTag3 = document.createElement("strong");
    let textnode6 = document.createTextNode(GetDialogLine("trainingF"));
    strongTag3.appendChild(textnode6);
    creatMesagge.appendChild(strongTag3);
    return creatMesagge;
}

function CreateSiglo21Message(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(GetDialogLine("siglo21LineA"));
    mesaageLine1.appendChild(textnode);
    let siglo21Logo = NewSmallImage("./images/siglo21.jpg");
    mesaageLine1.appendChild(siglo21Logo);
    let textnode2 = document.createTextNode(GetDialogLine("siglo21LineB"));
    mesaageLine1.appendChild(textnode2);
    creatMesagge.appendChild(mesaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let photo1 = NewMediumPortraitImage("./images/siglo21_9.jpg", GetDialogLine("siglo21LineC"));
    mesaageLine2.appendChild(photo1);
    let photo2 = NewMediumPortraitImage("./images/tituloCar.jpg", GetDialogLine("siglo21LineD"));
    mesaageLine2.appendChild(photo2);
    let photo3 = NewMediumPortraitImage("./images/siglo21_3.jpg", GetDialogLine("siglo21LineC"));
    mesaageLine2.appendChild(photo3);
    creatMesagge.appendChild(mesaageLine2);
    let textnode3 = document.createTextNode(GetDialogLine("siglo21LineE"));
    let mesaageLine3 = CreateMessageLine();
    mesaageLine3.appendChild(textnode3);
    creatMesagge.appendChild(mesaageLine3);
    let textnode4 = document.createTextNode(GetDialogLine("siglo21LineF"));
    let mesaageLine4 = CreateMessageLine();
    mesaageLine4.appendChild(textnode4);
    creatMesagge.appendChild(mesaageLine4);
    return creatMesagge;
}

function CreateIssdMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(GetDialogLine("issdLineA"));
    mesaageLine1.appendChild(textnode);
    let siglo21Logo = NewSmallImage("./images/issdLogo.jpg");
    mesaageLine1.appendChild(siglo21Logo);
    let textnode2 = document.createTextNode(GetDialogLine("issdLineB"));
    mesaageLine1.appendChild(textnode2);
    creatMesagge.appendChild(mesaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let photo = NewMediumPortraitImage("./images/issdLogo.jpg", "ISSD");
    mesaageLine2.appendChild(photo);
    let photo1 = NewMediumPortraitImage("./images/issdTeleco.jpg", GetDialogLine("issdLineC"));
    mesaageLine2.appendChild(photo1);
    creatMesagge.appendChild(mesaageLine2);
    let textnode3 = document.createTextNode(GetDialogLine("issdLineD"));
    let mesaageLine3 = CreateMessageLine();
    mesaageLine3.appendChild(textnode3);
    creatMesagge.appendChild(mesaageLine3);
    let textnode4 = document.createTextNode(GetDialogLine("issdLineE"));
    let mesaageLine4 = CreateMessageLine();
    mesaageLine4.appendChild(textnode4);
    creatMesagge.appendChild(mesaageLine4);
    return creatMesagge;
}

function CreateCodoACodoMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(GetDialogLine("codoAcodoA"));
    mesaageLine1.appendChild(textnode);
    creatMesagge.appendChild(mesaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let photo = NewMediumPortraitImage("./images/diplomaCodo.png", "Diploma obtenido");
    mesaageLine2.appendChild(photo);
    creatMesagge.appendChild(mesaageLine2);
    let textnode3 = document.createTextNode(GetDialogLine("codoAcodoB"));
    let mesaageLine3 = CreateMessageLine();
    mesaageLine3.appendChild(textnode3);
    creatMesagge.appendChild(mesaageLine3);
    return creatMesagge;
}

function CreatePersonalInformationMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let myPhoto = NewMediumPortraitImage("./images/myProfileImg.jpg", "");
    mesaageLine1.appendChild(myPhoto);
    creatMesagge.appendChild(mesaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let textnode1 = document.createTextNode(GetDialogLine("personalInfo"));
    mesaageLine2.appendChild(textnode1);
    creatMesagge.appendChild(mesaageLine2);
    let locationMessageLine = CreateMessageLine();
    let locationImg = NewSmallImage("./images/position-icon.png");
    locationMessageLine.appendChild(locationImg);
    let locationText = document.createTextNode("Argentina");
    locationMessageLine.appendChild(locationText);
    creatMesagge.appendChild(locationMessageLine);
    let phoneMessageLine = CreateMessageLine();
    let watssappImg = NewSmallImage("./images/WhatsApp.webp");
    /*phoneMessageLine.appendChild(watssappImg);
    let phoneText = document.createTextNode("Mi teléfono es 549 2473 448788");
    phoneMessageLine.appendChild(phoneText);
    creatMesagge.appendChild(phoneMessageLine);*/
    let mesaageLine3 = CreateMessageLine();
    let linkElement = document.createElement("a");
    linkElement.setAttribute("rel", "noreferrer");
    linkElement.setAttribute("target", "_blank");
    linkElement.href = "mailto:lucaferan@gmail.com";
    let textnode3 = document.createTextNode("Email: lucaferan@gmail.com");
    linkElement.appendChild(textnode3);
    mesaageLine3.appendChild(linkElement);
    creatMesagge.appendChild(mesaageLine3);
    let mesaageLine4 = CreateMessageLine();
    let linkElement2 = document.createElement("a");
    linkElement2.setAttribute("rel", "noreferrer");
    linkElement2.setAttribute("target", "_blank");
    linkElement2.href = "https://www.linkedin.com/in/lucasferr87/";
    let textnode4 = document.createTextNode("Linkedin: /in/lucasferr87");
    linkElement2.appendChild(textnode4);
    mesaageLine4.appendChild(linkElement2);
    creatMesagge.appendChild(mesaageLine4);
    let mesaageLine5 = CreateMessageLine();
    let linkElement3 = document.createElement("a");
    linkElement3.setAttribute("rel", "noreferrer");
    linkElement3.setAttribute("target", "_blank");
    linkElement3.href = "https://github.com/Zku11";
    let textnode5 = document.createTextNode("GitHub: github.com/Zku11");
    linkElement3.appendChild(textnode5);
    mesaageLine5.appendChild(linkElement3);
    creatMesagge.appendChild(mesaageLine5);
    return creatMesagge;
}

function CreateGameMessage(){
    let creatMesagge = CreateMessage();
    let mesaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(GetDialogLine("gameLine"));
    mesaageLine1.appendChild(textnode);
    creatMesagge.appendChild(mesaageLine1);
    let mesaageLine2 = CreateMessageLine();
    mesaageLine2.appendChild(NewRaceGame());
    creatMesagge.appendChild(mesaageLine2);
    return creatMesagge;
}

function CreatePortfolioMessage(){
    return CreateGenericTextMessage(GetDialogLine("portfolioAnswer"));
}

function CreateGamesPortfolioMessage(){
    let creatMesagge = CreateMessage();
    let messaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(GetDialogLine("gamesPortfolio"));
    messaageLine1.appendChild(textnode);
    creatMesagge.appendChild(messaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let botsChaosImg = NewMediumPortraitImage("./images/botsChaosIcon.png", "Bots Chaos");
    mesaageLine2.appendChild(botsChaosImg);
    let gawImg = NewMediumPortraitImage("./images/gawIcon.png", "Genius At Work!");
    mesaageLine2.appendChild(gawImg);
    let protoImg = NewMediumPortraitImage("./images/protoAkane/logo.jpg", "Proto Akane");
    mesaageLine2.appendChild(protoImg);
    let quadrupedImg = NewMediumPortraitImage("./images/quadrupedMatch/logo.png", "Quadruped Match");
    mesaageLine2.appendChild(quadrupedImg);
    let mechaSnakeImg = NewMediumPortraitImage("./images/mechaSnake/logo.jpg", "Mecha Snake");
    mesaageLine2.appendChild(mechaSnakeImg);
    let seaPetsImg = NewMediumPortraitImage("./images/seaPets/logowebp.webp", "Sea Pets");
    mesaageLine2.appendChild(seaPetsImg);
    creatMesagge.appendChild(mesaageLine2);
    return creatMesagge;
}

function CreateAndroidAplicationsMessage(){
    let creatMesagge = CreateMessage();
    let messaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(GetDialogLine("androidAppA"));
    messaageLine1.appendChild(textnode);
    creatMesagge.appendChild(messaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let zetaExplorer = NewMediumPortraitImage("./images/mobiAmp/icon.webp", "Mobiamp music player");
    mesaageLine2.appendChild(zetaExplorer);
    let mobiAmp = NewMediumPortraitImage("./images/zetaExplorer/icon.webp", "Zeta file explorer");
    mesaageLine2.appendChild(mobiAmp);
    creatMesagge.appendChild(mesaageLine2);
    return creatMesagge;
}

function CreateWebPortfolioMessage(){
    let creatMesagge = CreateMessage();
    let messaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(GetDialogLine("webPortfolioA"));
    messaageLine1.appendChild(textnode);
    creatMesagge.appendChild(messaageLine1);
    let mesaageLine2 = CreateMessageLine();
    let textnode2 = document.createTextNode(GetDialogLine("skillsUtilized"));
    let strongTag = document.createElement("strong");
    strongTag.appendChild(textnode2);
    mesaageLine2.appendChild(strongTag);
    mesaageLine2.appendChild(NewHtmlSkill());
    mesaageLine2.appendChild(NewCssSkill());
    mesaageLine2.appendChild(NewJavascriptSkill());
    mesaageLine2.appendChild(NewPhpSkill());
    mesaageLine2.appendChild(NewMysqlSkill());
    mesaageLine2.appendChild(NewGitSkill());
    creatMesagge.appendChild(mesaageLine2);
    let mesaageLine3 =  CreateMessageLine();
    let textnode3 = document.createTextNode(GetDialogLine("webPortfolioB"));
    mesaageLine3.appendChild(textnode3);
    creatMesagge.appendChild(mesaageLine3);
    let mesaageLine5 = CreateMessageLine();
    let linkElement3 = document.createElement("a");
    linkElement3.setAttribute("rel", "noreferrer");
    linkElement3.setAttribute("target", "_blank");
    linkElement3.href = "https://github.com/Zku11";
    let textnode5 = document.createTextNode("GitHub: github.com/Zku11");
    linkElement3.appendChild(textnode5);
    mesaageLine5.appendChild(linkElement3);
    creatMesagge.appendChild(mesaageLine5);
    return creatMesagge;
}

function CreateBotsChaosMessage(){
    return NewPersonalProject("Bots Chaos",
        GetDialogLine("botsChaosdescription"),
        ["./images/botschaos/screen3.png", "./images/botschaos/screen2.png", "./images/botschaos/screen1.png"],
        "./images/botschaos/trailer.mp4", [NewCsharpSkill(), NewBlenderSkill(), NewUnitySkill()]
    );
}

function CreateGeneralIdeaBotsChaos(){
    return CreateGenericTextMessage(GetDialogLine("botsChaosIdea"));
}

function CreateBotsChaosImprovementsMessage(){
    return CreateGenericTextMessage(GetDialogLine("botsChaosImprovements"));
}

function CreateBotsChaosStoreMessage(){
    return ProjectStoreLinks("https://store.steampowered.com/widget/2336970/", "https://itch.io/embed/1713155");
}

function CreateGeniusAtWorkMessage(){
    return NewPersonalProject("Genius At Work!",
        GetDialogLine("geniusAtWorkDescription"),
        ["./images/geniusAtWork/gawScreenshot1.jpg", "./images/geniusAtWork/gawScreenshot2.jpg", "./images/geniusAtWork/gawScreenshot3.jpg"],
        "./images/geniusAtWork/gawvideo.mp4", [NewCsharpSkill(), NewBlenderSkill(), NewUnitySkill()]
    );
}

function CreateGeneralIdeaGAW(){
    return CreateGenericTextMessage(GetDialogLine("geniusAtWorkIdea"));
}

function CreateGawImprovementsMessage(){
    return CreateGenericTextMessage(GetDialogLine("geniusAtWorkImprovements"));
}

function CreateGeniusAtWorkStoreMessage(){
    return ProjectStoreLinks("https://store.steampowered.com/widget/1467580/", "https://itch.io/embed/829230");
}

function CreateQuadrupedMatchMessage(){
    return NewPersonalProject("Quadruped Match",
        GetDialogLine("quadrupedMtachDescription"),
        ["./images/quadrupedMatch/screenshot1.png", "./images/quadrupedMatch/screenshot2.png", "./images/quadrupedMatch/screenshot3.png"],
        "./images/quadrupedMatch/trailer.mp4", [NewCsharpSkill(), NewBlenderSkill(), NewUnitySkill()]
    );
}

function CreateQuadrupedMatchStoreMessage(){
    return ProjectStoreLinks("https://store.steampowered.com/widget/3328220/");
}

function CreateProtoAkaneMessage(){
    return NewPersonalProject("Proto Akane",
        GetDialogLine("protoAkaneDescription"),
        ["./images/protoAkane/screenshot1.png", "./images/protoAkane/screenshot2.png", "./images/protoAkane/screenshot3.png"],
        "./images/protoAkane/trailer.mp4", [NewCsharpSkill(), NewUnitySkill()]
    );
}

function CreateProtoAkaneStoreMessage(){
    return ProjectStoreLinks("https://store.steampowered.com/widget/1897870/", "https://itch.io/embed/1702558");
}

function CreateMechaSnakeMessage(){
    return NewPersonalProject("Mecha Snake",
        GetDialogLine("mechaSnakeLineDescription"),
        ["./images/mechaSnake/screenshot1.png", "./images/mechaSnake/screenshot2.png", "./images/mechaSnake/screenshot3.png"],
        "./images/mechaSnake/trailer.mp4", [NewCsharpSkill(), NewUnitySkill()]
    );
}

function CreateMechaSnakeStoreMessage(){
    return ProjectStoreLinks("https://store.steampowered.com/widget/1624610/", "https://itch.io/embed/1077850");
}

function CreateMobiAmpMessage(){
    return NewPersonalProject("MobiAmp",
        GetDialogLine("mobiAmpDescription"),
        ["./images/mobiAmp/screen-0.webp", "./images/mobiAmp/screen-1.webp", "./images/mobiAmp/screen-2.webp", "./images/mobiAmp/screen-3.webp"],
        "./images/mobiAmp/video.mp4",
        [NewAndroidStudioSkill(), NewJavaSkill()]
    );
}

function CreateZetaExplorerMessage(){
    return NewPersonalProject("Zeta Explorer",
        GetDialogLine("ZetaExplorerDescription"),
        ["./images/zetaExplorer/screen-0.webp", "./images/zetaExplorer/screen-1.webp", "./images/zetaExplorer/screen-2.webp", "./images/zetaExplorer/screen-3.webp"],
        "./images/zetaExplorer/video.mp4",
        [NewAndroidStudioSkill(), NewJavaSkill()]
    );
}

function CreateSeaPetsMessage(){
    return NewPersonalProject("Sea Pets: Match & Merge (programado para Livemedia)",
        GetDialogLine("seaPetsLineDescription"),
        ["./images/seaPets/screen1.webp", "./images/seaPets/screen2.webp", "./images/seaPets/screen3.webp", "./images/seaPets/screen4.webp"],
        null,
        [NewCsharpSkill(), NewUnitySkill()]
    );
}

function CreateSeaPetsStoreMessage(){
    return ProjectStoreLinks(null, null, "https://play.google.com/store/apps/details?id=com.Livemedia.SeaPetsMatchMerge&pcampaignid=web_share");
}
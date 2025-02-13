function NewSkill(name, iconSrc){
    let containerDiv = document.createElement("div");
    containerDiv.classList = "skill-container";
    let iconImg = document.createElement("img");
    iconImg.classList = "skill-icon";
    iconImg.src = iconSrc;
    containerDiv.appendChild(iconImg);
    let paragraph = document.createElement("p");
    let text = document.createTextNode(name);
    paragraph.classList = "skill-paragraph";
    paragraph.appendChild(text);
    containerDiv.appendChild(paragraph);
    return containerDiv;
}

function NewCsharpSkill(){
    return NewSkill("C#", "./images/cSharp.svg");
}

function NewUnitySkill(){
    return NewSkill("Unity 3D", "./images/unityLogo.jpg");
}

function NewJavaSkill(){
    return NewSkill("Java", "./images/skillsLogos/java.png");
}

function NewBlenderSkill(){
    return NewSkill("Blender", "./images/skillsLogos/blender.png");
}

function NewHtmlSkill(){
    return NewSkill("HTML5", "./images/skillsLogos/html.png");
}

function NewCssSkill(){
    return NewSkill("CSS", "./images/skillsLogos/css.png");
}

function NewJavascriptSkill(){
    return NewSkill("Javascript", "./images/skillsLogos/javascript.png");
}

function NewPhpSkill(){
    return NewSkill("PHP", "./images/skillsLogos/php.png");
}

function NewMysqlSkill(){
    return NewSkill("MySql", "./images/skillsLogos/mysql.png");
}

function NewOopSkill(){
    return NewSkill(GetDialogLine("oopProgramming"), "./images/skillsLogos/oop.png");
}

function NewAndroidStudioSkill(){
    return NewSkill("Android Studio", "./images/skillsLogos/androidStudio.png");
}

function NewGitSkill(){
    return NewSkill("Git", "./images/skillsLogos/git.png");
}

function NewElectricitySkill(){
    return NewSkill(GetDialogLine("elecytricitySkill"), "./images/skillsLogos/electricityIcon.png");
}

function NewElectronicsSkill(){
    return NewSkill(GetDialogLine("ElectronicsSkill"), "./images/skillsLogos/elecronicsIcon.png");
}
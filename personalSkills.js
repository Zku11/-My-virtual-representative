function NewSkill(name, iconSrc, level){
    let containerDiv = document.createElement("div");
    containerDiv.classList = "skill-container";
    let levelImgSrc;
    switch(level){
        case 0:
            levelImgSrc = "./images/basicSkill.png";
            break;
        case 1:
            levelImgSrc = "./images/intermediateSkill.png";
            break;
        case 2:
            levelImgSrc = "./images/goodSkill.png";
            break;
        default:
            levelImgSrc = "./images/intermediateSkill.png";
            break;
    }
    let levelImage = NewSmallImage(levelImgSrc);
    containerDiv.appendChild(levelImage);
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

function NewVideoEditingSkill(){
    return NewSkill(GetDialogLine("videoEditingSkill"), "./images/videoEditingIcon.png", 0);
}

function NewDesignPatternsSkill(){
    return NewSkill(GetDialogLine("designPatternsSkill"), "./images/designPatternsIcon.jpg", 2);
}

function NewCsharpSkill(){
    return NewSkill("C#", "./images/cSharp.svg", 2);
}

function NewUnitySkill(){
    return NewSkill("Unity 3D", "./images/unityLogo.jpg", 2);
}

function NewJavaSkill(){
    return NewSkill("Java", "./images/skillsLogos/java.png", 2);
}

function NewBlenderSkill(){
    return NewSkill("Blender", "./images/skillsLogos/blender.png", 0);
}

function NewHtmlSkill(){
    return NewSkill("HTML5", "./images/skillsLogos/html.png", 2);
}

function NewCssSkill(){
    return NewSkill("CSS", "./images/skillsLogos/css.png", 1);
}

function NewJavascriptSkill(){
    return NewSkill("Javascript", "./images/skillsLogos/javascript.png", 1);
}

function NewPhpSkill(){
    return NewSkill("PHP", "./images/skillsLogos/php.png", 1);
}

function NewMysqlSkill(){
    return NewSkill("MySql", "./images/skillsLogos/mysql.png", 0);
}

function NewOopSkill(){
    return NewSkill(GetDialogLine("oopProgramming"), "./images/skillsLogos/oop.png", 2);
}

function NewAndroidStudioSkill(){
    return NewSkill("Android Studio", "./images/skillsLogos/androidStudio.png", 1);
}

function NewGitSkill(){
    return NewSkill("Git", "./images/skillsLogos/git.png", 0);
}

function NewElectricitySkill(){
    return NewSkill(GetDialogLine("elecytricitySkill"), "./images/skillsLogos/electricityIcon.png", 1);
}

function NewElectronicsSkill(){
    return NewSkill(GetDialogLine("ElectronicsSkill"), "./images/skillsLogos/elecronicsIcon.png", 2);
}
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
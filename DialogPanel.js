function NewLucasMessage(profileImageSrc, message){
    let containerDiv = document.createElement("div");
    containerDiv.classList = "dialog-panel left-dialog-margin";
    let profileImg = document.createElement("img");
    profileImg.classList = "profile-icon";
    profileImg.src = profileImageSrc;
    containerDiv.appendChild(profileImg);
    let paragraph = document.createElement("p");
    paragraph.classList = "dialog-paragraph";
    let nameParagraph = document.createElement("p");
    nameParagraph.classList = "chat-username";
    let lucasName = document.createTextNode("Lucas Antu Fernández");
    nameParagraph.appendChild(lucasName);
    paragraph.appendChild(message);
    containerDiv.appendChild(nameParagraph);
    containerDiv.appendChild(paragraph);
    return containerDiv;
}

function NewVisitorMessage(profileImageSrc, message){
    containerDiv = document.createElement("div");
    containerDiv.classList = "dialog-panel reverse-row rigth-dialog-margin";
    profileImg = document.createElement("img");
    profileImg.classList = "profile-icon";
    profileImg.src = profileImageSrc;
    paragraph = document.createElement("p");
    paragraph.classList = "dialog-paragraph";
    textnode = document.createTextNode(message);
    paragraph.appendChild(textnode);
    containerDiv.appendChild(profileImg);
    let nameParagraph = document.createElement("p");
    nameParagraph.classList = "chat-username";
    let visitorName = document.createTextNode("Tú");
    nameParagraph.appendChild(visitorName);
    containerDiv.appendChild(nameParagraph);
    containerDiv.appendChild(paragraph);
    return containerDiv;
}

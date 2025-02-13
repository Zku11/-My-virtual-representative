function NewSmallImage(imageSrc){
    let smallImg = document.createElement("img");
    smallImg.classList = "small-dialog-image";
    smallImg.src = imageSrc;
    return smallImg;
}

function NewMediumLandscapeImage(imageSrc, imgDescription){
    let containerDiv = document.createElement("div");
    containerDiv.classList = "image-card";
    let img = document.createElement("img");
    img.classList = "medium-landscape-dialog-image";
    img.src = imageSrc;
    containerDiv.appendChild(img);
    let description = document.createElement("p");
    let text = document.createTextNode(imgDescription);
    description.classList = "image-card-text";
    description.appendChild(text);
    containerDiv.appendChild(description);
    return containerDiv;
}

function NewMediumPortraitImage(imageSrc, imgDescription){
    let containerDiv = document.createElement("div");
    containerDiv.classList = "image-card";
    let img = document.createElement("img");
    img.classList = "medium-portrait-dialog-image";
    img.src = imageSrc;
    containerDiv.appendChild(img);
    let description = document.createElement("p");
    let text = document.createTextNode(imgDescription);
    description.classList = "image-card-text";
    description.appendChild(text);
    containerDiv.appendChild(description);
    return containerDiv;
}
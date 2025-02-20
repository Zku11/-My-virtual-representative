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
    addZoomEvent(img);
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
    addZoomEvent(img);
    containerDiv.appendChild(img);
    let description = document.createElement("p");
    let text = document.createTextNode(imgDescription);
    description.classList = "image-card-text";
    description.appendChild(text);
    containerDiv.appendChild(description);
    return containerDiv;
}

function addZoomEvent(element){
    element.addEventListener("click", () => {ZoomImage(element.src)});
}

function ZoomImage(imgSrc){
    let image = document.getElementById("zoomedImage");
    image.src = imgSrc;
    let zoomDialog = document.getElementById("imgZoomDialog");
    zoomDialog.addEventListener("click", ()=>{
        let zoomDialog = document.getElementById("imgZoomDialog");
        zoomDialog.close();
    });
    zoomDialog.showModal();
}
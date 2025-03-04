function NewLink(linkSrc, description, iconSrc){
    let linkElement = document.createElement("a");
    linkElement.setAttribute("rel", "noreferrer");
    linkElement.setAttribute("target", "_blank");
    linkElement.href = linkSrc;
    let textnode = document.createTextNode(description);
    linkElement.appendChild(NewSmallImage(iconSrc));
    linkElement.appendChild(textnode);
    return linkElement;
}
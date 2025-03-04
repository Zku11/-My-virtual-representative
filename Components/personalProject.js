function NewPersonalProject(projectName, description, screenShots, videoSrc, skills){
    let creatMesagge = CreateMessage();
    let messaageLine1 = CreateMessageLine();
    let textnode = document.createTextNode(projectName);
    let strongTag = document.createElement("strong");
    strongTag.appendChild(textnode);
    messaageLine1.appendChild(strongTag);
    creatMesagge.appendChild(messaageLine1);
    let messaageLine2 = CreateMessageLine();
    let textnode2 = document.createTextNode(description);
    messaageLine2.appendChild(textnode2);
    creatMesagge.appendChild(messaageLine2);
    let messaageLine3 = CreateMessageLine();
    let strongTag2 = document.createElement("strong");
    let textnode3 = document.createTextNode(GetDialogLine("skillsUtilized"));
    strongTag2.appendChild(textnode3);
    messaageLine3.appendChild(strongTag2);
    skills.forEach(element => {
        messaageLine3.appendChild(element);
    });
    creatMesagge.appendChild(messaageLine3);
    let mesaageLine4 = CreateMessageLine();
    screenShots.forEach(element => {
        let screenShot1 = NewMediumLandscapeImage(element, GetDialogLine("screenShot"));
        mesaageLine4.appendChild(screenShot1);
    });
    creatMesagge.appendChild(mesaageLine4);
    if(videoSrc != null){
        let mesaageLine5 = CreateMessageLine();
        let video = document.createElement("video");
        video.classList = "video-player";
        video.setAttribute("controls", "true");
        video.setAttribute("src", videoSrc);
        let videoNotSupported = document.createTextNode("Tu navegador no soporta video.");
        video.appendChild(videoNotSupported);
        mesaageLine5.appendChild(video);
        creatMesagge.appendChild(mesaageLine5);
    }
    return creatMesagge;
}

function ProjectStoreLinks(steamSrc, itchIoSrc, playstoreSrc){
    let creatMesagge = CreateMessage();
    if(steamSrc){
        let messaageLine1 = CreateMessageLine();
        let textnode1 = document.createTextNode("Steam:");
        messaageLine1.appendChild(textnode1);
        let iframe = document.createElement("iframe");
        iframe.src = steamSrc;
        iframe.classList = "steam-iframe";
        iframe.setAttribute("frameborder", "0");
        messaageLine1.appendChild(iframe);
        creatMesagge.appendChild(messaageLine1);
    }
    if(itchIoSrc){
        let mesaageLine2 = CreateMessageLine();
        let textnode2 = document.createTextNode("itch.io:");
        mesaageLine2.appendChild(textnode2);
        let iframe2 = document.createElement("iframe");
        iframe2.src = itchIoSrc;
        iframe2.classList = "itchio-iframe";
        iframe2.setAttribute("frameborder", "0");
        mesaageLine2.appendChild(iframe2);
        creatMesagge.appendChild(mesaageLine2);
    }
    if(playstoreSrc){
        let mesaageLine3 = CreateMessageLine();
        let textnode3 = document.createTextNode("Playstore:");
        mesaageLine3.appendChild(textnode3);
        let mesaageLine4 = CreateMessageLine();
        let linkElement = document.createElement("a");
        linkElement.href = playstoreSrc;
        let textnode4 = document.createTextNode("Enlace: " + playstoreSrc);
        linkElement.setAttribute("rel", "noreferrer");
        linkElement.setAttribute("target", "_blank");
        linkElement.appendChild(textnode4);
        mesaageLine4.appendChild(linkElement);
        creatMesagge.appendChild(mesaageLine3);
        creatMesagge.appendChild(mesaageLine4);
    }
    return creatMesagge;
}
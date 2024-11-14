
const MusicCard = {
    create: ({id,artLink,title,signature,audioLink}) => {
        const musicItemTemplate = document.getElementById("musicitemtemplate");

        const element = musicItemTemplate.content.cloneNode(true);

        const article = element.querySelector("[data-musicid]");
        article.setAttribute("data-musicid", id);

        const musicImage = element.getElementById("musicImage");
        musicImage.src = artLink;
        musicImage.alt = title;

        const musicTitle = element.getElementById("musicTitle");
        musicTitle.textContent = title;

        const musicSignature = element.getElementById("musicSignature");
        musicSignature.innerHTML = signature;

        const musicAudio = element.getElementById("musicAudio");
        musicAudio.src = audioLink;
        musicAudio.setAttribute("title", title);

        return element;
    }
}

module.exports = MusicCard;
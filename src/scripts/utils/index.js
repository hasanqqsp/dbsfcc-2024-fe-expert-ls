function generateMusicItemUsingTemplate({
  id,
  artLink,
  title,
  signature,
  audioLink,
}) {
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

function showLoading() {
  const musicsLoader = document.getElementById("loader");
  musicsLoader.style.display = "block";
}

function hideLoading() {
  const musicsLoader = document.getElementById("loader");
  musicsLoader.style.display = "none";
}


function stopOtherAudio(currentAudio) {
  const listOfAudioElement = document.querySelectorAll("audio");

  listOfAudioElement.forEach((audioElement) => {
    // Others audio will be paused
    if (currentAudio !== audioElement) {
      audioElement.pause();
    }
  });
}

function setupOnlyOneAudioIsPlaying() {
  const listOfAudioElement = document.querySelectorAll("audio");

  listOfAudioElement.forEach((audioElement) => {
    /**
     * See: HTMLMediaElement: play event
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event
     */
    audioElement.addEventListener("play", (event) => {
      const currentAudio = event.currentTarget;
      stopOtherAudio(currentAudio);
    });
  });
}



module.exports = {
  generateMusicItemUsingTemplate,
  showLoading,
  hideLoading,
  setupOnlyOneAudioIsPlaying,
}
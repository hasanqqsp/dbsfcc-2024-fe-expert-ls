

export function generateMusicItemUsingTemplate({
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

  return element;
}

export function showLoading() {
  const musicsLoader = document.getElementById("loader");
  musicsLoader.style.display = "block";
}

export function hideLoading() {
  const musicsLoader = document.getElementById("loader");
  musicsLoader.style.display = "none";
}

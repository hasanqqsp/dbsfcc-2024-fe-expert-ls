export function getAllMusics() {
  return [...musicsSample];
}

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

export function generateMusicItemUsingInnerHTML({
  id,
  artLink,
  title,
  signature,
  audioLink,
}) {
  return `
    <article class="music-list__item" data-musicid="${id}">
      <div class="card">
        <div class="card-image">
          <img id="musicImage" src="${artLink}" alt="${title}" />
        </div>
        <div class="card-body">
          <h3 id="musicTitle" class="card-body__title">${title}</h3>
          <div id="musicSignature" class="card-body__copyright">${signature}</div>
          <audio
            id="musicAudio"
            class="music-list__item__audio"
            controls
            src="${audioLink}"
            type="audio/mp3"
            preload="none"
          ></audio>
        </div>
      </div>
    </article>
  `;
}

export function showLoading() {
  const musicsLoader = document.getElementById("loader");
  musicsLoader.style.display = "block";
}

export function hideLoading() {
  const musicsLoader = document.getElementById("loader");
  musicsLoader.style.display = "none";
}

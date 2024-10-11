import { getAllMusics } from "./api.js";
import {
  generateMusicItemUsingTemplate,
  showLoading,
  hideLoading,
} from "./utils.js";

const drawerButton = document.querySelector("#drawer-button");
const drawerNavigation = document.querySelector("#navList");
const musicListContainer = document.getElementById("musicList");

function setupDrawer() {}

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

function populateWithTemplate(musics) {
  const elements = musics.map((music) => generateMusicItemUsingTemplate(music));
  musicListContainer.append(...elements);
}

async function loadMusics() {
  showLoading();

  try {
    const musics = await getAllMusics();
    populateWithTemplate(musics);
  } catch (error) {
    console.error("Something went error:", error);
  } finally {
    hideLoading();
  }
}

(async function () {
  setupDrawer();

  await loadMusics();
  setupOnlyOneAudioIsPlaying();
})();

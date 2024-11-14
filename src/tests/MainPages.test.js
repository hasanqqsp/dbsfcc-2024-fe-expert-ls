import Home from "../scripts/views/pages/home";
import { mockFetchMusicSuccessfully } from "./mockMusic";
import {setupOnlyOneAudioIsPlaying} from "../scripts/utils";
describe("Main Page", () => {
    let view;
    beforeEach(async () => {
        // render the homepage
        view =  Home;
        document.body.innerHTML = await view.render();
      });

    it("should render main page correctly", () => {
        const heroHeading = document.querySelector('.hero__content > h2');
        const heroDescription = document.querySelector('.hero__content > p');
        const sectionTitle = document.querySelector('section > h2');

        expect(heroHeading.textContent).toEqual("Be Focus and Productive")
        expect(heroDescription.textContent).toEqual("Not just an ordinary headphones. It\'s designed for meditation.")
        expect(sectionTitle.textContent).toEqual("Choose Your Favorite Productive Music")
    })

    it('should render the list of musics correctly when call afterRender', async () => {
        // Arrange
        mockFetchMusicSuccessfully();

        document.body.innerHTML += `<template id="musicitemtemplate">
      <article class="music-list__item" data-musicid="AUDIO_ID">
        <div class="card">
          <div class="card-image">
            <img
              id="musicImage"
              src="https://your-audio.com/01/arts.jpg"
              alt="AUDIO TITLE"
            />
          </div>
          <div class="card-body">
            <h3 id="musicTitle" class="card-body__title">AUDIO TITLE</h3>
            <div id="musicSignature" class="card-body__copyright">
              AUDIO SIGNATURE
            </div>
            <audio
              id="musicAudio"
              class="music-list__item__audio"
              controls
              src="https://your-audio.com/01/audio.mp3"
              type="audio/mp3"
              preload="none"
            ></audio>
            <!-- Untuk saat ini kontrol pada HTMLELement <audio> dan <video> belum 
              aksesibel dengan screen-reader, salah satu alternatif dalam mengatasinya adalah
              dengan membuat custom elemen seperti yang dijelaskan pada halaman berikut
              https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia#creating_custom_audio_and_video_controls -->
          </div>
        </div>
      </article>
    </template>`
        // Action
        await view.afterRender();
    
        // Assertion
        const musicList = document.querySelectorAll('.music-list__item');
        console.log(document.body.innerHTML);
        expect(musicList.length).toEqual(3);
      })
})
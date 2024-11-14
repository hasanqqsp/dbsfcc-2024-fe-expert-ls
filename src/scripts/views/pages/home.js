import { getAllMusics } from "../../data/api";
import { hideLoading, setupOnlyOneAudioIsPlaying, showLoading } from "../../utils";
import MusicCard from "../templates/music-card";

const Home = {
    async render() {
      return `
        <main id="main">
            <section class="hero">
                <article class="hero__content">
                    <h2>Be Focus and Productive</h2>
                    <p>Not just an ordinary headphones. It's designed for meditation.</p>
                    <button>Learn more</button>
                </article>

                <article class="hero__image">
                    <img
                        src="/calm-hero.png"
                        alt="A man wearing calm headphones"
                    />
                </article>
            </section>

            <section class="playlist" id="main">
                <h2 class="section-title">Choose Your Favorite Productive Music</h2>

                <div id="musicList" class="music-list"></div>
                <div id="loader" class="text-center">
                    <span class="loader"></span>
                </div>
            </section>
        </main>
      `;
    },
   
    async afterRender() {
        document.querySelector("main").classList.add("container")
        document.querySelector("main").classList.add("main-container");
        
        showLoading();
        const musicListContainer = document.getElementById("musicList");
        try {
            const musics = await getAllMusics();
            const musicElements = musics.map((music) => MusicCard.create(music));
            musicListContainer.append(...musicElements)
        } catch (error) {
            console.error("Something went error:", error);
        } finally {
            hideLoading();
            // setupOnlyOneAudioIsPlaying();
        }
    },
  };
   
  export default Home;
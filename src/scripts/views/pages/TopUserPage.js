import { GithubLeaderboardAPI } from "../../data/GithubLeaderboardAPI";
import { UserCardTemplate } from "../templates/user-card";
import "../../../styles/top-user.css"

// TODO : Buat Top User Page
export default class TopUserPage {
    render(){
        this._setTitle()
        return `
            <section id="main" class="container" tabindex="0">
                <h2>Top Github Users</h2>
                <p>Daftar pengguna github dengan jumlah followers terbanyak</p>
                <div class="loader" aria-label="Sedang Memuat Data"></div>
                <div class="lists">
                </div>
            </section>
    `
    }

    _hideLoading() {
        this.loadingIndicator.style.display = "none"
      }
    
    _showLoading() {
        this.loadingIndicator.style.display = "block"
    }

    _setTitle(){
        document.title = 'Top Users'
    }

    async afterRender(){
        this.loadingIndicator = document.querySelector(".loader");

        this._showLoading()
        const repositoriesData = await GithubLeaderboardAPI.getTopUsersByFollowers()
        repositoriesData.forEach(repo => {
            const repoCard = UserCardTemplate.create(repo)
            document.querySelector('.lists').appendChild(repoCard);
        });
        this._hideLoading()

    }
}
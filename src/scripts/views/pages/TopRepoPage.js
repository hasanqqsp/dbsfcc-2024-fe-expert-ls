import { GithubLeaderboardAPI } from '../../data/GithubLeaderboardAPI'
import { RepoCardTemplate } from '../templates/repo-card'
import '../../../styles/top-repo.css'
import { Jumbotron } from '../templates/jumbotron'

// TODO : Buat Top Repo Page
export default class TopRepoPage {
  render() {
    this._setTitle()
    return `
        ${Jumbotron.create()}
        <section id="main" class="container" tabindex="0">
            <h2>Top Public Repositories</h2>
            <p>Daftar repositori publik dengan jumlah stars terbanyak</p>
            <div class="loader" aria-label="Sedang Memuat Data"></div>
            <div class="lists">
            </div>
        </section>

    `
  }

  _hideLoading() {
    this.loadingIndicator.style.display = 'none'
  }

  _showLoading() {
    this.loadingIndicator.style.display = 'block'
  }

  _setTitle() {
    document.title = 'Top Repositories'
  }

  async afterRender() {
    this.loadingIndicator = document.querySelector('.loader')

    this._showLoading()
    const repositoriesData =
      await GithubLeaderboardAPI.getTopRepositoriesByStars()
    repositoriesData.forEach((repo) => {
      const repoCard = RepoCardTemplate.create(repo)
      document.querySelector('.lists').appendChild(repoCard)
    })
    this._hideLoading()
  }
}

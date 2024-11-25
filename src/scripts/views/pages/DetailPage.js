import '../../../styles/detail-repo.css';
import UrlParser from '../../routes/url-parser';
import { GithubRestAPI } from '../../data/GithubRestAPI';
import { DetailRepoTemplate } from '../templates/detail-repo';
import { TopContributorTemplate } from '../templates/repo-top-contributor';
import FavoriteRepoIdb from '../../data/FavoriteRepoIdb';


export default class DetailPage {
  constructor(){
    this._addRepoToFavorite = this._addRepoToFavorite.bind(this);
    this._deleteRepoFromFavorite = this._deleteRepoFromFavorite.bind(this);
  }
  render() {
    this._setTitle();
    return `
            <section id="main" class="container" tabindex="0">
                <div class="loader" aria-label="Sedang Memuat Data"></div>
            </section>
    `;
  }

  _hideLoading() {
    document.querySelector('.loader').style.display = 'none';
  }

  _showLoading() {
    document.querySelector('.loader').style.display = 'block';
  }

  _setTitle(repoName) {
    document.title = repoName;
  }

  async afterRender() {
    this.loadingIndicator = document.querySelector('.loader');
    const { repoOwner, repoName } = UrlParser.parseActiveUrlWithoutCombiner(
      window.location.hash
    );

    this._showLoading();
    const repository = await GithubRestAPI.getRepositoryByFullName(
      repoOwner,
      repoName
    );
    this._repository = repository;
    this._setTitle(repository.name);
    const contributors = await GithubRestAPI.getContributorByFullName(
      repoOwner,
      repoName
    );
    const main = document.getElementById('main');
    const isLiked = await this._isRepoExist(this._repository.id);
    console.log(isLiked);
    console.log(DetailRepoTemplate.create(
      repository,
      isLiked
    ).innerHTML);
    main.innerHTML += DetailRepoTemplate.create(
      repository,
      isLiked
    ).innerHTML;

    this.loadingIndicator = document.querySelector('.loader');

    main.innerHTML += TopContributorTemplate.create(contributors);
    this._hideLoading();

    const likeButton = document.getElementById('likeButton');
    if (isLiked){
      likeButton.removeEventListener('click', this._addRepoToFavorite);
      likeButton.addEventListener('click', this._deleteRepoFromFavorite);
    } else {
      likeButton.addEventListener('click', this._addRepoToFavorite);
      likeButton.removeEventListener('click', this._deleteRepoFromFavorite);
    }

    // document.getElementById('likeButton').addEventListener('click', this._addRepoToFavorite);
  }

  async _reRender(){
    document.getElementById('main').innerHTML = this.render();
  }

  async _addRepoToFavorite() {
    FavoriteRepoIdb.putRepo(this._repository);
    this._reRender();
    this.afterRender();
  }
  async _deleteRepoFromFavorite() {
    FavoriteRepoIdb.deleteRepo(this._repository.id);
    this._reRender();
    this.afterRender();
  }

  async _isRepoExist(id) {
    const repo = await FavoriteRepoIdb.getRepo(id);
    return !!repo;
  }
}

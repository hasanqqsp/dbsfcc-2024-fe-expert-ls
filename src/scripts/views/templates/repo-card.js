import { formatNumber } from '../../utils/format-number';


export const RepoCardTemplate = {

  create : (repo) => {
    const repoCard = document.createElement('div');
    repoCard.classList.add('card');
    repoCard.innerHTML =
        `<h3 class="repo-card-title">${repo.name}</h3>
        <p class="repo-card-description">${repo.description}</p>
        <div class="repo-card-body">
            <img src="${repo.owner.avatar_url}" alt="${repo.owner.login} avatar" class="card-avatar">
            <div class="right">
                <div class="repo-stats">
                    <p><span class="visually-hidden">Jumlah Stars</span><i class="fa-solid fa-star"></i> <span>${formatNumber(repo.stargazers_count)}</span></p>
                    <p><span class="visually-hidden">Jumlah Forks</span><i class="fa-solid fa-code-fork"></i> ${formatNumber(repo.forks_count)}</p>
                    <p><span class="visually-hidden">Jumlah Pemantau</span><i class="fa-solid fa-eye"></i> ${formatNumber(repo.watchers_count)}</p>
                </div>
                <a aria-label="Kunjungi Repo" href="#/repositories/${repo.html_url.replace('https://github.com/', '')}" class="visit-github"><i class="fa-brands fa-github"></i> Detail</a>
            </div>
        </div>`;

    return repoCard;
  }
};
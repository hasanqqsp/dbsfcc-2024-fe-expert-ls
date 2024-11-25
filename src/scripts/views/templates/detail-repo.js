import { formatNumber } from '../../utils/format-number';
import { createLikeButtonTemplate, createLikedButtonTemplate } from './like-button';

export const DetailRepoTemplate = {
  create : (repo, isLiked) => {
    const repoCard = document.createElement('div');
    repoCard.classList.add('repo-detail', 'container');
    console.log(isLiked);
    repoCard.innerHTML =
        `
        <div class="repo-detail-body">
            <img src="${repo.owner.avatar_url}" alt="${repo.owner.login} avatar"> 
            <div class="right">
                <h2>${repo.name}</h2>
                <p class="repo-description">${repo.description}</p>
                <div class="repo-badges">
                    <span class="badge license">${repo.license ? 'Lisensi' : repo.license?.spdx_id}</span>
                    ${repo.topics.map((topic) => `<span class="badge topic">${topic}</span>`).join('')}
                </div>
                <div>
                <a aria-label="Kunjungi di Github" href="${repo.html_url}" class="visit-github"><i class="fa-brands fa-github"></i> Kunjungi di Github</a>
                ${isLiked ? createLikedButtonTemplate():createLikeButtonTemplate()}
                </div>
                <div class="repo-stats">
                    <p><span class="visually-hidden">Jumlah Stars</span><i class="fa-solid fa-star"></i> <span>${formatNumber(repo.stargazers_count)}</span></p>
                    <p><span class="visually-hidden">Jumlah Forks</span><i class="fa-solid fa-code-fork"></i> ${formatNumber(repo.forks_count)}</p>
                    <p><span class="visually-hidden">Jumlah Pemantau</span><i class="fa-solid fa-eye"></i> ${formatNumber(repo.watchers_count)}</p>
                </div>
            </div>
        </div>`;

    return repoCard;
  }
};
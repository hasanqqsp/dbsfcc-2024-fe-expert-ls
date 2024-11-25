import { formatNumber } from '../../utils/format-number';

export const UserCardTemplate = {
  create : (user) => {
    const card = document.createElement('div');
    card.classList.add('user-card', 'card');
    card.innerHTML =
        `
            <img src="${user.avatar_url}" alt="${user.name} avatar" class="card-avatar">
            <div class="right">
               <div class="user-card-title">
                    <h3>${user.name}</h3>
                    <p class="user-card-username">(${user.login})</p>
                </div>
                <p class="user-bio">${user.bio || ''}</p>
                
                <div class="user-stats">
                    <p><span class="stat-title">Followers</span><span>${formatNumber(user.followers)}</span></p>
                    <p><span class="stat-title">Repos</span><span>${formatNumber(user.public_repos)}</span></p>
                    <p><span class="stat-title">Gists</span><span>${formatNumber(user.public_gists)}</span></p>
                </div>
                <a aria-label="Kunjungi di Github" target="_blank" href="${user.html_url}" class="visit-github"><i class="fa-brands fa-github"></i> Kunjungi Profil</a>
                
            </div>
        `;
    return card;
  }
};
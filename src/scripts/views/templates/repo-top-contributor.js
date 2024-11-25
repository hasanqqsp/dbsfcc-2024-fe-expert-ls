export const TopContributorTemplate = {
  create : (contributors) => {
    let contributorHTML = `<section class="top-contributor container"><h3>Top Kontributor</h3> 
        <div class="contributor-list">`;
    contributors.forEach((contributor) => {
      contributorHTML += `
                <article class="contributor-item">
                    <img src="${contributor.avatar_url}" alt="${contributor.login}" class="contributor-image">
                    <h4 class="contributor-name">${contributor.login}</h4>
                    <p class="contributor-contribution">Contributions: ${contributor.contributions}</p>
                </article>
            `;
    });
    contributorHTML += '</div></section>';
    return contributorHTML;
  }
};
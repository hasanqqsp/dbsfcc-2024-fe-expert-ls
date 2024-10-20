// TODO : Buat Template Untuk Repository Card 
export const RepoCardTemplate = {
    
    create : (repo) => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('card');
        repoCard.innerHTML = ``

        return repoCard
    }
}
// TODO : Template Untuk User Card 
export const UserCardTemplate = {
    create : (user) => {
        const card = document.createElement('div');
        card.classList.add('user-card','card');
        card.innerHTML =  ``
        return card
    }
}
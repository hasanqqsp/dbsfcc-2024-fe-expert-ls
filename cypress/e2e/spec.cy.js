describe('Example Testing', () => {
  it('Load Website', () => {
    cy.visit('localhost:5500')
  })

  it('Check Navigation Button', () => {
    cy.visit('localhost:5500')

    cy.get('#navigation_blog').contains('Blog')
    cy.get('#navigation_playlist').contains('Playlist')
    cy.get('#navigation_join').contains('Join Calm')
  })

  it('Manipulate Request', () => {
    cy.visit('localhost:5500')

    cy.intercept('GET', 'https://calm-music-api.dicoding.dev/musics', {
      data: {
        musics: [
          {
            artLink:
              'https://calm-music-api.dicoding.dev/assets/arts/01-coverless-book.jpg',
            audioLink:
              'https://calm-music-api.dicoding.dev/assets/musics/01-coverless-book.mp3',
            author: 'Amir Firouzfard',
            id: '01-coverless-book',
            signature:
              'Music by <a href="https://pixabay.com/users/ambientaudiovision-25188255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Amir Firouzfard</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Pixabay</a>',
            title: 'Coverless Books',
          },
        ],
      },
    })
  })
})

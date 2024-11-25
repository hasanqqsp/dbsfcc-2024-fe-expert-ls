describe('template spec', () => {
  it('passes', () => {
    cy.visit('0.0.0.0:9000')

    cy.wait(3000)

    cy.get('[href="#/top-user"]').click()

    cy.wait(3000)

    // cy.get('[class="lists"]').then((element) => {
    //   cy.wrap(element)
    //     .children()
    //     .then((element2) => {
    //       cy.wrap(element2)
    //         .find('h3')
    //         .contains('Evan You')
    //         .then((element3) => {
    //           cy.wrap(element2).find('[class="visit-github"]').click()
    //         })
    //     })
    // })

    cy.get('.lists')
      .find('.card') // Find all cards inside the .lists container
      .each(($card) => {
        cy.wrap($card)
          .find('h3') // Find the h3 inside each card
          .then(($h3) => {
            if ($h3.text().includes('Evan You')) {
              // If h3 contains "Evan You"
              cy.wrap($card) // Wrap the card element again
                .find('.visit-github') // Find the GitHub button
                .should('have.attr', 'href', 'https://github.com/yyx990803') // Ensure URL matches
                .click() // Perform any action like clicking if the URL is correct
            }
          })
      })
  })
})

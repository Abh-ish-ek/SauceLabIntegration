context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })
  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('.action-email')
        .type('fake@email1.com').should('have.value', 'fake@email.com')
  })
})

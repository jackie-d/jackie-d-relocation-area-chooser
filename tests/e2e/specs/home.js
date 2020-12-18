// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Render title', () => {
    cy.visit('http://192.168.178.59:8080/')
    cy.contains('h2', 'Welcome to Relocation Area Chooser')
    cy.get('button').eq(1).click()
    cy.location('pathname').should('match', /\/name$/);
    cy.get('input[type=text]').type('my_name');
    cy.get('button').eq(1).click();
    cy.location('pathname').should('match', /\/cities$/);
    cy.contains('span.navbar-text', 'Hello, my_name!');
    cy.contains('a', 'Settings').click();
    cy.contains('a', 'Language').click();
    cy.get('select').select('de');
    cy.contains('button', 'Change Language').click();
    cy.contains('span.navbar-text', 'Hallo, my_name!');
  })
})

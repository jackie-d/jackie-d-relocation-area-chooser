// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Render title', () => {
    cy.visit('http://localhost:8080')
    cy.contains('h2', 'Find the perfect city for you')
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
    cy.contains('a', 'Die Einstellungen').click();
    cy.contains('a', 'Sprache').click();
    cy.get('select').select('en');
    cy.contains('button', 'Sprache ändern').click();
    cy.wait(3000)
    cy.get('button').eq(1).click();
  })
})

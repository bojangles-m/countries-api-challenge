describe('Index page', () => {
  it('should navigate to Home page', () => {
    cy.visit('http://localhost:3000/');

    // Find a link in header and toggle Dark/Light mode
    cy.get('header button').as('header-button');
    cy.get('@header-button').contains('Dark Mode');
    cy.get('@header-button').click();
    cy.get('@header-button').contains('Light Mode');
  });
});

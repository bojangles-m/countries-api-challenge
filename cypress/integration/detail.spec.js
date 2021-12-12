describe('Detail page', () => {
  it('should navigate to the Belgium Country detail page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/Belgium"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/Belgium');

    // The new page should contain an h1 with "Detail page"
    cy.get('h2').contains('Belgium');
  });
});

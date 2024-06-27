describe('Fincra Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://sandbox.fincra.com/');

    // Enter email
    cy.get('input[name="email"]').type('qa@testing.com');

    // Enter password
    cy.get('input[name="password"]').type('Test@123');

    // Submit the login form
    cy.get('form').submit();

    // Wait for 3 seconds to see dashboard after successful login
    cy.wait(3000);

    // Wait for presence of company logo
    cy.get('.h-8').should('be.visible');
    
    cy.wait(3000);
  });
});

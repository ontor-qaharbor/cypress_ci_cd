it('should log out successfully', () => {
  cy.visit('https://www.saucedemo.com/', { timeout: 120000 });  // Set 2-minute timeout for visit

  // Login steps
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();

  // Log out steps
  cy.get('.bm-burger-button').should('be.visible').click();  // Open the sidebar menu
  cy.get('#logout_sidebar_link').should('be.visible').click();  // Click logout

  // Verify logout success
  cy.url().should('include', '/');
  cy.get('#login-button').should('be.visible');  // Ensure login button is visible again
});

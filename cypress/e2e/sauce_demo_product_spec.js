describe('Sauce Demo Tests', () => {
  
  it('should log in with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/');

    // Login steps
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Verify login success
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('should log out successfully', () => {
    cy.visit('https://www.saucedemo.com/');

    // Login steps
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Log out steps
    cy.get('.bm-burger-button').should('be.visible').click();  // Open the sidebar menu

    // Ensure the logout link is visible before clicking
    cy.get('#logout_sidebar_link').should('be.visible').click();

    // Verify logout success
    cy.url().should('include', '/');
    cy.get('#login-button').should('be.visible');  // Ensure login button is visible again
  });

});

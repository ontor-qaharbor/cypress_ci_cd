describe('Sauce Demo Login', () => {
    it('should log in with valid credentials', () => {
      // Visit the Sauce Demo login page
      cy.visit('https://www.saucedemo.com/');
  
      // Enter username
      cy.get('#user-name').type('standard_user');
  
      // Enter password
      cy.get('#password').type('secret_sauce');
  
      // Click the login button
      cy.get('#login-button').click();
  
      // Assert that we are on the inventory page after login
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');
    });
  });
  
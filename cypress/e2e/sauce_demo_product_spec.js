describe('Sauce Demo Product Tests', () => {

    beforeEach(() => {
      // Log in before each test case
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('should navigate to a product details page and verify content', () => {
      // Click on the first product's link to view details
      cy.get('.inventory_item').first().find('.inventory_item_name').click();
  
      // Verify that we're on the product details page
      cy.url().should('include', '/inventory-item.html');
      
      // Verify the product title and price are displayed
      cy.get('.inventory_details_name').should('exist');
      cy.get('.inventory_details_price').should('exist');
  
      // Additional check for the Add to Cart button
      cy.get('.btn_primary').should('have.text', 'Add to cart');
    });
  
    it('should add a product to the cart and verify cart count', () => {
      // Click on the first product's "Add to cart" button
      cy.get('.inventory_item').first().find('.btn_primary').click();
  
      // Verify that the cart icon shows 1 item
      cy.get('.shopping_cart_badge').should('have.text', '1');
    });
  
  });
  
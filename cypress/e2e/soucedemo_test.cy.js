describe('Saucedemo End-to-End Test', () => {

  it('Login → Add 2 items → Checkout → Finished Orders', () => {

    // Step 1: Go to Login Page
    cy.visit('https://www.saucedemo.com/');
    cy.wait(1000);

    // Step 2: Fill Login Credentials
    cy.get('[data-test="username"]').type('standard_user');
    cy.wait(1000);
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.wait(1000);
    cy.get('[data-test="login-button"]').click();
    cy.wait(1000);

    // Step 3: Add 2 items
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(1000);
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.wait(1000);

    // Step 4: Go to Cart Page
    cy.get('.shopping_cart_link').click();
    cy.wait(1000);

    // Step 5: Verify totals order
    cy.get('.cart_item').should('have.length', 2);
    cy.wait(1000);

    // Step 6: Checkout
    cy.get('[data-test="checkout"]').click();
    cy.wait(1000);

    // Step 7: Fill Checkout Data
    cy.get('[data-test="firstName"]').type('Lisdi');
    cy.wait(1000);
    cy.get('[data-test="lastName"]').type('Ingeu');
    cy.wait(1000);
    cy.get('[data-test="postalCode"]').type('12345');
    cy.wait(1000);
    cy.get('[data-test="continue"]').click();
    cy.wait(1000);

    // Step 8: Finished Order
    cy.get('[data-test="finish"]').click();
    cy.wait(1000);

    // Step 9: Checkout Successed
    cy.contains('Thank you for your order').should('be.visible');
    cy.wait(1500);

  });

});

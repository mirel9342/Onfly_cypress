/// <reference types="Cypress" />

Cypress.Commands.add('verificaProdutos',()=>{
    
    cy.get('[data-test="cart-list"] > :nth-child(3)').should('contain','Sauce Labs Bike Light')
    cy.get(':nth-child(4) > .cart_item_label').should('contain','Sauce Labs Bolt T-Shirt')
});
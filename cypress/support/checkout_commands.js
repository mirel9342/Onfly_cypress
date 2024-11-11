/// <reference types="Cypress" />

Cypress.Commands.add('checkoutProdutos',()=>{
    cy.get('[data-test="firstName"]').type("Ana")
    cy.get('[data-test="lastName"]').type("teste name")
    cy.get('[data-test="postalCode"]').type("53424316839")
});
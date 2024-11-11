describe(' Realizando a comprar de produtos com sucesso ', () => {
    it('Fluxo da compra de produtos', () => {
        cy.visit("https://www.saucedemo.com/ ")
    
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.title').should('contain', 'Products')  

        // os produtos no carrinho 
        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click() 
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        
        // Checagem da quantidade de produtos adcionados no carrinho 
        cy.get('.shopping_cart_link').should('have.text', '2')   
        //check verificar se os produtos entao no carrinho
        cy.get('.shopping_cart_link').click()
        cy.verificaProdutos()

        // checkout
        cy.get('[data-test="checkout"]').click()
        cy.checkoutProdutos()
        cy.get('[data-test="continue"]').click()

        //verificando bo valor total do carrinho:
        cy.verificaProdutos()

        //checagem do valor total:
        cy.get('[data-test="finish"]').click()
          
    }); 
});
 
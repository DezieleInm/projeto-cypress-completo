const cartElements = require("../locators/cartElements")

class cartPage {

// Adiciona um item ao carrinho

    addingToCart() {
        cy.get(cartElements.btnAddToCart).click()
    }
    
// Vai para a página do carrinho
    clickGoToCart() {
        cy.get(cartElements.btnGoToCart).click()
    }
// Valida se o popup de checkout foi exibido
    validateAddedToCart() {
        cy.get(cartElements.btnCheckoutPopup).should('be.visible')
    }
// Valida se o item foi adicionado ao carrinho
    validateItemAdded() {
        cy.get(cartElements.itemAdded).should('be.visible')
    }
// Clica no popup de checkout
    clickToCheckoutPopup() {
        cy.get(cartElements.btnCheckoutPopup).click()
    }
}

module.exports = new cartPage();

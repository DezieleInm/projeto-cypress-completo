const checkoutElements = require("../locators/checkoutElements")

class checkoutPage {
 // Clica no botão de checkout
    
    clickBtnCheckout() {
        cy.get(checkoutElements.btnCheckout).click()
    }
 // Valida se a visão do resumo do pedido está visível
    
    validateOrderPaymentView() {
        cy.get(checkoutElements.orderPaymentView).should('be.visible')
    }
  // Valida se o produto está visível no resumo do pedido
    
    validateProductPaymentView() {
        cy.get(checkoutElements.productToBeValidated).should('be.visible')
    }
}

module.exports = new checkoutPage();

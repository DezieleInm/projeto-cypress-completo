const searchElements = require("../locators/searchElements")

class searchPage {

 // Valida se o título da quantidade de itens retornados está visível
    
    validateListReturned() {
        cy.get(searchElements.titleItemsCount).should('be.visible')
    }

// Valida se o item pesquisado está visível
    
    validateItemReturned() {
        cy.get(searchElements.searchedItem).should('be.visible')
    }
// Clica no item retornado da pesquisa
    
    clickItemReturned() {
        cy.get(searchElements.searchedItem).click()
    }
}

module.exports = new searchPage();

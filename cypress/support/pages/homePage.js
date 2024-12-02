const homeElements = require('../locators/homeElements')

class homePage {
  // Visita a página inicial e valida a visibilidade do logo
    visitHomePage() {
        cy.visit("https://advantageonlineshopping.com/");
        cy.get(homeElements.logoHomepage).should('be.visible')
    }
  // Pesquisa por um produto
    typeToSearch(product) {
        cy.get(homeElements.btnSearch).click()
        cy.get(homeElements.textFieldSearch).type(product).type('{enter}')
    }
}

module.exports = new homePage();

class cartElements {

// Botão de adicionar ao carrinho
    
    get btnAddToCart() {
        return '.fixedBtn > .roboto-medium';
    }
// Botão para ir para o carrinho
    
    get btnGoToCart() {
        return '#shoppingCartLink';
    }
// Botão de checkout no popup
    
    get btnCheckoutPopup() {
        return '#checkOutPopUp';
    }
// Elemento de item adicionado ao carrinho
    
    get itemAdded() {
        return 'a > h3.ng-binding'
    }

}

module.exports = new cartElements();

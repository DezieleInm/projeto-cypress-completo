class checkoutElements {
// Botão de checkout   
    get btnCheckout() {
        return '#checkOutButton';
    }
// Visão do pagamento do pedido
    get orderPaymentView() {
        return '#orderPayment';
    }
// Produto a ser validado no carrinho 
    get productToBeValidated() {
        return '#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > h3.ng-binding';
    }

}

module.exports = new checkoutElements();

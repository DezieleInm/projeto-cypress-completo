class searchElements {
 // Contagem de itens encontrados
    
    get titleItemsCount() {
        return '.titleItemsCount';
    }
 // Item pesquisado (usando um seletor mais específico)
    get searchedItem() {
        return ':nth-child(1) > :nth-child(4) > .productName';
    }

}

module.exports = new searchElements();

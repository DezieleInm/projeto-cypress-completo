class homeElements {
 // Logo da página inicial
    get logoHomepage() {
        return '.logo > a';
    }
// Botão de pesquisa
    get btnSearch() {
        return '#search > a';
    }
// Campo de texto para pesquisa automática
    get textFieldSearch() {
        return '#autoComplete';
    }

}

module.exports = new homeElements();

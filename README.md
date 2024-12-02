# projeto-cypress-completo

# Desafio Web: Automação de Testes - Advantage Online Shopping

## Descrição
Este projeto foi desenvolvido para automatizar os seguintes cenários de teste do site **Advantage Online Shopping**:

- Realizar a busca de um produto.
- Incluir um produto no carrinho.
- Validar os produtos incluídos no carrinho na tela de pagamento.

A automação dos testes foi realizada utilizando o **Cypress** como framework de teste.

## Funcionalidades

### 1. Realizar a busca de um produto:
O teste automatizado busca por um produto específico utilizando a funcionalidade de busca do site **Advantage Online Shopping**. 

### 2. Incluir um produto no carrinho:
Após realizar a busca do produto, o teste clica no produto encontrado e o adiciona ao carrinho.

### 3. Validar os produtos no carrinho:
Na página de pagamento, o teste valida se o produto que foi adicionado ao carrinho está presente na lista de produtos.

## Tecnologias Utilizadas

- **Cypress**: Framework para automação de testes end-to-end.
- **JavaScript**: Linguagem de programação utilizada para escrever os testes.
- **Node.js**: Ambiente de execução de JavaScript.

## Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina. Você pode baixar o Node.js em: https://nodejs.org/.

### Passo 1: Clonar o repositório

Clone o repositório do projeto:

```bash
git clone https://github.com/DezieleInm/projeto-cypress-completo.git

###  Instalar as dependências
npm install

### Excutar o teste
npx cypress open



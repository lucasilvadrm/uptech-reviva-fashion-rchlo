import { estoque } from './estoque.js';
import { verificaLocalStorage } from './funcoes.js';
const estiloBotao = {
    cor: '#C4C4C4',
    texto: 'INDISPONÍVEL'
};
verificaLocalStorage(estoque);
const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos') || '');
const carrinho = JSON.parse(localStorage.getItem('carrinho') || '');
const botoes = document.querySelectorAll('.item__button');
botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        atualizaEstoque(indice + 1, produtosLocalStorage, botao);
    });
});
function decrementarEstoque(produto, botao) {
    if (produto.quantidade_disponivel > 0) {
        produto.quantidade_disponivel--;
        produto.quantidade_carrinho++;
        alert(`Adicionado na sacola! Itens restantes: ${produto.quantidade_disponivel}`);
    }
    else {
        botao.style.backgroundColor = estiloBotao.cor;
        botao.innerHTML = estiloBotao.texto;
        alert(`${produto.nome} sem estoque!`);
    }
}
function atualizaEstoque(id, produtos, botao) {
    const produtosTemp = [...produtos];
    const produto = localizaProdutoPorId(produtosTemp, id);
    if (produto) {
        decrementarEstoque(produto, botao);
        atualizaProdutoLocalStorage(produtosLocalStorage, produto);
        atualizaCarrinhoLocalStorage(produto);
    }
    else {
        throw Error('Produto não existe!');
    }
}
function localizaProdutoPorId(produtos, id) {
    return produtos.find(produto => produto.id === id) || null;
}
function localizaIndiceProdutoPorId(produtos, idProduto) {
    return produtos.findIndex(produto => produto.id === idProduto);
}
function atualizaProdutoLocalStorage(produtosLocalStorage, produto) {
    const capturarIndice = localizaIndiceProdutoPorId(produtosLocalStorage, produto.id);
    produtosLocalStorage[capturarIndice] = produto;
    localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
}
function atualizaCarrinhoLocalStorage(produto) {
    if (carrinho.length === 0) {
        carrinho.push(produto);
    }
    const produtoNoCarrinho = localizaProdutoPorId(carrinho, produto === null || produto === void 0 ? void 0 : produto.id);
    if (!produtoNoCarrinho) {
        carrinho.push(produto);
    }
    else {
        const capturarIndice = localizaIndiceProdutoPorId(carrinho, produto === null || produto === void 0 ? void 0 : produto.id);
        carrinho[capturarIndice] = produto;
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

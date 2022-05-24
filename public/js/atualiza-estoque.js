import {
    estoque
} from './estoque.js';


const estiloBotao = {
    cor: '#C4C4C4',
    texto: 'INDISPONÍVEL'
}

const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) ||
    localStorage.setItem("produtos", JSON.stringify(estoque));
// const sacola = [];

const botoes = document.querySelectorAll('.item__button');

botoes.forEach((botao, indice) => {
    botao.onclick = () => atualizaEstoque(indice + 1, produtosLocalStorage, botao);
})

function decrementarEstoque(produto) {
    if (produto.quantidade_disponivel > 0) {
        produto.quantidade_disponivel--;
        alert(`Adicionado na sacola! Itens restantes: ${produto.quantidade_disponivel}`);
    } else {
        alert(`${produto.nome} sem estoque!`);
    }
}

function produtoIndisponivel(produto, botao) {
    if (produto.quantidade_disponivel === 0) {
        botao.style.backgroundColor = estiloBotao.cor;
        botao.innerHTML = estiloBotao.texto;
    }
}

function atualizaEstoque(id, produtos, botao) {
    const produtosTemp = [...produtos];

    const retornaObjetoConformeId = produtosTemp.filter(produto => produto.id === id);

    const produto = retornaObjetoConformeId[0];

    decrementarEstoque(produto);
    produtoIndisponivel(produto, botao);

    const capturarIndice = produtosLocalStorage.findIndex(elemento => elemento.id === produto.id);
    produtosLocalStorage[capturarIndice] = produto;

    localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
}
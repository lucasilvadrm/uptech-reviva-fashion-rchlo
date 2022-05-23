import { estoque } from './estoque.js';

const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) 
|| localStorage.setItem("produtos", JSON.stringify(estoque));
console.log(produtosLocalStorage);

const botoes = document.querySelectorAll('.item__button');

botoes.forEach((botao, indice) => {
    botao.onclick = () => atualizaEstoque(indice + 1, produtosLocalStorage);
})

function decrementarEstoque(produto) {
    return produto.quantidade_disponivel > 0 ? produto.quantidade_disponivel-- : alert(`${produto.nome} sem estoque!`);
}

function atualizaEstoque(id, produtos) {
    const produtosTemp = [...produtos]

    const retornaObjetoConformeId = produtosTemp.filter(produto => {
        return produto.id === id;
    })

    const produto = retornaObjetoConformeId[0];

    decrementarEstoque(produto);

    const capturarIndice = produtosLocalStorage.findIndex(elemento => elemento.id === produto.id);
    produtosLocalStorage[capturarIndice] = produto
    console.log(produtosLocalStorage)

    localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
}
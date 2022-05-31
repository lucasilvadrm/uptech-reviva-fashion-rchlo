import { TagName } from "./enums.js";
import { criaElemento } from "./funcoes.js";
const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos') || '');
criaLista('#last-releases', TagName.ul, ['product-list__list'], ['product-list__item'], 4);
criaLista('#summer-collection', TagName.ul, ['product-list__list'], ['product-list__item'], 4);
const listaProdutos = document.querySelectorAll('.product-list__item');
const estiloBotao = {
    cor: '#C4C4C4',
    texto: 'INDISPONÍVEL'
};
listaProdutos.forEach((item, indice) => {
    const urlImagem = produtosLocalStorage[indice].imagens[0].url;
    const descricaoImagem = produtosLocalStorage[indice].imagens[0].descricao;
    const nomeProduto = produtosLocalStorage[indice].nome;
    const tamanhosDisponiveis = produtosLocalStorage[indice].tamanhos_disponiveis;
    const precoProduto = produtosLocalStorage[indice].preco;
    const quantidadeDisponivel = produtosLocalStorage[indice].quantidade_disponivel;
    const detalheItem = criaElemento(TagName.div, [], '', ['item__details'], item);
    criaElemento(TagName.img, [{ nome: 'src', valor: urlImagem }, { nome: 'alt', valor: descricaoImagem }], '', [], detalheItem);
    const tamanhoProduto = criaElemento(TagName.fieldset, [], '', ['product__size'], detalheItem);
    for (let i = 0; i < 3; i++) {
        const tamanho = tamanhosDisponiveis[i].toLowerCase();
        criaElemento(TagName.input, [
            { nome: 'type', valor: 'radio' },
            { nome: 'name', valor: `select-size--product${indice + 1}` },
            { nome: 'id', valor: `size-${tamanho}${indice + 1}` }
        ], '', ['size__input'], tamanhoProduto);
        criaElemento(TagName.label, [{ nome: 'for', valor: `size-${tamanho}${indice + 1}` }], tamanho.toUpperCase(), ['size__label'], tamanhoProduto);
    }
    const descricaoItem = criaElemento(TagName.div, [], '', ['item__description'], item);
    criaElemento(TagName.h3, [], nomeProduto, ['item__title'], descricaoItem);
    criaElemento(TagName.p, [], formatarPreco(precoProduto), ['item__price'], descricaoItem);
    const botao = criaElemento(TagName.button, [], 'POR NA SACOLA', ['item__button'], item);
    criaElemento(TagName.i, [], '', ['fa-solid', 'fa-bag-shopping', 'icon__purchase'], botao);
    if (quantidadeDisponivel === 0) {
        botao.innerHTML = estiloBotao.texto;
        botao.style.backgroundColor = estiloBotao.cor;
    }
});
function formatarPreco(preco) {
    return `R$ ${(preco).toFixed(2).replace('.', ',')}`;
}
function criaLista(capturarPai, elementoFilho, classePai, classeFilho, numeroDeItens) {
    const secao = document.querySelector(capturarPai) || null;
    if (secao) {
        const ulSecao = criaElemento(elementoFilho, [], '', classePai, secao);
        adicionaItens(ulSecao, TagName.li, numeroDeItens, classeFilho);
    }
    else {
        throw Error(`O elemento ${secao} não existe!`);
    }
}
function adicionaItens(elementoPai, elementoFilho, numeroProdutos, classes) {
    for (let i = 0; i < numeroProdutos; i++) {
        criaElemento(elementoFilho, [], '', classes, elementoPai);
    }
}

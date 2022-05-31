import { TagName } from "./enums.js";
import { estoque } from './estoque.js';
import { calculaTotalCarrinho, criaElemento, formatarPreco, verificaLocalStorage } from "./funcoes.js";
verificaLocalStorage(estoque);
const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos') || '');
const carrinho = JSON.parse(localStorage.getItem('carrinho') || '');
const secaoSacola = document.querySelector('.wallet');
const ulSacola = criaElemento(TagName.ul, [], '', ['wallet__list'], secaoSacola);
const valorTotal = document.querySelector('.total__value');
const ulQuantidadePreco = document.querySelector('.quantity-price');
carrinho.forEach((item, indice) => {
    const liSacola = criaElemento(TagName.li, [], '', ['wallet__item'], ulSacola);
    const divImagemProduto = criaElemento(TagName.div, [], '', ['detail__thumb'], liSacola);
    criaElemento(TagName.img, [{ nome: 'src', valor: item.imagens[0].url },
        { nome: 'alt', valor: '' }
    ], '', [], divImagemProduto);
    const divDetalheNome = criaElemento(TagName.div, [], '', ['detail__name'], liSacola);
    criaElemento(TagName.h3, [], 'Produto', ['detail__title'], divDetalheNome);
    criaElemento(TagName.p, [], item.nome, ['detail__description'], divDetalheNome);
    const divDetalheTamanho = criaElemento(TagName.div, [], '', ['detail__size'], liSacola);
    criaElemento(TagName.h3, [], 'Tamanho escolhido', ['detail__title'], divDetalheTamanho);
    const tamanhoProduto = criaElemento(TagName.fieldset, [], '', ['product__size'], divDetalheTamanho);
    const tamanhosDisponiveis = carrinho[indice].tamanhos_disponiveis;
    for (let i = 0; i < 3; i++) {
        const tamanho = tamanhosDisponiveis[i].toLowerCase();
        criaElemento(TagName.input, [
            { nome: 'type', valor: 'radio' },
            { nome: 'name', valor: `select-size--product${indice + 1}` },
            { nome: 'id', valor: `size-${tamanho}${indice + 1}` }
        ], '', ['size__input'], tamanhoProduto);
        criaElemento(TagName.label, [{ nome: 'for', valor: `size-${tamanho}${indice + 1}` }], tamanho.toUpperCase(), ['size__label'], tamanhoProduto);
    }
    const divDetalhePreco = criaElemento(TagName.div, [], '', ['detail__price'], liSacola);
    criaElemento(TagName.h3, [], 'Valor', ['detail__title'], divDetalhePreco);
    criaElemento(TagName.p, [], formatarPreco(item.preco, true), ['detail__value'], divDetalhePreco);
    const divDetalheQuantidade = criaElemento(TagName.div, [], '', ['detail__quantity'], liSacola);
    criaElemento(TagName.h3, [], 'Quantidade', ['detail__title'], divDetalheQuantidade);
    criaElemento(TagName.input, [
        { nome: 'type', valor: 'number' },
        { nome: 'name', valor: `quantity${indice}` },
        { nome: 'id', valor: `quantity${indice}` },
        { nome: 'value', valor: item.quantidade_carrinho.toString() },
        { nome: 'min', valor: '1' },
        { nome: 'max', valor: (item.quantidade_disponivel).toString() },
        // { nome: 'readonly', valor: 'readonly' },
    ], '', ['detail__input'], divDetalheQuantidade);
    const inputQuantidade = document.getElementById(`quantity${indice}`);
    const calcSubtotal = Number(inputQuantidade.value) * item.preco;
    const divSubtotal = criaElemento(TagName.div, [], '', ['detail__subtotal'], liSacola);
    criaElemento(TagName.h3, [], 'Subtotal', ['detail__title'], divSubtotal);
    const subtotal = criaElemento(TagName.p, [], formatarPreco(calcSubtotal, true), ['detail__value'], divSubtotal);
    const itemQuantidadePreco = criaElemento(TagName.li, [], '', ['quantity-price__item'], ulQuantidadePreco);
    const quantidadePreco = criaElemento(TagName.p, [], `${item.quantidade_carrinho.toString()} x ${formatarPreco(item.preco, true)}`, [], itemQuantidadePreco);
    atualizaCarrinho(item, indice, calcSubtotal, inputQuantidade, subtotal, quantidadePreco);
});
if (valorTotal) {
    valorTotal.innerHTML = calculaTotalCarrinho(carrinho);
}
function atualizaCarrinho(item, indice, calcSubtotal, elemento, subtotal, quantidadePreco) {
    elemento.addEventListener('change', event => {
        event.preventDefault();
        const valor = event.target;
        calcSubtotal = Number(valor.value) * item.preco;
        subtotal.innerHTML = formatarPreco(calcSubtotal, true);
        let novaQuantidadeCarrinho = Object.assign(Object.assign({}, item), { quantidade_carrinho: Number(valor.value) });
        quantidadePreco.innerText = `${Number(valor.value)} x ${formatarPreco(item.preco, true)}`;
        carrinho[indice] = novaQuantidadeCarrinho;
        const index = produtosLocalStorage.findIndex(produto => produto.id === novaQuantidadeCarrinho.id);
        produtosLocalStorage[index] = novaQuantidadeCarrinho;
        if (valorTotal) {
            valorTotal.innerHTML = calculaTotalCarrinho(carrinho);
        }
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
    });
}

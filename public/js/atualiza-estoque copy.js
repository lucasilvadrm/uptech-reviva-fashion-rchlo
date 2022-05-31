"use strict";
// import { estoque } from './estoque.js';
// import { Produto } from './interfaces.js';
// export class AtualizaEstoque {
//     private produtosLocalStorage: Produto[] = [];
//     private estiloBotao = {
//         cor: '#C4C4C4',
//         texto: 'INDISPONÍVEL'
//     }
//     private produtosTemp: Produto[] = [];
//     private botoes: NodeList;
//     constructor() {
//         this.botoes = document.querySelectorAll('.item__button');
//         this.produtosLocalStorage;
//     }
//     eventoBotao() {
//         this.botoes.forEach((botao, indice) => {
//             botao.addEventListener('click', () => {
//                 atualizaEstoque(indice + 1, produtosLocalStorage, botao);
//             });
//         })
//     }
//     atualizaEstoque(id: Produto, produtos: Produto, botao: HTMLElement): void {
//         this.produtosTemp = [produtos];
//         const produto = this.produtosTemp.find(produto => produto.id === id);
//         decrementarEstoque(produto, botao);
//         const capturarIndice = produtosLocalStorage.findIndex(elemento => elemento.id === produto.id);
//         produtosLocalStorage[capturarIndice] = produto;
//         localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
//     }
// }
// const estiloBotao = {
//     cor: '#C4C4C4',
//     texto: 'INDISPONÍVEL'
// }
// const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) ||
//     localStorage.setItem("produtos", JSON.stringify(estoque));
// const botoes = document.querySelectorAll('.item__button');
// botoes.forEach((botao, indice) => {
//     botao.onclick = () => atualizaEstoque(indice + 1, produtosLocalStorage, botao);
// })
// function decrementarEstoque(produto, botao) {
//     if (produto.quantidade_disponivel > 0) {
//         produto.quantidade_disponivel--;
//         alert(`Adicionado na sacola! Itens restantes: ${produto.quantidade_disponivel}`);
//     } else {
//         botao.style.backgroundColor = estiloBotao.cor;
//         botao.innerHTML = estiloBotao.texto;
//         alert(`${produto.nome} sem estoque!`);
//     }
// }
// function atualizaEstoque(id, produtos, botao) {
//     const produtosTemp = [...produtos];
//     const produto = produtosTemp.find(produto => produto.id === id);
//     decrementarEstoque(produto, botao);
//     const capturarIndice = produtosLocalStorage.findIndex(elemento => elemento.id === produto.id);
//     produtosLocalStorage[capturarIndice] = produto;
//     localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
// }

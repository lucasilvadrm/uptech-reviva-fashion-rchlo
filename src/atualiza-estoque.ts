import { estoque } from './estoque.js';
import { verificaLocalStorage } from './funcoes.js';
import { Produto } from './interfaces.js';

const estiloBotao = {
    cor: '#C4C4C4',
    texto: 'INDISPONÍVEL'
}

verificaLocalStorage(estoque);

const produtosLocalStorage: Produto[] = JSON.parse(localStorage.getItem('produtos') || '');

const carrinho: Produto[] = JSON.parse(localStorage.getItem('carrinho') || '');

const botoes: NodeListOf<HTMLElement> = document.querySelectorAll('.item__button');

botoes.forEach((botao, indice: number) => {
    botao.addEventListener('click', () => {
        atualizaEstoque(indice + 1, produtosLocalStorage, botao as HTMLElement);
    });
})

function decrementarEstoque(produto: Produto, botao: HTMLElement): void {
    if (produto.quantidade_disponivel > 0) {
        produto.quantidade_disponivel--;
        produto.quantidade_carrinho++;
        alert(`Adicionado na sacola! Itens restantes: ${produto.quantidade_disponivel}`);
    } else {
        botao.style.backgroundColor = estiloBotao.cor;
        botao.innerHTML = estiloBotao.texto;
        alert(`${produto.nome} sem estoque!`);
    }
}

function atualizaEstoque(id: number, produtos: Produto[], botao: HTMLElement): void {
    const produtosTemp: Produto[] = [...produtos];

    const produto = localizaProdutoPorId(produtosTemp, id);

    if (produto) {
        decrementarEstoque(produto, botao);
        atualizaProdutoLocalStorage(produtosLocalStorage, produto);
        atualizaCarrinhoLocalStorage(produto);
    } else {
        throw Error('Produto não existe!');
    }
}

function localizaProdutoPorId(produtos: Produto[], id: number): Produto | null {
    return produtos.find(produto => produto.id === id) || null;
}

function localizaIndiceProdutoPorId(produtos: Produto[], idProduto: number): number {
    return produtos.findIndex(produto => produto.id === idProduto);
}

function atualizaProdutoLocalStorage(produtosLocalStorage: Produto[], produto: Produto): void {
    const capturarIndice: number = localizaIndiceProdutoPorId(produtosLocalStorage, produto.id);
    produtosLocalStorage[capturarIndice] = produto;
    localStorage.setItem("produtos", JSON.stringify(produtosLocalStorage));
}

function atualizaCarrinhoLocalStorage(produto: Produto): void {
    if (carrinho.length === 0) {
        carrinho.push(produto);
    }

    const produtoNoCarrinho = localizaProdutoPorId(carrinho, produto?.id);
    if (!produtoNoCarrinho) {
        carrinho.push(produto);
    } else {
        const capturarIndice = localizaIndiceProdutoPorId(carrinho, produto?.id);
        carrinho[capturarIndice] = produto;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
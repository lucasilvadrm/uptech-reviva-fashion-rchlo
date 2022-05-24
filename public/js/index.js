// const item = document.querySelector('.last-releases__item');
const listaProdutos = document.querySelectorAll('.last-releases__item');
const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos'));

const estiloBotao = {
    cor: '#C4C4C4',
    texto: 'INDISPONÍVEL'
}

listaProdutos.forEach((item, indice) => {
    const urlImagem = produtosLocalStorage[indice].imagens[0].url;
    const nomeImagem = produtosLocalStorage[indice].imagens[0].nome;
    const nomeProduto = produtosLocalStorage[indice].nome;
    const tamanhosDisponiveis = produtosLocalStorage[indice].tamanhos_disponiveis;
    const precoProduto = produtosLocalStorage[indice].preco;
    const quantidadeDisponivel = produtosLocalStorage[indice].quantidade_disponivel;

    const divDetalheItem = inserirFilho(item, 'div');
    adicionarClasse('item__details', divDetalheItem);
    const imagem = inserirFilho(divDetalheItem, 'img');
    imagem.setAttribute('src', urlImagem);
    imagem.setAttribute('alt', nomeImagem);
    const fieldsetTamanhoProduto = inserirFilho(divDetalheItem, 'fieldset');
    adicionarClasse('product__size', fieldsetTamanhoProduto);
    

    for (let i = 0; i < tamanhosDisponiveis.length; i++) {
        const tamanho = tamanhosDisponiveis[i].toLowerCase();
        const input = inserirFilho(fieldsetTamanhoProduto, 'input');
        adicionarClasse('size__input', input);
        input.setAttribute('type', 'radio');
        input.setAttribute('name', `select-size--product${indice+1}`);
        input.setAttribute('id', `size-${tamanho}${indice+1}`);
    
        const label = inserirFilho(fieldsetTamanhoProduto, 'label');
        adicionarClasse('size__label', label);
        label.setAttribute('for', `size-${tamanho}${indice+1}`);
        label.innerText = tamanho.toUpperCase();
    }
    
    const divDescricaoItem = inserirFilho(item, 'div');
    adicionarClasse('item__description', divDescricaoItem);
    const tituloItem = inserirFilho(divDescricaoItem, 'h3');
    adicionarClasse('item__title', tituloItem);
    tituloItem.innerText = nomeProduto;

    const precoItem = inserirFilho(divDescricaoItem, 'p');
    adicionarClasse('item__price', precoItem);
    precoItem.innerText = formatarPreco(precoProduto);
    
    const botaoItem = inserirFilho(item, 'button');
    adicionarClasse('item__button', botaoItem);
    botaoItem.innerText = 'POR NA SACOLA';

    const icone = inserirFilho(botaoItem, 'i');
    adicionarClasse('fa-solid', icone);
    adicionarClasse('fa-bag-shopping', icone);
    adicionarClasse('icon__purchase', icone);

    if(quantidadeDisponivel === 0) {
        botaoItem.innerHTML = estiloBotao.texto;
        botaoItem.style.backgroundColor = estiloBotao.cor;
    }
})

function inserirFilho(elementoPai, elementoFilho) {
    return elementoPai.appendChild(criarElemento(elementoFilho));
}

function formatarPreco(preco) {
    return `R$ ${(preco).toFixed(2).replace('.', ',')}`;
}

function adicionarClasse(nomeClasse, elemento) {
    return elemento.classList.add(nomeClasse);
}

function criarElemento(elemento) {
    const novoElemento = document.createElement(elemento);
    return novoElemento;
}
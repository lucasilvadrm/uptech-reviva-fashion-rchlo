export function criaElemento(tag, atributos, conteudo, classes, elementoPai) {
    const elementoCriado = document.createElement(tag);
    if (classes) {
        elementoCriado.classList.add(...classes);
    }
    if (atributos) {
        atributos.forEach((atributo) => {
            elementoCriado.setAttribute(atributo.nome, atributo.valor);
        });
    }
    elementoCriado.innerHTML = conteudo;
    elementoPai.appendChild(elementoCriado);
    return elementoCriado;
}
export function formatarPreco(preco, exibirMoeda) {
    if (exibirMoeda) {
        return `R$ ${(preco).toFixed(2).replace('.', ',')}`;
    }
    return `${(preco).toFixed(2).replace('.', ',')}`;
}
export function calculaTotalCarrinho(carrinho) {
    const total = carrinho.reduce((acm, item) => acm + (item.quantidade_carrinho * item.preco), 0);
    return formatarPreco(total, true);
}
export function verificaLocalStorage(estoque) {
    if (!localStorage.getItem('produtos') || !localStorage.getItem('carrinho')) {
        localStorage.setItem("produtos", JSON.stringify(estoque));
        localStorage.setItem('carrinho', JSON.stringify([]));
    }
}

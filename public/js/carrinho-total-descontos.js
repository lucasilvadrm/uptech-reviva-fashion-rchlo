const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99]

const retornaDuplicados = (array) => {
    const arrayFiltrado = array.filter((valor, indice) => array.indexOf(valor) !== indice);
    return [...new Set(arrayFiltrado)]; // [25.99, 35.80]
}

const calcularDesconto = (valor, taxa) => {
    let desconto = valor - (valor * formatarTaxa(taxa))
    return desconto;
}

const formatarTaxa = (taxa) => {
    return taxa / 100;
}


const aplicarDesconto = (taxa) => {
    const duplicados = retornaDuplicados(carrinho);
    duplicados.forEach(valorProduto => {
        let indice = carrinho.indexOf(valorProduto);
        let desconto = calcularDesconto(valorProduto, taxa);
        if (indice != -1) carrinho.splice(indice, 1, desconto);
    })

    console.table(carrinho)
}

const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
}

const totalCarrinho = () => {
    aplicarDesconto(10);
    const valorTotal = carrinho.reduce((anterior, atual) => anterior + atual);
    return formatarValor(valorTotal);
}

console.log(`Total no carrinho: R$ ${totalCarrinho()}`)
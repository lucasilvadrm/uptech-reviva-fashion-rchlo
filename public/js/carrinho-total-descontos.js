const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99]

const retornaDuplicados = (array) => {
    const arrayFiltrado = array.filter((valor, indice) => array.indexOf(valor) !== indice);
    return [...new Set(arrayFiltrado)];
}

const calcularDesconto = (valor, taxa) => {
    const desconto = valor - (valor * formatarTaxa(taxa))
    return desconto;
}

const formatarTaxa = (taxa) => {
    return taxa / 100;
}

const aplicarDesconto = (carrinho, taxa) => {
    let carrinhoTemp = [...carrinho];
    const duplicados = retornaDuplicados(carrinhoTemp);
    duplicados.forEach(valorProduto => {
        let indice = carrinhoTemp.indexOf(valorProduto);
        let desconto = calcularDesconto(valorProduto, taxa);
        if (indice != -1) carrinhoTemp.splice(indice, 1, desconto);
    })

    return carrinhoTemp;
}

const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
}

const totalCarrinho = () => {
    const valorTotal = aplicarDesconto(carrinho, 10).reduce((anterior, atual) => anterior + atual);
    return formatarValor(valorTotal);
}

console.log(`Total no carrinho: R$ ${totalCarrinho()}`)
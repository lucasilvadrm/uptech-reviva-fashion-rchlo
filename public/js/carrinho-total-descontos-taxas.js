const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];

const calcularDesconto = (valor, taxa) => {
    let desconto = valor - (valor * porcentagemDesconto(taxa));
    return Number(desconto.toFixed(2));
}

const calcularTaxaAdicional = (valor, taxa) => {
    let taxaAplicada = valor + taxa;
    return Number(taxaAplicada.toFixed(2));
}

const porcentagemDesconto = (taxa) => {
    return taxa / 100;
}

const aplicarDescontosEtaxas = (taxa) => {
    produtos.forEach((valor, indice) => {
        if (valor.includes('Camiseta')) {
            let desconto = calcularDesconto(precos[indice], taxa);
            precos.splice(indice, 1, desconto);
        } else if (valor.includes('Jeans')) {
            let aplicarTaxaAdicional = calcularTaxaAdicional(precos[indice], 3.99);
            precos.splice(indice, 1, aplicarTaxaAdicional);
        }
    })
}

const retornaDuplicados = (array) => {
    const arrayFiltrado = array.filter((valor, indice) => array.indexOf(valor) !== indice);
    return [...new Set(arrayFiltrado)];
}

const aplicarDescontoSegundoProduto = (taxa) => {
    const duplicados = retornaDuplicados(precos);
    for (let i = 0; i < duplicados.length; i++) {
        let indice = precos.indexOf(duplicados[i]); //pegar o indice quando existir o valor no array de carrinho
        let desconto = calcularDesconto(duplicados[i], taxa);
        if (indice != -1) precos.splice(indice, 1, desconto);
    }

    console.table(precos)
}

const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
}

const calcularTotal = () => {
    aplicarDescontosEtaxas(10)
    retornaDuplicados(precos)
    aplicarDescontoSegundoProduto(5)
    const valorTotal = precos.reduce((anterior, atual) => anterior + atual);
    return formatarValor(valorTotal);
}

console.log(calcularTotal())
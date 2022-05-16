const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];

const calcularDesconto = (valor, taxa) => {
    const desconto = valor - (valor * porcentagemDesconto(taxa));
    return desconto;
}

const calcularTaxaAdicional = (valor, taxa) => {
    const taxaAplicada = valor + taxa;
    return taxaAplicada;
}

const porcentagemDesconto = (taxa) => {
    return taxa / 100;
}

const aplicarDescontosEtaxas = (taxaCamiseta, taxaJeans) => {
    produtos.forEach((nomeProduto, indice) => {
        if (nomeProduto.includes('Camiseta')) {
            let desconto = calcularDesconto(precos[indice], taxaCamiseta);
            precos.splice(indice, 1, desconto);
        }

        if (nomeProduto.includes('Jeans')) {
            let aplicarTaxaAdicional = calcularTaxaAdicional(precos[indice], taxaJeans);
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
    duplicados.forEach(valorProduto => {
        let indice = precos.indexOf(valorProduto);
        let desconto = calcularDesconto(valorProduto, taxa);
        if (indice != -1) precos.splice(indice, 1, desconto);
    })

    console.table(precos)
}

const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
}

const calcularTotal = () => {
    aplicarDescontosEtaxas(10, 3.99)
    retornaDuplicados(precos)
    aplicarDescontoSegundoProduto(5)
    const valorTotal = precos.reduce((anterior, atual) => anterior + atual);
    return formatarValor(valorTotal);
}

console.log(calcularTotal())
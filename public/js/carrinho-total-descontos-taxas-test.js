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

const aplicarDescontosEtaxas = (produtos, precos, taxaCamiseta, taxaJeans) => {
    let produtosTemp = [...produtos]
    let precosTemp = [...precos]

    produtosTemp.forEach((nomeProduto, indice) => {
        if (nomeProduto.includes('Camiseta')) {
            let desconto = calcularDesconto(precos[indice], taxaCamiseta);
            precosTemp.splice(indice, 1, desconto);
        }

        if (nomeProduto.includes('Jeans')) {
            let aplicarTaxaAdicional = calcularTaxaAdicional(precos[indice], taxaJeans);
            precosTemp.splice(indice, 1, aplicarTaxaAdicional);
        }
    })

    return precosTemp;
}

const retornaDuplicados = (array) => {
    const arrayFiltrado = array.filter((valor, indice) => array.indexOf(valor) !== indice);
    return [...new Set(arrayFiltrado)];
}

const aplicarDescontoSegundoProduto = (precos, taxa) => {
    let precosTemp = [...precos];

    const duplicados = retornaDuplicados(precosTemp);
    duplicados.forEach(valorProduto => {
        let indice = precosTemp.indexOf(valorProduto);
        let desconto = calcularDesconto(valorProduto, taxa);
        if (indice != -1) precosTemp.splice(indice, 1, desconto);
    })

    // console.table(precos)
    return precosTemp;
}

const aplicarDescontosEtaxasTotal = () => {
    const precosComTaxasDescontos = aplicarDescontosEtaxas(produtos, precos, 10, 3.99);
    retornaDuplicados(precosComTaxasDescontos)
    const descontoSegundoProduto = aplicarDescontoSegundoProduto(precosComTaxasDescontos, 5)
}

const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
}

const calcularTotal = () => {
    const precosComTaxasDescontos = aplicarDescontosEtaxas(produtos, precos, 10, 3.99)
    retornaDuplicados(precosComTaxasDescontos)
    const descontoSegundoProduto = aplicarDescontoSegundoProduto(precosComTaxasDescontos, 5)
    const valorTotal = descontoSegundoProduto.reduce((anterior, atual) => anterior + atual);
    return formatarValor(valorTotal);
}

console.log(calcularTotal())
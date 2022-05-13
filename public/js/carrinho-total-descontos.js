const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99]

const retornaDuplicados = (array) => { 
    const arrayFiltrado = array.filter((valor, indice) => array.indexOf(valor) !== indice);
    return [...new Set(arrayFiltrado)]; // [25.99, 35.80]
}

const calcularDesconto = (valor, taxa) => {
    let desconto = valor - (valor * formatarTaxa(taxa))
    return Number(desconto.toFixed(2));
}

const formatarTaxa = (taxa) => {
    return taxa / 100;
}

// carrinho.sort()

const aplicarDesconto = (taxa) => {
    const duplicados = retornaDuplicados(carrinho);
    for (let i = 0; i < duplicados.length; i++) {
        let indice = carrinho.indexOf(duplicados[i]); //pegar o indice quando existir o valor no array de carrinho
        let desconto = calcularDesconto(duplicados[i], taxa);
        if (indice != -1) carrinho.splice(indice, 1, desconto);
    }

    console.table(carrinho)
}

const totalCarrinho = () => {
    aplicarDesconto(10);
    return carrinho.reduce((anterior, atual) => anterior + atual).toFixed(2).replace('.', ',');
}

console.log(`Total no carrinho: R$ ${totalCarrinho()}`)
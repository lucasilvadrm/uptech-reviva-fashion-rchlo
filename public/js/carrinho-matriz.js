const carrinho = [
    ['Calça Jeans Masculina', 3, 109.89],
    ['Camiseta Básica Feminina', 2, 19.90],
    ['Boné Unissex', 1, 25.00],
    ['Saia Feminina', 1, 35.00],
    ['Calça Jeans Feminina', 1, 150.00],
]

const descontosEtaxasAplicados = carrinho.map(produto => {
    const nomeProduto = produto[0];
    const quantidadeProduto = produto[1];
    const valorProduto = produto[2];
    const descontoTaxa = (valorProduto * 0.05);
    const taxaAdicional = (valorProduto * 0.015);
    let novoValor = valorProduto

    if (quantidadeProduto > 1) {
        novoValor -= descontoTaxa
    }

    if (nomeProduto.includes('Jeans')) {
        novoValor += taxaAdicional
    }

    return novoValor * quantidadeProduto
})

const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
}

const calcularTotal = () => {
    const total = descontosEtaxasAplicados.reduce((acm, valorAtual) => acm + valorAtual);
    let totalComDesconto;
    if (total > 500) {
        totalComDesconto = total - 50
    }

    console.log(`Valor total do carrinho = R$ ${formatarValor(totalComDesconto)}`)
}

calcularTotal()
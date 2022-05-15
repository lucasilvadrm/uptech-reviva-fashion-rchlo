const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom',
    'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'
];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]

const formatarValor = (valor) => {
    return valor.toFixed(2).replace('.', ',');
}

const verificarProduto = (descricaoProduto) => {
    let quantidade = 0;
    let valor = 0.0;
    produtos.filter((produto, indice) => {
        if (produto.includes(descricaoProduto)) {
            quantidade++;
            valor = precos[indice];
        }
    })

    console.log(`Produto: ${descricaoProduto}, Quantidade: ${quantidade}, Valor unitário: R$ ${formatarValor(valor)}`);
}

const retornaResultado = () => {
    let produtosSemDuplicacao = [...new Set(produtos)];
    produtosSemDuplicacao.forEach(produto => verificarProduto(produto));
}

retornaResultado();
const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];

const produtosTaxados = carrinho
.map((valor) => {
    return valor > 70 ?  (valor * 0.07) + valor : valor
})
.reduce((anterior, atual) => anterior + atual)
.toFixed(2)

console.log(produtosTaxados)
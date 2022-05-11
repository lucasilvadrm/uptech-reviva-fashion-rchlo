const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

const total = carrinho.reduce((valorAnterior, prox) => valorAnterior + prox)

console.log(total)
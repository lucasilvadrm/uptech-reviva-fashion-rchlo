const carrinho = [
    ['Calça Jeans Masculina', 3, 109.89],
    ['Camiseta Básica Feminina', 2, 19.90],
    ['Boné Unissex', 1, 25.00],
    ['Saia Feminina', 1, 35.00],
    ['Calça Jeans Feminina', 1, 150.00],
]

const carrinhoTemp = [...carrinho]


carrinhoTemp.forEach((elemento, indice) => {
    let nomeProduto = elemento[0];
    let valor = elemento[2];
    let novoValor;

    if (nomeProduto.includes('Jeans')) {
        novoValor = valor + (valor * 0.015)
        elemento[2] = novoValor;
    }
})


carrinhoTemp.forEach((elemento) => {
    let quantidade = elemento[1];
    let valor = elemento[2];
    let novoValor;

    if (quantidade > 1) {
        novoValor = (valor - (valor * 0.05))
        elemento[2] = novoValor
    }
})


let precos = []
carrinhoTemp.forEach(elemento => {
    let quantidade = elemento[1];
    let valor = elemento[2];
    let novoValor;

    novoValor = valor * quantidade
    precos.push(novoValor)

})

// console.log(precos)

let total = precos.reduce((acm, atual) => acm + atual)

// console.log(total)

if(total > 500) {
    total -= 50
}

console.log(total)




// const carrinho = [
//     ['Calça Jeans Masculina', 3, 109.89],
//     ['Camiseta Básica Feminina', 2, 19.90],
//     ['Boné Unissex', 1, 25.00],
//     ['Saia Feminina', 1, 35.00],
//     ['Calça Jeans Feminina', 1, 150.00]
// ]


// var totalCompra = 0;

// carrinho.forEach((valor) => {
//     let nomeProduto = valor[0];
//     let quantidade = valor[1];
//     let valorProduto = valor[2];

//     for (let i = 0; i < quantidade; i++) {
//         if (quantidade > 1) {
//             (valorProduto * 0.05) - valorProduto;
//         } else if (nomeProduto.includes('Jeans')) {
//             (valorProduto * 0.015) + valorProduto;
//         }
//         totalCompra += valorProduto;
//     }

// })

// if (totalCompra > 500) {
//     totalCompra = totalCompra - 50.00;
// }
// console.log(`Total da Compra: ${totalCompra}`)
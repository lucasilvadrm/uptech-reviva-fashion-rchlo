export interface Produto {
    id: number,
    nome: string,
    preco: number,
    descricao: string,
    tamanhos_disponiveis: string[],
    quantidade_disponivel: number,
    quantidade_carrinho: number,
    imagens: Imagem[],
    thumbnail: Imagem[]
}

export interface Imagem {
    url: string,
    descricao: string
}

export interface Atributo {
    nome: string,
    valor: string
}

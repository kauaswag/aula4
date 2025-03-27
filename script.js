// Variável para armazenar o carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto, preco) {
    carrinho.push({ nome: nomeProduto, preco: preco });
    alert(nomeProduto + " foi adicionado ao carrinho!");
    atualizarCarrinho();
}

// Função para atualizar a quantidade de itens no carrinho
function atualizarCarrinho() {
    const carrinhoLink = document.getElementById('carrinho-link');
    carrinhoLink.textContent = `Carrinho (${carrinho.length})`;

    // Atualiza o número de itens no carrinho
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Carregar o carrinho ao abrir a página
window.onload = function() {
    const carrinhoSalvo = localStorage.getItem("carrinho");
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        atualizarCarrinho();
    }
};


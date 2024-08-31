// quando clicar no botão de adicionar
//     adicionar produto ao carrinho
//     somar valor do protudo ao total 
// quando clicar em limpar
//     tirar itens da lista 
//     zerar o total
carrinho = document.getElementById('lista-produtos');

function adicionar(){
    var produto = document.getElementById('produto').value;
    let partesProduto = produto.split(' - R$');

    var nomeProduto = partesProduto[0];
    valorProduto = partesProduto[1];

    var quantidade = document.getElementById('quantidade').value;

    if (quantidade > 0){
        let item_carrinho = document.createElement('section');
        item_carrinho.classList.add('carrinho__produtos__produto');
        item_carrinho.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`;
        carrinho.appendChild(item_carrinho);
    }

}

function limpar(){

}
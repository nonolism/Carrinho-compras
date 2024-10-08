let carrinho = document.getElementById('lista-produtos');
let valorTotal = document.getElementById('valor-total');

function adicionar(){
    let produto = document.getElementById('produto').value;
    let partesProduto = produto.split(' - R$');
    let nomeProduto = partesProduto[0];
    let valorProduto = partesProduto[1];
    let quantidade = document.getElementById('quantidade');
    let valor = 0;
    
    if (quantidade.value > 0){
        let item_carrinho = document.createElement('section');
        item_carrinho.classList.add('carrinho__produtos__produto');
        item_carrinho.innerHTML = `<span class="texto-azul">${parseInt(quantidade.value)}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`;
        carrinho.appendChild(item_carrinho);
    } else {
        alert('Quantidade Inválida, insira um número maior que 0');
    }//Condicional para adicionar itens ao carrinho, impedindo que sejam adicionados itens com quantidade igual ou menor a 0
    
    quantidade.value = 0; //Retornar quantidade ao valor padrão após input do usuário

    itemsCarrinho = carrinho.getElementsByClassName('carrinho__produtos__produto');
    for (let i = 0; i< itemsCarrinho.length; i++){
        let valorProdutoAtual = parseFloat(itemsCarrinho[i].querySelectorAll('.texto-azul')[1].innerHTML.match(/\d+/g));
        let quantidadeItemAtual = parseInt(itemsCarrinho[i].querySelectorAll('.texto-azul')[0].innerHTML.match(/\d+/g));
        valor = valor + (valorProdutoAtual * quantidadeItemAtual);
    }//Loop para calculo do valor total do carrinho
    
    valorTotal.innerText = `R$${valor}`;
}

function limpar(){
    while (carrinho.firstChild){
    carrinho.removeChild(carrinho.lastChild);
    }//Loop para remover todos os itens do carrinho
    valorTotal.innerText = 'R$0';
    quantidade.value = 0;
}

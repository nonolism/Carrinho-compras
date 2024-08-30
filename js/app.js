// quando clicar no botão de adicionar
//     adicionar produto ao carrinho
//     somar valor do protudo ao total 
// quando clicar em limpar
//     tirar itens da lista 
//     zerar o total

function adicionar(){
    produto = document.getElementById('produto').value;
    valor = produto.replace(/\D/g, '');
    quantidade = document.getElementById('quantidade').value;
}

function limpar(){

}
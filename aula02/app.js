let numeroSecreto = gerarNumeroAleatorio();
//Exibe coisas na tela mas não devolve informação
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
//Função sem parâmetro e sem retorno
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto); // Esta linha de código vai comparar utilizando o "=="
}
//Nenhum parâmetro, porém tem retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 +1);
}



//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//Exibe coisas na tela mas não devolve informação
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();
//Função sem parâmetro e sem retorno
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p',  `Você descobriu o número secreto em ${tentativas} ${palavraTentativa }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Errou.');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Errou.');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++    
        limparCampo();    
    }


}
//Nenhum parâmetro, porém tem retorno
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 +1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
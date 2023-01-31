/*
OBEJTIVO 1 - CLICAR NA SETA AVANÇAR E MOSTRAR O PRÓXIMO CARTÃO DA LISTA
    - PASSO 1 - PEGAR ELEMENTO HTML DA SETA AVANÇAR
    - PASSO 2 - IDENTIFICAR O CLIQUE DO USUÁRIO NA SETA AVANÇAR
    - PASSO 3 - FAZER APARECER O PRÓXIMO CARTÃO DA LISTA
    - PASSO 4 - BUSCAR O CARTÃO COM A CLASSE "SELECIONADO" E ESCONDER

OBEJTIVO 2 - CLICAR NA SETA VOLTAR E MOSTRAR O ANTERIOR CARTÃO DA LISTA
    - PASSO 1 - PEGAR ELEMENTO HTML DA SETA VOLTAR
    - PASSO 2 - IDENTIFICAR O CLIQUE DO USUÁRIO NA SETA VOLTAR
    - PASSO 3 - FAZER APARECER O CARTÃO ANTERIOR DA LISTA
    - PASSO 4 - BUSCAR O CARTÃO COM A CLASSE "SELECIONADO" E ESCONDER
*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function() {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function() {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
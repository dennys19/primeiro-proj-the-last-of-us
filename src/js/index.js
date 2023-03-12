
// passo 1 dar um jeito de pegar o elemento HTML dos botões
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

        //passo 2 dar um jeito de indentificar o clique do usuario do botao
        botoescarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
               
        desativarbotaoselecionado();
       
        selecionarbotaocarrossel(botao);

        esconderimagemativa();
               
        mostrarimagemdefundo(indice);



    })
})

function mostrarimagemdefundo(indice) {
    mostrarimademdefundo(indice);
}

function mostrarimademdefundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarbotaocarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderimagemativa() {
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
}

function desativarbotaoselecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}

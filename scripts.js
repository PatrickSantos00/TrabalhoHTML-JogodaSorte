const botaoCorreto = sorteiaNumero(5) + 1;

function sorteiaNumero(max) {
    return Math.floor(Math.random() * max);
}

function verificaEscolha(botaoEscolhido) {
    const resultado = document.getElementById('resultado');
    if (botaoEscolhido === botaoCorreto) {
        resultado.textContent = `Você acertou! O botão correto é o ${botaoEscolhido}`;
        resultado.className = "resultado-sucesso";
    } else {
        resultado.textContent = `Você errou! O botão ${botaoEscolhido} não é o correto`;
        resultado.className = "resultado-erro";
    }
}

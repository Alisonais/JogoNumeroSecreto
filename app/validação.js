


function verificaSeChuteValido (chute){
    const numero = +chute;
    console.log(numero);

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(NumeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>O valor precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h1>Você Acertou!</h1>
        <h3>O numero Secreto era ${numeroSecreto}!</h3>
        <button id="jogarNovamente" class="btJogarNovamente">Jogar Novamente</button>
        ` 
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>'
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function NumeroMaiorMenor (numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e=>{
    if (e.target.id === 'jogarNovamente'){
        window.location.reload()
    }
})
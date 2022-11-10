
// ----- CONSTANTES -----

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.getElementById('Chute');
const dica = document.getElementById('dica');
var contador = 0;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

// ----- EVENTOS -----

recognition.start();
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());
document.body.addEventListener('keydown',(e)=>{testeBotao(e)});
document.body.addEventListener('click', e=>{JogarNovamente(e)});

// ----- FUNÇÕES ----- 

function onSpeak(e){
        chute = e.results[0][0].transcript;
        contarTentativa()
        exibeChuteNaTela(chute);
        verificaSeChuteValido(chute);
}
function exibeChuteNaTela (chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span
    `
}  
function semReconhecimentoVoz (){
    const chute = recebeValor()
    contarTentativa()
    exibeChuteNaTela(chute);
    verificaSeChuteValido(chute);
}
function recebeValor(){
    e = prompt(`digite o Numero Secreto entre ${menorValor} e ${maiorValor}`);
   return e;
}
function verificaSeChuteValido (chute){
    const numero = +chute;
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
        <h1>Você Acertou :)</h1>
        <h3>O numero Secreto é ${numeroSecreto}!</h3>
        <h3>foram ${contador} jogadas, Que tal um novo jogo?</h3>
        <button id="jogarNovamente" class="btJogarNovamente">Jogar Novamente</button>
        ` 
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i><br><br>digite a tecla Enter para tentar novamente</div>'
    } else {
        elementoChute.innerHTML += '<div id="dica">O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i><br><br>digite a tecla Enter para tentar novamente</div>'
    }
}
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}
function NumeroMaiorMenor (numero){
    return numero > maiorValor || numero < menorValor
}
function JogarNovamente(e){
    if (e.target.id === 'jogarNovamente'){
        window.location.reload();
    }
}
function testeBotao(e){
    if(e.code === 'Enter'){
        semReconhecimentoVoz()
    } else {
        console.log('tente novamente');
    }
}
function contarTentativa(){ 
    contador++;
    console.log(contador);
    if(contador == 15){
        perdeu()
    }
}
function perdeu(){
    document.body.innerHTML = `
    <h1>Você perdeu :(</h1>
    <h3>O numero Secreto era ${numeroSecreto}</h3>
    <h3>Não desista Tente novamente</h3>
    <button id="jogarNovamente" class="btJogarNovamente">Jogar Novamente</button>
    `
}
//variaveis
const menorValor = 1;
const maiorValor = 1000;
const elementoMenorValor = document.getElementById('menorValor');
const elementoMaiorValor = document.getElementById('maiorValor');
const numeroSecreto = gerarNumeroAleatorio();
//edicão de elementos
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
//funções
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}
console.log('numero secreto é:',numeroSecreto)
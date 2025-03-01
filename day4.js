let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;
console.log(numeroSecreto);

let numeroChute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));

while(numeroChute !== numeroSecreto){
    if(numeroChute > numeroSecreto){
        alert('O número secreto é menor.');
        numeroChute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
    }else{
        alert('O número secreto é maior.');
        numeroChute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
    }
    tentativas++;
}

let msgTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns, você descobriu o Número Secreto (${numeroSecreto}) em ${tentativas} ${msgTentativa}!`);
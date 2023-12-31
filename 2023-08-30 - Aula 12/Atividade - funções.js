// 1- Uma construtora precisa de um sistema que realiza o cálculo da aréa de diversos terrenos retangulares por meio de uma função, você recebeu o relatório com as medidas dos lados dos terrenos e precisa repassar os valores das áreas. Sendo assim, crie a função para realizar os cálculos dos seguintes terrenos (crie uma função e faça 4 chamadas passando diferentes valores de parâmetros):
// - Terreno padrão: largura: 50m / profundidade: 40m
// - Terreno sobrado: largura: 30m / profundidade: 40m
// - Terreno mansão: largura: 100m / profundidade: 100m
// - Terreno comercial: largura: 40m / profundidade: 40m

let numeroLotes = 0 // usuário digitará quantos lotes; exercício pede 4.
numeroLotes = Number(prompt(`Digite o número de lotes que você pretende analisar.`))
let listaDeAreas = "Áreas:"
let area

function areaLote(larg,prof) {
    return (larg*prof)
}

for(i=0; i<numeroLotes; i++) {
    let larg = Number(prompt(`Digite a largura do ${i+1}º lote:`))
    let prof = Number(prompt(`Digite a profundidade do ${i+1}º lote:`))
    area = areaLote(larg,prof)
    listaDeAreas = `${listaDeAreas} ${i+1}º lote = ${area}`
        if (i === (numeroLotes-1)) {
            listaDeAreas = `${listaDeAreas}.`
        }else{
            listaDeAreas = `${listaDeAreas};`
        }
    }



// 2 - A partir da função de área retangular criada anteriormente, crie uma função que calcula
// a área de um triangulo, a qual deve receber um valor de base e altura como argumento,
// calcular a área pela função área e divide o resultado por 2 para ter o retorno correto.
function areaTriangulo(base,altura) {
    return (base*altura/2)
    }
    
resultado = areaTriangulo(6,4)



// 3 - Crie uma função que determine quantos números primos existem dentro de um
// intervalo que o usuário informar. Utilize uma abordagem de repetição com for ou while.

/*
1 - declarar variáveis e funções
2 - com prompt, fazer 2 perguntas para estabelecer o intervalo
3 - se a função primo retornar 'é primo', adicionar à lista. Senão, ignorar.

*/
let limInferior = 0
let limSuperior = 0
let listaDePrimos = []

limInferior = Number(prompt("Digite o limite inferior a ser verificado."))
limSuperior = Number(prompt("Digite o limite superior a ser verificado."))

for(p=limInferior; p<(limSuperior+1); p++){
    if (primo(p) == `É primo.`){
        listaDePrimos.push(p)
    }
}

// como transformar o código acima em uma função:

function ListaDePrimosNoIntervalo(limInferior=0, limSuperior=0){
let listaDePrimos = []
for(p=limInferior; p<(limSuperior+1); p++){
    if (primo(p) == `É primo.`){
        listaDePrimos.push(p)
    }
}
}


function primo(p){
let i = 3
if (p == 2 || p == 3){
	return (`É primo.`)    
}else if(p%2 == 0 || p < 2){
	return(`Não é primo.`)
}else{
    while(p>i) {
	    if(p%i == 0){
            return(`Não é primo.`)	    
	    }else{
	    i = i+2 //soma 2 para só pegar os números ímpares
	    }
    }
    if(i == p){
        return(`É primo.`)
    }
}
}

console.log(listaDePrimos)
ListaDePrimosNoIntervalo(5, 17)




// 4 - Utilizando funções, fazer um sistema que receba um número e retorne se ele é par ou ímpar.
function parOuImpar(a){
    let resposta = ""
    if ((a%2) === 0){
    resposta = (`O número ${a} é par.`)    
    }else{
    resposta = (`O número ${a} é ímpar.`)   
    }
    return resposta
}

let numero
numero = Number(prompt(`Digite um número para ser verificado.`))
parOuImpar(numero)



// 5 - Criar uma calculadora utilizando funções para cada operação. O usuário deve digitar o primeiro número, o segundo número e em seguida a operação que deseja realizar 
// (1 - Soma 2 - Subtração 3 - Multiplicação 4 - Divisão). O resultado deve ser mostrado na tela. Digite o primeiro número: Digite o segundo número: Qual operação deseja realizar? 1 – Soma 2 – Subtração 3 – Multiplicação 4 - Divisão

function soma(a,b) {
    let resultado = (a+b)
    return resultado
    }
function multi(a,b) {
    let resultado = (a*b)
    return resultado
    }
function sub(a,b) {
    let resultado = (a-b)
    return resultado
    }
function div(a,b) {
    let resultado = (a/b)
    return resultado
    }
    
let a = Number(prompt(`Digite um número:`))
let b = Number(prompt(`Digite outro número:`))

    let operacao = prompt(`Digite a operação desejada: (1-Soma ;  2-Subtração ; 3-Multiplicação ; 4-Divisão`)
switch(operacao){
	case '1':
        console.log(`Você escolheu somar.`)
        console.log(soma(a,b)
        break

	case '2':
        console.log(`Você escolheu subtrair.`)
        console.log(sub(a,b))        
		break

	case '3':
        console.log(`Você escolheu multiplicar.`)
        console.log(multi(a,b))
		break
	
	case '4':
        console.log(`Você escolheu dividir.`)
        console.log(div(a,b))
		break

	default:
		alert(`A opção ${operacao} é inválida.`)

}

// 6 - Crie 2 funções: a primeira recebe 3 números como argumento, realize a soma desses 3 números e chama a segunda função, que por sua vez recebe como argumento uma soma e uma quantidade e retorna a média. Armazene o resultado da média em uma variável e exiba por um alert.
let a = Number(prompt(`Digite um número:`))
let b = Number(prompt(`Digite outro número:`))
let c = Number(prompt(`Digite o último número:`))
let quantidade = 3
function soma (a,b,c) {
    let resultado = (a+b+c)
    return resultado
    }
let resultado = soma (a,b,c)

function media (resultado, quantidade){
    let mediaDosValores = (resultado/quantidade)
    return mediaDosValores
    }
let mediaDosValores = media (resultado, quantidade)

alert(`A media dos números digitados é ${mediaDosValores}.`)

// 7 - Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função e depois os exibe por um alert.
let menor = 99999999999999999999
let maior = -99999999999999999999
let numero
let soma = 0
let divisor
// definir as funções de maior, menor e média.
function fmaior(numero){
    
    if (numero >= maior){ 
        maior = numero
        }
    return maior
}

function fmenor(numero){
    
    if (numero <= menor){ 
        menor = numero
        }
    return menor
}

function fmedia(soma, divisor){
let media = soma/divisor
return media
}

divisor = Number(prompt(`Quantos números você quer verificar?`)) // usuário digita '3' conforme enunciado.

for (i=0; i<divisor; i++){
    numero = Number(prompt(`${i+1}º número:`))
    fmaior(numero)
    fmenor(numero)
    soma = soma + numero
}
media = fmedia(soma, divisor)

console.log(`Você digitou ${divisor} números. O maior foi ${maior}, o menor ${menor}, a média é ${media}.`)

alert(`Você digitou ${divisor} números. O maior foi ${maior}, o menor ${menor}, a média é ${media}.`)



// 8 - Crie uma função que recebe um número inteiro e retorna todos os primos, de 1 até ele.
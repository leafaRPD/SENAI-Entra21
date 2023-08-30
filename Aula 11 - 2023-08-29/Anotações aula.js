// while e do while - > quando não se sabe quantas vezes se repetirá
// for -> quando se sabe quantas vezes o loop se repetirá

// Sintaxe do for:
// for (valor inicial; condição; iteração) {
//   código a ser repetido enquanto a condições for verdadeira
// > é aqui, no final do código que será executado o 'i++'/'i--'
// }

// for (i=0; i<42; i++)
// neste caso, o loop será repetido 42 vezes.

// for (i=33; i>0; i--)
// neste caso, o loop será repetido 33 vezes.

// o 42 ou 33 pode ser uma variável 'quantidade' que o usuário definirá através de um prompt. Ou seja, a quantidade de vezes que o loop será repetido pode ser variável.

for(i=0; i<10; i++){
    console.log(`Buu!`)
}

// exemplo em que a pessoa insere o número de repetições:
let nuBu = prompt(`Insira o número de "Bu" desejado:`)
let bu = "b"
for(i=0; i<nuBu; i++){
    bu = bu+"u"
    console.log(`${bu}!`)
}

// Exercício proposto:
// 1) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

let numMultas, valorTotal = 0, valor = 0, ponto = 0, pontoTotal = 0
numMultas = Number(prompt(`Digite o número de multas que deseja cadastrar:`))
for(i=0; i<numMultas; i++) {
    valor = Number(prompt(`Digite o valor da ${i+1}ª multa, em Reais:`))
    valorTotal = valorTotal + valor
    ponto = Number(prompt(`Digite quantos pontos a ${i+1}ª infração soma à carteira:`))
    pontoTotal = pontoTotal + ponto
}
let status
if (pontoTotal < 21) {
    status = `Você está regular.`
}else{
    status = `Você está IRREGULAR.`
}
console.log(`Suas multas somam ${valorTotal} Reais e ${pontoTotal} pontos à carteira. ${status}`)

// 2) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!” (DESAFIO: Mostrar na tela também a quantidade de frutas que foram adicionadas)

let fruta, totalDeFrutas = 0, listaFrutas = ""

do {
    fruta = prompt(`Digite qual fruta adicionar:`).toLowerCase()
    totalDeFrutas++
    listaFrutas = `${listaFrutas} ${fruta}`
        if (fruta === "cereja") {
            listaFrutas = `${listaFrutas}.`
        }else{
            listaFrutas = `${listaFrutas},`
        }
} while(fruta != "cereja")

console.log(`Sua salada de frutas está pronta! Ela tem ${totalDeFrutas} frutas, que são${listaFrutas}`)



// 3) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. 

// 4) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".
// Este não funcionou
let numero 
alert(`Digite a sequência de números de 1 a 10, invertida.`)
for (i=10; numero>0; i--) {
    numero = Number(prompt(`Digite o próximo:`))
    if (numero != i){
        alert(`Você errou a sequência.`)
    }
}
// Este funcionou
let numero
let i = 10
alert(`Digite a sequência de números de 1 a 10, invertida.`)
do {
    numero = Number(prompt(`Digite o próximo:`))
    if (numero != i){
        console.log(`Você errou a sequência.`)
        break
    }
    i--
} while(numero>0)
if (i = 0) {
    console.log(`Parabéns! Você acertou!`)
}

// 5) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.

let maior = 0
let menor = 999999999999999
let numero

for (i=0, i<10, i++){
    numero = Number(prompt(`Digite o ${i+1}º número:`))
    if (numero < menor){ 
        menor = numero
    }
    if (numero > maior){ 
        maior = numero
    }
}

// 6) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia.

// 7) O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.

// 8) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).

// 9) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas.

// 10) Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado.

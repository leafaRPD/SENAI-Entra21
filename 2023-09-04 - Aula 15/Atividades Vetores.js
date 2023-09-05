// 1) Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela.
// a lista tem os elementos 0 a 14. 

// indexOf() -> procura e retorna o índece de um item no Array.

let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (i=0; i<10; i++){
    inteiros.pop()
}
alert(inteiros)

// 2) Desenvolva um programa que o usuário digite 10 números, ao final mostre o valor do resultado do somatório da primeira metade dos números menos o somatório da segunda metade. (Somatório da primeira metade - Somatório da segunda metade)
let numeros = [] // lista inicial de números; lista vazia.
let varTemporaria = "" // variável temporária para cada número digitado a ser adicionado no array.
let comprimento = 10 // o exercício pede 10. Estou fazendo com 4 para facilitar os testes.
// Usarei 9 5 3 0 1 2 9 2 8 4
// 18 - 25 = -7

for (i=0; i<comprimento; i++){
    varTemporaria = Number(prompt(`Digite o ${i+1}º número:`))
    numeros.push(varTemporaria)
}

console.log(numeros)
let primeiraMetade = numeros
let somaDaPrimeiraMetade = 0
for (i=0; i<(comprimento/2); i++){
    somaDaPrimeiraMetade += primeiraMetade[i]
}
console.log(somaDaPrimeiraMetade)


let segundaMetade = numeros
let somaDaSegundaMetade = 0
for (i = (comprimento-1); i>=(comprimento/2); i--){
    somaDaSegundaMetade += segundaMetade[i]
}
console.log(somaDaSegundaMetade)

let resultado = somaDaPrimeiraMetade - somaDaSegundaMetade
console.log(resultado)
alert(`Os números digitados foram ${numeros}. A soma da primeira metade foi ${somaDaPrimeiraMetade} e da segunda foi ${somaDaSegundaMetade}. 
Resultado final: ${resultado}.`)


// 3) Cria um programa onde o usuário digite 5 números. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.
let varTemporaria = "" // variável temporária para cada número digitado a ser adicionado no array.
let listaDosImpares = []
let somaDosImpares = 0 // se colocar "" ele levará os números como str e 'somará' 1,3,5 como 135.
for (i=0; i<5; i++){
    varTemporaria = Number(prompt(`Digite o ${i+1}º número:`))
    if(varTemporaria%2 != 0){
        listaDosImpares.push(varTemporaria)
        somaDosImpares += varTemporaria
    }
}
console.log(listaDosImpares)
console.log(somaDosImpares)


// 4) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.
let vetorUm
let vetorDois
let comprimentoTotal

vetorUm = [1, 2, 3]
vetorDois = ['A', 'B', 'C']
vetorTres = []
comprimentoTotal = vetorUm.length

for(i=0; i<comprimentoTotal; i++){
    vetorTres.push(vetorUm[i])
    vetorTres.push(vetorDois[i])
}
console.log(vetorTres)

// 5) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra.
let inteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 5]
let index = []
let numero
numero = Number(prompt(`Digite o número a ser verificado:`))

for (i=0; i<15; i++){
    if(numero == inteiros[i]){
    index.push(i)
    }
}
console.log(index)


// 6) Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.

// 7) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. (Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).

// 8) Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos. Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento. Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”
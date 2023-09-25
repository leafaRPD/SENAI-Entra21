/*Atividade (Arrow Functions + métodos de Array)*/

// Crie 2 funções: a primeira recebe 3 números como argumento, realize a soma desses 3 números e chama a segunda função, que por sua vez recebe como argumento uma soma e uma quantidade e retorna a média. Armazene o resultado da média em uma variável e exiba por um alert.

// Solução do ChatGPT:
// Segunda função: Calcula a média /* ou seja, primeiro se declara a 2ª função, que será chamada pela primeira
let calcularMedia = (soma, quantidade) => soma / quantidade

// Primeira função: Soma três números e chama a segunda função para calcular a média.
let somaECalcMedia = (a, b, c) => {
    let soma = a + b + c
    return calcularMedia(soma, 3)
}

// Chamando a primeira função com três números e exibindo o resultado em um alert
let media = somaECalcMedia(10, 20, 30) // você pode substituir 10, 20, 30 pelos números que desejar
alert(`A média dos números é: ${media}`)


// Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função e depois os exibe por um alert. 

// declarar funções:
let maiorEMenor = (a, b, c) => {
 
}

// testar função com os parâmetros escolhidos:
let extremos = maiorEMenor (102, 103, 123, 456, 987, 789, 465, 654, 781)












// Crie uma função que recebe um número inteiro e retorna todos os primos, de 1 até ele.

// Crie um programa que recebe 10 números de inscrição para um campeonato, a partir desses números, crie um array para os jogadores do time de números pares e um outro para os jogadores do time de números ímpares e exiba na tela se os times estão com a mesma quantidade de jogadores. 

// Crie um laço de repetição para solicitar 5 idades e armazená-las em um array, use o método every para verificar se todos os usuários são maiores de idade.

// DESAFIO REDUCE 1: Crie um laço de repetição para solicitar 5 números, armazene-os em um array e use o método reduce para encontrar e mostrar o maior valor no array. 

// Crie um array de preços e use o método filter para criar um novo array que contenha apenas os preços inferioriores a R$ 50.

// Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta)
// resolução do professor. Na aula do dia 29/8 eu fiz o mesmo exercício de forma diferente.
let frutas = []
let frutasSemRepeticao = []
let quantidadeDasFrutasSemRepeticao = []
// Variavel para controlar o laço
let continuar = true

while(continuar == true){
    let fruta = prompt("Qual a fruta de agora?").toLowerCase()
    if(fruta == "cereja"){
        continuar = false
    }
    // Sempre adicionar a fruta, mesmo que seja cereja
    frutas.push(fruta)  
}

alert("A salada está pronta!")
alert(frutas)

// Alimentar os vetores de frutasSemRepeticao e quantidadeDasFrutasSemRepeticao
frutas.forEach(frutaAtual => {
    // Verificar se a fruta já está no frutasSemRepeticao
    let indiceDaFrutaAtual = frutasSemRepeticao.indexOf(frutaAtual)
    if(indiceDaFrutaAtual == -1){
        frutasSemRepeticao.push(frutaAtual)
        // Adicionar novo indice com a quantidade 1
        quantidadeDasFrutasSemRepeticao.push(1)
    } else {
        // 
        quantidadeDasFrutasSemRepeticao[indiceDaFrutaAtual]++
    }
})

// Exibir um alerta para cada fruta mostrando a sua quantidade
for(let i = 0; i < frutasSemRepeticao.length; i++){
    let mensagem = `A fruta ${frutasSemRepeticao[i]} tem ${quantidadeDasFrutasSemRepeticao[i]} elementos na salada`
    alert(mensagem)
}

// DESAFIO REDUCE 2: Crie uma calculadora de médias solicitando as notas por meio de um laço de repetição while, onde o usuário tenha a opção de digitar uma nova nota ou verificar resultado digitando “-1”. Armazene as notas em um Array e utilize o método reduce para obter a soma delas, após ter a soma calcule a média dividindo a soma pelo tamanho do array (array.length).
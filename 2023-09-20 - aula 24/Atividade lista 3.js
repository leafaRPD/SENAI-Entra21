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



/* Crie uma função anônima para gerar uma mensagem de convite de casamento, 
que deve receber nomeConvidado, data, horário, local e nomeNoivos e a partir 
disso monte uma mensagem convidando a pessoa para o casamento.
Realize pelo menos 3 chamadas para ela e valide se o retorno foi o esperado.
*/
let geraMensagem = function (nomeConvidado, data, horario, local, nomeNoivos){
    let mensagem = `Caro ${nomeConvidado}, 
    Te para uma cerimônia de casamento, no dia ${data} as ${horario} horas no local
    ${local}.
    
    Atenciosamento ${nomeNoivos}`
    console.log(mensagem)
  }
  geraMensagem('nomeConvidado', 'data', 'horario', 'local', 'nomeNoivos')
  geraMensagem('nomeConvidado', 'data', 'horario', 'local', 'nomeNoivos')
  geraMensagem('nomeConvidado', 'data', 'horario', 'local', 'nomeNoivos')






// Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função e depois os exibe por um alert. 

// Crie uma função que recebe um número inteiro e retorna todos os primos, de 1 até ele.

// Crie um programa que recebe 10 números de inscrição para um campeonato, a partir desses números, crie um array para os jogadores do time de números pares e um outro para os jogadores do time de números ímpares e exiba na tela se os times estão com a mesma quantidade de jogadores. 

// Crie um laço de repetição para solicitar 5 idades e armazená-las em um array, use o método every para verificar se todos os usuários são maiores de idade.

// DESAFIO REDUCE 1: Crie um laço de repetição para solicitar 5 números, armazene-os em um array e use o método reduce para encontrar e mostrar o maior valor no array. 

// Crie um array de preços e use o método filter para criar um novo array que contenha apenas os preços inferioriores a R$ 50.

// Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de cada fruta) 

// DESAFIO REDUCE 2: Crie uma calculadora de médias solicitando as notas por meio de um laço de repetição while, onde o usuário tenha a opção de digitar uma nova  nota ou verificar resultado digitando “-1”. Armazene as notas em um Array e utilize o método reduce para obter a soma delas, após ter a soma calcule a média dividindo a soma pelo tamanho do array (array.length).
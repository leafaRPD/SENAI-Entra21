/* exemplo de função:
let desligar = function(parâmetros){
    //corpo da função
}

Atividade (Funções)

1- Crie uma função anônima para gerar uma mensagem de convite de casamento, que
deve receber nomeConvidado, data, horário, local e nomeNoivos e a partir disso
monte uma mensagem convidando a pessoa para o casamento. Realize pelo menos 3
chamadas para ela e valide se o retorno foi o esperado. */ 



let mensagemCasorio = function(nomeConvidado, data, horario, local, nomeNoivos){
    return (`Olá ${nomeConvidado}! Nós, ${nomeNoivos}, convidamos você a participar da nossa cerimônia de casamento no dia ${data}, às ${horario}. Local: ${local}.`)
}

let mensagem = mensagemCasorio ('Rafa', '18 de agosto', '13:14', 'Bistek', 'Adevir e Zeocleide')
console.log(mensagem)

/* 
2 - Crie uma calculadora de média que solicite ao usuário um conjunto de números e
calcule a média deles. Use uma função autoinvocada para encapsular o código da
calculadora.
*/
// exemplo:
(function () {
    console.log("Olá")
})() // esses parênteses no final, e o parêntese no início e após as chaves {}, fazem com que ela seja autoinvocada.
// resolução:
(function(){
    let soma = 0
    let contagem = 0
    let opcao = ""
    while(opcao != "sair"){
        opcao = prompt(`Digite um número ou 'sair'`)
        if(opcao != 'sair'){
            opcao = Number(opcao)
            soma += opcao
            contagem ++
        }
    }
let media = soma / contagem
alert(`A média é ${media}.`)
} )()
// as variáveis que foram declaradas dentro da função autoinvocada só existem dentro da função. Ou seja, se chamar a variável do lado de fora (como fazer um console.log), ela não existe.

/* 
3 - Crie um Array numérico com 10 elementos e a partir dele utilize os métodos mostrados para verificar se todos são ímpares. Além disse crie outro Array a partir dele onde os novos elementos devem ser os antigos ao quadrado. */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//verificar se todos são ímpares. Usaremos o every.
let verificacao = numeros.every(itemAtual => itemAtual%2 != 0)
console.log(verificacao)

// verificar se pelo menos um numero é ímpar:
let verificacaoSome = numeros.some(itemAtual => itemAtual%2 != 0)
console.log(verificacaoSome)

// Criar um novo array com os numeros antigos ao quadrado
let novoArray = numeros.map(itemAtual => itemAtual**2)
console.log(novoArray)

// join: transformar array em string: 
let stringArray = numeros.join() // o divisor padrão é a vírgula. Se colocar "" aspas vazias, ele remove o separador. Se colocar "-", o separador é o - (traço). "ola" vira 1ola2ola3ola4ola5ola6ola7ola8ola9ola10
console.log(stringArray)

// reduce:
numeros.reduce() // ficou para a próxima aula.
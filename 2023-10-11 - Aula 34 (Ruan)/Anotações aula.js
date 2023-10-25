/* Aula do Ruan. Continuou o assunto da aula passada, falando sobre objetos.

Exercícios (Classroom, Aula 05, .pdf 'exercício 2 - Arrays com objetos'):
1 - Crie um laço de repetição para solicitar 03 nomes e idades, a cada nome e idade
digitado, crie um objeto e armazene dentro de uma lista de pessoas.
Após isso, crie uma nova lista utilizando o método filter para buscar as pessoas comas
idades maiores que 20 anos. */

let listaPessoas =[]
let listaFiltrada = []
n = prompt("Quantas pessoas você quer cadastrar?")
for (i=0; i<n; i++){ // LINHA 1
    let pessoa = {   // LINHA 2
        nome: "",    // LINHA 3
        idade: "",   // LINHA 4
    }
    pessoa.nome = prompt(`Digite o ${i+1}º nome:`)
    pessoa.idade = Number(prompt(`Agora digite a ${i+1}ª idade:`))
    listaPessoas.push(pessoa)
}

console.log(listaPessoas)

listaFiltrada = listaPessoas // podia ter sido feito direto mas é boa prática declarar antes e depois fazer alguma manipulação.
listaFiltrada = listaFiltrada.filter(valorDeInteresse => valorDeInteresse.idade > 20);
console.log(listaFiltrada)

// RESOLUÇÃO DO PROFESSOR:

let listaPessoas =[]
let listaFiltrada = []
n = prompt("Quantas pessoas você quer cadastrar?")
for (i=0; i<n; i++){
    nome = prompt(`Digite o ${i+1}º nome:`)
    idade = Number(prompt(`Agora digite a ${i+1}ª idade:`))
    let pessoa = {nome, idade} // 'LINHA 2' a '4' lá de cima. Tem que mudar a ordem.
    listaPessoas.push(pessoa)
}

console.log(listaPessoas)
// a parte do filtro foi igual.


/*
2 - Crie um programa para simular um pedido de um e-commerce, onde devem ser
solicitados os produtos e preços e armazenar esses dados em objetos dentro de um
Array. Inclua um laço de repetição que pergunte se o cliente deseja finalizar a compra e
ao final da compra, exiba o valor total e a quantidade de produtos.
Obs: Dentro do laço de repetição busque apenas criar os objetos e incluir na lista, as
análises de preço e quantidade faça depois do laço de repetição.
*/

let listaCompras= []
let continuar = true
while (continuar == true){
    let produto = prompt(`Insira o nome do produto:`)
    let preco = Number(prompt(`Digite o preço do produto:`))
    let objetoProduto = {produto, preco}
    listaCompras.push(objetoProduto)
    continuar = confirm("Continuar comprando?") // um botão parecido com 'alert' que pergunta entre continuar ou cancelar.
}

let quantidadeProdutos = listaCompras.length

// 1ª forma: sem chaves:
let somaTotal = listaCompras.reduce((somaAcumulada, objetoAtual) => somaAcumulada + objetoAtual.preco, 0)
// 2ª forma: com chaves:
let somaTotal = listaCompras.reduce((somaAcumulada, objetoAtual) => {somaAcumulada + objetoAtual.preco, 0})


// 3ª forma: 'for'
let valorTotal = 0
for(i=0; i<quantidadeProdutos; i++){
    valorTotal += listaCompras[i].preco
}

console.log(valorTotal)

// 4ª forma: forEach
let soma = 0
listaCompras.forEach(objetoAtual => soma += objetoAtual.preco)

/* usa-se o 'new' no início para cada nova instância (uso) de uma função construtora.
Exemplo: */ 
function Carro(marca, modelo, ano){ // função construtora
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}
let carro1 = new Carro(vw, gol, 93) // uso da função construtora, criando um objeto 'carro1'.
let carro2 = new Carro(Fiat, 147, 79) // criado o 'carro2', e assim vai.
console.log(carro1)

// JSON: Não pode ter métodos/funções, e precisa usar aspas duplas "".

/*Datas: várias formas, formatos. Olhar slide.
data atual
data por meio de uma string de data
data em milissegundos a partir de 1º de jan de 1970
valors individuais de data (ano, mês, dia, hora, min, s, ms)

Exemplos:
const dataAtual = new Date()

const dataEspecifica = new Date('2023-10-21')

const dataPorMilisegundos = new Date (16333897864880100)

                                ano, mês, dia, h, min, s, ms
const dataCustomizada = new Date(2023, 1, 22, 14, 30, 0) // sendo que o Mês começa do zero (jan) e vai até 11 (dez). Se não colocar o dia, traz como dia 1. O resto (horário), se não colocar traz como zero.

const data = new Date()
const ano = data.getFullYear() // traz só o ano
const mes = data.getMonth() // traz só o mês
const dia = data.getDate() // traz o dia
*/

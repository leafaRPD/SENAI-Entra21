/* Aula 39 foi prova do Rafael, dia 23/10. Dia 24 foi inglês. 
Hoje, revisão e prova 2 do Ruan, mais aula após prova.*/

    //Método reduce:

Ex: 
let numeros = [1,2,3,4,5,6]

let soma = numeros.reduce(function(somaAcumulada, itemAtual) { // itemAtual é o primeiro valor do array, depois o segundo, e assim por diante.
    return somaAcumulada + itemAtual
}, 0)

// outra sintaxe:
let soma = numeros.reduce((somaAcumulada, itemAtual) => somaAcumulada + itemAtual, 0)


let pares = numeros.filter(itemAtual => itemAtual % 2 == 0) // retorna 2, 4 e 6
let pares = numeros.find(itemAtual => itemAtual % 2 == 0) // retorna 2: primeira ocorrência
let numeros = [1,2,3,4,5,6]
let pares = numeros.findLast(itemAtual => itemAtual % 2 == 0) // retorna 6: última ocorrência
console.log(pares)

    // replace
let texto = "Meu nome é John"
console.log(texto.replace("nome", "cachorro")) // retornará "Meu cachorro é John"

    // split
    console.log(texto.split("")) // letra a letra
    console.log(texto.split(" ")) // palavra a palavra

    // trim: remove espaços no início e final de uma string
    // trimStart: remove espaços no início de uma string
    // trimEnd: (...) no final.

    let textoArray = texto.split(" ") //separou pelos espaços no texto
    console.log(textoArray) // retorna 4 elementos, cada um é uma palavra
    let textoString = textoArray.join(" ") 
    console.log(textoString) // retorna a frase inicial, juntando cada elemento com espaços entre eles.

*/


// Início da aula foi continuação dos exercícios da aula passada (dia 2023-08-30).
// olhar os métodos nos slides.

let lista = [30, 10, 54]
let verificacaoDePares = lista.every(function(valorAtual){
    // verificar se todos os itens do Array são pares:
    return valorAtual % 2 == 0
})

console.log(verificacaoDePares) // true ou false


let lista = [30, 10, 54, 40, 33, 1, 70]
let verificacaoDePares = lista.filter(function(valorAtual){
    return valorAtual > 40
})
console.log(verificacaoDePares)


let numeros = [3,5,6,10,19,24,34]
let result = numeros.findIndex(function(numeroAtual){
    return numeroAtual>13
})
console.log(result)

/* o método 'map' é bem útil porque pode executar contar repetidas em todos os elementos. Olhar bem a documentação e tentar absorver diferentes utilidades dele.
 O 'filter' também é bastante usado. */

 // função anônima autoinvocada: é aquela em que no final, fora das chaves {}, tem os parênteses () de novo.
 (function () {
    let num1 = 5
    let num2 = 1
    console.log(num1+num2)
 }())
// ao rodar o código acima, retornará o resultado da soma 5+1 -> 6.

// arrow function:
/*  sintaxe:
(olhar no slide e colocar aqui)
*/

let lista = [30, 10, 54, 40, 33, 1, 70] // uma lista com dados
let metades = lista.map((valorAtual) => valorAtual/2) // a função arrow function em si
console.log (metades)


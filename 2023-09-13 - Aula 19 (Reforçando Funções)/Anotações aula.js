// depois, olhar no slide, pois o segundo código não está funcionando. O professor colocará depois.
//every
let lista = [30, 10, 54] 
let verificacaoDePares = lista.every(function(itemDoArray){
    return itemDoArray % 2 == 0 
}
)

console.log(verificacaoDePares) // true ou false

// há uma forma de simplificar isso com arrow function

let lista = [30, 10, 54]

let verificacaoDePares = lista.every((itemDoArray) => {return itemDoArray % 2 == 0 })
console.log(verificacaoDePares) // true ou false
    
    //no início, caso houvesse mais de 1 parâmetro, coloca-se parênteses e usa-se a vírgula para separar os parâmetros. Se usar chaves {}, tem que ter return. Se não usar chaevs, não pode ter return

// some: se algum atender à condição (no exemplo, se ao menos 1 deles for par), ele retornará que é verdadeiro.

let lista = [31, 10, 51] 
let verificacaoDePares = lista.some(function(itemDoArray){
    return itemDoArray % 2 == 0 
}
)

// filter: retornará um novo array com os valores que satisfazem a condição. No exemplo, retornará o array chamado 'verificacaoDePares' com apenas o valor 10.
let lista = [31, 10, 51] 
let verificacaoDePares = lista.filter(function(itemDoArray){
    return itemDoArray % 2 == 0 
}
)
console.log(verificacaoDePares)

// find - findLast: retorna respectivamente o primeiro e último valor que satisfaz a condição.
let lista = [31, 4, 10, 51, 16] 
let verificacaoDePares = lista.findLast(function(itemDoArray){
    return itemDoArray % 2 == 0 
}
)
console.log(verificacaoDePares)

// map: retorna novo array após feitas as manipulações.
let lista = [31, 4, 10, 51, 16] 
let listaDobro = lista.map((itemDoArray) => {return itemDoArray*2 
}
)
console.log(listaDobro)

outro exemplo:
let palavras = ["Ruan", "Marco", "Giu"]

let nomes = palavras.map(palavrasIndividual => {
    return `O nome é ${palavrasIndividual}`
})

console.log(nomes)

// forEach: ao invés de usar um loop pra fazer algo, esse forEach simplifica.
// exemplo do que fazíamos antes:

let numeros = [2, 20, 50]
let metadeNumeros = []

for(let i=0; i < numeros.length; i++){
    metadeNumeros [i] = numeros[i] / 2
}
console.log(metadeNumeros)

// com forEach:
let numeros = [2, 20, 50]
let metadeNumeros = []
let resultado = numeros.forEach((numero, indice) => metadeNumeros[indice] = numero /2)
console.log(metadeNumeros)

// a mesma coisa com o map:
let numeros = [2, 20, 50]
let resultadoMap = numeros.map((numero) => numero / 2)
console.log(resultadoMap)
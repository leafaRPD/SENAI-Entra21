function soma(n1 = 0, n2 = 0) {
    const soma = n1+ n2
}
soma(1,2)


// função anônima como valor de uma variável
let soma = function (numero1= 0, numero2 = 0) {
    const soma = numero1 + numero2
    return soma
}
let resultado = soma (1,2)




// função anônima como parâmetro método array
let numeros = [1, 2, 3, 4, 5, 6]
let numerosfiltrados = numeros.filter(function(itemDoArrayNumeros){
    return itemDoArrayNumeros %2 == 1 // algo que retorne true ou false

})
console.log(numerosfiltrados)

// reescrevendo o código acima com arrow function:

let numeros = [1, 2, 3, 4, 5, 6]

let numerosfiltrados = numeros.filter((itemDoArrayNumeros) =>{ // se tem chaves, tem que ter return. Se tirar 1, tem que tirar o outro. Mas se tirar, o código só pode ter 1 linha de execução.
    return itemDoArrayNumeros %2 == 1 // algo que retorne true ou false
})
console.log(numerosfiltrados)

// sem chaves e return:
let numeros = [1, 2, 3, 4, 5, 6]
let numerosfiltrados = numeros.filter((itemDoArrayNumeros) => itemDoArrayNumeros %2 == 1 // só pq não tem parâmetros no filter, por exemplo.
)
console.log(numerosfiltrados)


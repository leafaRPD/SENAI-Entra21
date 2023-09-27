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


// métodos:
/*  -every: vai analisar todos os elemenetos do array e se todos atenderem e retornar true. Se 1 não atender retorna false.
    -some: se encontrar ao menos 1 que atenda ao critério, retorna true. Se nenhum atender, retorna false.
    -find: retorna o primeiro elemento que atende à condição. (exemplo: no array 'numeros', se colocar a condição para retornar um ímpar, retorná o 1 pq é o primeiro ímpar que -aparece. Se eu mudar a ordem do array, retornará o primeiro ímpar da nova ordem.)
    -findLast: análogo, mas retorna o último ao invés do primeiro.
    -filter: retorna um novo array com os elementos que atendem à condição. No exemplo do array 'numeros': se filtrar pelos ímpares, voltará com os ímpares em um novo array.
    -findIndex: retornar o índice da primeira ocorrência que satisfizer a condição. Se não encontrar algum, retorna '-1'. 
    -findLastIndex: análogo, mas retorna o último ao invés do primeiro.
    -map: cria um novo array (sem alterar o antigo), permitindo manipular os dados dentro deste novo array.
    exemplo: let numeros = [1, 2, 3, 4, 5, 6]
        let numerosfiltrados = numeros.map((itemDoArrayNumeros) => itemDoArrayNumeros *2 // só pq não tem parâmetros no filter, por exemplo.
)
    console.log(numerosfiltrados)
    -forEach: cria um loop para os elementos de um array, retornando undefined. (retorna nada)

*/
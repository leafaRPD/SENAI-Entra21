let inteiros = [2, 3, 4, 5, 2, 3, 5, 5, 8]
let numeros = []

let nomes = ['Abgail', 'Astrogildo', 'Ursula', 'Ermenegildo']
let cores = []

// método push('catso'): adiciona o novo elemento 'catso' no final do vetor.

inteiros.push(10) // vai adicionar o número '10' no fim de 'inteiros'
cores.push('Roxo') // vai adicionar a cor 'Roxo' no fim de 'cores'

alert(inteiros)
alert(cores)

// método pop(): remove o último elemento do vetor.

nomes.pop()
alert(nomes) // repetirá a lista inicial de nomes sem o 'Ermenegildo' (último nome).

// estudar o unshift e shift; observar o que fazem. Descrições: unshift adiciona um item no início de um array; shift remove o primeiro elemento do array.
let nomes = ['Abgail', 'Astrogildo', 'Ursula', 'Ermenegildo']
nomes.unshift('Ze')
alert(nomes) // novo array tem 5 nomes, começando com Zé.

let nomes = ['Abgail', 'Astrogildo', 'Ursula', 'Ermenegildo']
nomes.shift() // novo array tem 3 nomes, sem o Abgail no início.

// indexOf() -> procura e retorna o índece de um item no Array.
let nomes = ['Abgail', 'Astrogildo', 'Ursula', 'Ermenegildo']
nomes.indexOf('Ursula') // Como "Ursula" é o terceiro elemento, retornará o número 2.

// lastIndexOf()
let nomes = ['Abgail', 'Astrogildo', 'Ursula', 'Ermenegildo', 'Abgail']
alert(nomes.lastIndesOf('Abgail')) // retornará '4' pois foi o último 'Abgail' que apareceu.

// includes() -> Procura e retorna booleano de um item no array.

// splice() -> Remove elemento(s) do array enquanto adiciona novo(s)

// sort() -> Ordena os elementos do array e retorna o array.





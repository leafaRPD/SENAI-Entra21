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


/* 
push ( ) Adiciona um item ao final do array.

pop ( ) Remove um item do final do array.

unshift ( ) Adiciona um item ao início do array.

shift ( ) Remove um item do início do array.

indexOf ( ) Procura e retorna o índice de um item no array.

lastIndexOf ( ) Procura e retorna o último índice de um item no array.

includes ( ) Procura e retorna booleano de um item no array.

splice (pos, quantidadeARemover ) Remove elemento(s) do array enquanto adiciona novo(s). O splice tem várias possibilidades. É bom procurar a documentação
Retirado da documentação:
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // são 3 argumentos: 1 é a posição no array, 0 a ser removidos, e inserir o 'Feb' o que será incluso.
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');  // são 3 argumentos: 4 é a posição no array, 1 será removido na posiçao 4 e 'May' o que será incluso.
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// há possibilidade de se adicionar vários itens de uma vez:
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, / itemN)

sort ( ) Ordena os elementos do array e retorna o array.

link para documentação: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

/* Minha primeira matriz:*/
[[],[],[]] // assim tem 3 linhas; cada colchete interno é uma linha sem coluna.

let matriz = [['A', 'B', 'C'],['D', 'D', 'D'],['E', 'F', 'G']]
alert(matriz) // mostrará tudo em linha
console.table(matriz) // mostrará no console uma matriz

// para retornar o F:
alert(matriz[2][1])

// método de percorrer uma matriz: um loop dentro do outro.
for (i=0; i<3; i++){
    for (j=0; j<3; j++){
        alert(matriz[i][j]) // ou seja, ele vai entrar com i=0 e j=0, em seguida fará o loop do j mais 2 vezes (totalizando 3) antes de aumentar o i pela primeira vez. E repete 1 vez. E repete a última vez.

    }

}

// como criar um número random inteiro, dentro de um intervalo escolhido, sendo o máximo excluso e o mínimo incluso:
// return Math.floor(Math.random()* (max - min) + min)
// Exemplo: quero que seja de 0 a 10, devo colocar max = 11 (para incluir o 10) e min = 0
return Math.floor(Math.random()* (11 - 0) + 0)

// exemplo:
for (i = 0; i< 10; i++){
    console.log(Math.floor(Math.random() * (11 - 0) + 0))
}







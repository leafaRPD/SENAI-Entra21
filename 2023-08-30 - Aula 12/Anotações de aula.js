let a = Number(prompt(`Digite um número:`))
let b = Number(prompt(`Digite um número:`))
// exemplo de função sem parâmetros na própria função (ou seja, nos parênteses após o 'calcArea' não há nenhuma informação):
function calcArea() {
let n1 = a
let n2 = b
let area = a*b
console.log(`A área calculada é ${area}.`)
return area
}

let resultado = calcArea()
alert(`A área é ${resultado}.`)



// exemplo de função com parâmetros na própria função (neste exemplo, n1 e n2):
function somar(n1, n2) {
    let soma = n1 + n2
    return (`A soma é ${soma}.`)
}

somar(4,5) // devolverá 'a soma é 9' como resultado.

//se eu alterar para:
function somar(n1, n2) {
    let soma = n1 + n2
    return (`A soma é ${soma}.`)
}

let resultado = somar(4,5)
alert(`${resultado}`)  // devolverá 'a soma é 9' em um alert.

//do jeito que foi feito até agora, se eu esquecer um dos dois números, dará erro. Porém é possível estabelecer um valor padrão: caso o usuário esqueça de colocar um dos valores, o código assume o valor padrão.

function somar(n1=1, n2=2) {
    let soma = n1 + n2
    return (`A soma é ${soma}.`)
}

let resultado = somar(4,)
alert(`${resultado}`)  // devolverá 'a soma é 6' em um alert. -> 4, pq foi usado n1=4 na linha acima, +2 do valor padrão para n2.


// função para cálculo da área de um triângulo a partir de parâmetros escolhidos pelo usuário:
function areaTriangulo(base,altura) {
    return (base*altura/2)
    }
    
resultado = areaTriangulo(6,4)

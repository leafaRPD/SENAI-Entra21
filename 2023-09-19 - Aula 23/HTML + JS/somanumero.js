let elementoInputUm = document.getElementById('inputUm') // com o document.get, nós adiquirimos o valor do inputUm colocado lá no HTML. Utilizando o ElementById, nós conseguimos selecionar digitando o nome que escolhemos para este elemento.
let elementoInputDois = document.getElementById('inputDois')
let soma

function SomaNumero(){
    soma = Number(elementoInputUm.value) + Number(elementoInputDois.value)
    alert(soma)
}
let aa = document.getElementById('notaUm') // com o document.get, nós adiquirimos o valor do inputUm colocado lá no HTML. Utilizando o ElementById, nós conseguimos selecionar digitando o nome que escolhemos para este elemento.
let bb = document.getElementById('pesoNotaUm')
let cc = document.getElementById('notaDois')
let dd = document.getElementById('pesoNotaDois')
let ee = document.getElementById('notaTres')
let ff = document.getElementById('pesoNotaTres')
let soma
let peso
let media = (soma / peso)

function MediaPonderada(){
    soma = Number(aa.value) + Number(cc.value) + Number(ee.value)
    peso = Number(bb.value) + Number(dd.value)+ Number(ff.value)
    alert(media)
}
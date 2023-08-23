// 1) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, 
//     mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média.
//resolução original:
let nota1
let nota2
let nota3
let media1

nota1 = Number(prompt(`Digite a primeira nota do aluno.`))
nota2 = Number(prompt(`Agora, digite a segunda nota.`))
nota3 = Number(prompt(`E a terceira nota do aluno.`))
media1 = (nota1+nota2+nota3)/3

if(media1<7){
    alert(`Reprovado! A média do aluno é ${media1}.`)
}else{
    alert(`Aprovado! A média do aluno é ${media1}.`)
}
console.log(`A média do aluno é ${media1}.`)

// segunda resolução, melhorada:
let notaUm, notaDois, notaTres // não se usa números em variáveis; trocar 'nota1' por 'notaUm'
let media, somaNotas // fazer passo a passo, criando várias variáveis.

notaUm = Number(prompt(`Digite a primeira nota do aluno.`))
notaDois = Number(prompt(`Agora, digite a segunda nota.`))
notaTres = Number(prompt(`E a terceira nota do aluno.`))
somaNotas = (notaUm+notaDois+notaTres)
// .toFixed(2) -> método de arredondamento. Problema: ele transforma o resultado em 'string' novamente. Então tem que usar o 'Number' no início.
media = Number((somaNotas/3).toFixed(2))

if(media < 7){
alert(`Reprovado! A média do aluno é ${media}.`)
console.log(`Reprovado! A média do aluno é ${media}.`)
}else{
alert(`Aprovado! A média do aluno é ${media}.`)
console.log(`Aprovado! A média do aluno é ${media}.`)
}


// 2) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele 
//     recebe de acordo com o piso (salário mensal igual ou maior que o piso da categoria) ou se recebe abaixo do piso.
let salario
let piso

salario = Number(prompt(`Digite seu salário.`))
piso = Number(prompt(`Agora, digite o piso salarial desta categoria.`))

if(salario<piso){
    alert(`Exija um aumento! Você recebe ${salario}, menos que o piso salarial de ${piso}.`)
}else{
    alert(`Ok, você recebe ${salario} e está de acordo com o piso salarial de ${piso}.`)
}


// 3) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou 
//     tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

// resolução original:

let nome
let idade
let comorbidade

nome = prompt(`Digite o nome do paciente.`)
idade = Number(prompt(`Agora, digite a idade dele.`))
comorbidade = prompt(`Informe "S" caso o paciente tenha comorbidades, e se não tiver informe "N".`)

if(idade >= 60 || comorbidade == "S" || comorbidade == "s"){
    alert(`O paciente ${nome} pode se vacinar!`)
}else{
    alert(`O paciente ${nome} NÃO pode se vacinar!`)
}

// segunda resolução, melhorada:

let nome
let idade
let comorbidade

nome = prompt(`Digite o nome do paciente:`)
idade = Number(prompt(`Agora, digite a idade dele.`))
comorbidade = prompt(`Possui comorbidades? (S/N)`).toLowerCase()
// MÉTODOS '.toUpperCase()' e '.toLowerCase()' ajudam nesta atividade:

if (idade >= 60 || comorbidade == "s" || comorbidade == "sim") {
    alert(`O paciente ${nome} pode se vacinar!`)
}else{
    alert(`O paciente ${nome} NÃO pode se vacinar!`)
}


// 4) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"

let numero

numero = Number(prompt(`Digite um número.`))
resto = numero%2

if(resto != 0){
    alert(`O número ${numero} é ímpar.`)
}else{
    alert(`O número ${numero} é par.`)
}


// 5) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e 
//     uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).

// resolução original:
// segunda resolução, melhorada:
let altura
let peso
let imc

altura = Number(prompt(`Digite a sua altura em centímetros (ex: 182):`))
peso = Number(prompt(`Agora, digite o seu peso em quilos (ex: 71):`))
imc = peso/((altura/100)**2)

if(imc < 18){
    alert(`O seu imc é ${imc} e é considerado abaixo do ideal. Você deve ganhar massa.`)
}else if (imc>25){
    alert(`O seu imc é ${imc} e é considerado acima do ideal. Você deve perder massa.`)
}else{
    alert(`O seu imc é ${imc} e é considerado ideal. Parabéns, mantenha-se assim!`)
}


// 6) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.

// resolução original:

let i1
let i2
let i3
let i4
let i5
let n1
let n2
let n3
let n4
let n5
let maior
let media5
let nmaior

alert(`Escreva o nome e idade de 5 pessoas.`)
n1 = prompt(`Digite o nome da primeira pessoa.`)
i1 = Number(prompt(`Digite a idade da primeira pessoa.`))
n2 = prompt(`Digite o nome da 2ª pessoa.`)
i2 = Number(prompt(`Digite a idade da 2ª pessoa.`)) 
n3 = prompt(`Digite o nome da terceira pessoa.`)
i3 = Number(prompt(`Digite a idade da terceira pessoa.`)) 
n4 = prompt(`Digite o nome da 4ª pessoa.`)
i4 = Number(prompt(`Digite a idade da 4ª pessoa.`)) 
n5 = prompt(`Digite o nome da última pessoa.`)
i5 = Number(prompt(`Digite a idade da última pessoa.`)) 
media5 = (i1+i2+i3+i4+i5)/5
maior = (Math.max(i1,i2,i3,i4,i5))

switch (maior) {
    case i1:
        nmaior = n1;
      break;
    case i2:
        nmaior = n2;
      break;
    case i3:
        nmaior = n3;
      break;
    case i4:
        nmaior = n4;
      break;
    case i5:
        nmaior = n5;
      break;
  }
console.log(`A média das idades é ${media5}, a pessoa mais idosa é ${nmaior}, com idade ${maior}.`)

// segunda resolução, melhorada:

// atalho: 'alt+z' para quebrar a linha.

let noUm, noDois, noTres, noQuatro, noCinco
let idUm, idDois, idTres, idQuatro, idCinco
let somaId, mediaId, iMaior, nMaior
alert(`Digite o nome e idade de cinco (05) pessoas:`)
noUm = prompt(`Digite o nome da primeira pessoa:`)
noDois = prompt(`Digite o nome da 2ª pessoa:`)
noTres = prompt(`Digite o nome da terceira pessoa:`)
noQuatro = prompt(`Digite o nome da 4ª pessoa:`)
noCinco = prompt(`Digite o nome da quinta pessoa:`)

idUm = Number(prompt(`Digite a idade da primeira pessoa:`))
idDois = Number(prompt(`Digite a idade da 2ª pessoa`))
idTres = Number(prompt(`Digite a idade da terceira pessoa:`))
idQuatro = Number(prompt(`Digite a idade da 4ª pessoa:`))
idCinco = Number(prompt(`Digite a idade da última pessoa:`))
somaId = (idUm + idDois + idTres + idQuatro + idCinco)
mediaId = somaId/5
iMaior = (Math.max(idUm, idDois, idTres, idQuatro, idCinco));

switch (iMaior) {
    case idUm:
        nMaior = noUm;
     break;
    case idDois:
        nMaior = noDois;
     break;
    case idTres:
        nMaior = noTres;
     break;
    case idQuatro:
        nMaior = noQuatro;
     break;
    case idCinco:
        nMaior = noCinco;
     break;
}
console.log(`A média de idade é ${mediaId}\n, sendo ${nMaior}, de ${iMaior} anos, a maior idade do grupo.`) // o '\n' faz pular uma linha.

// 7) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. 
//     Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, 
//     de password ou de ambos).
let username
let password

username = prompt(`Digite o nome de usuário:`)
password = prompt(`Digite a senha:`)

if(username == "admin" && password == "123"){
    alert(`Login efetuado!`)
}else if (username != "admin"){
    alert(`A senha informada não condiz com o Usuário informado ou o Usuário não existe.`)
}else{
    alert(`A senha não condiz com o Usuário informado.`)
}

// 8) Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). 
//     Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, são classificadas 
//     como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!"

let nome
let pop // população
let situacao

nome = prompt(`Digite o nome da espécie:`)
pop = Number(prompt(`Agora, digite a população desta espécie:`))

if(pop <= 0){  // tem que ser 'menor ou igual' e não 'igual ou menor'. Só funciona da 1ª forma.
    alert(`Espécie extinta.`)
    situacao = (`Espécie extinta.`)
}else if (pop > 0 && pop <= 200){
    alert(`Espécie praticamente extinta.`)
    situacao = (`Espécie praticamente extinta.`)
}else if (pop > 200 && pop <= 500){
    alert(`Espécie criticamente em perigo.`)
    situacao = (`Espécie criticamente em perigo.`)
}else if (pop > 500 && pop <= 1000){
    alert(`Espécie em perigo.`)
    situacao = (`Espécie em perigo.`)
}else if (pop > 1000 && pop <= 5000){
    alert(`Espécie vulnerável.`)
    situacao = (`Espécie vulnerável.`)
}else{
    alert(`Espécie não vulnerável`)
    situacao = (`Espécie não vulnerável`)
}
console.log(`A espécie ${nome}, cuja população é ${pop}, é considerada uma ${situacao}`)





// 9) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) 
//     dividida pela área (metros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let nh // número de habitantes
let area // área da região
let densidade // densidade calculada

nh = Number(prompt(`Digite o número de habitantes da região:`))
area = Number(prompt(`Digite a área desta região em km²:`))
densidade = nh / area

if (densidade < 25) {
    alert(`A densidade calculada é de ${densidade} e é classificada como baixa`)
}else if (densidade >= 100) {
    alert(`A densidade calculada é de ${densidade} e é classificada como alta`)
}else{
    alert(`A densidade calculada é de ${densidade} e é classificada como média`)
}


// 10) O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema que receba os dados dos 
//     candidatos (nome, idade, formação e cidade) para sinalizar se eles podem concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para 
//     qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

// Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
// Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos, possuir formação em "Veterinária" e residir em Florianópolis.

let nome
let idade
let formacao
let cidade

nome = prompt(`Digite o nome do candidato:`)
idade = Number(prompt(`Digite a idade do candidato:`))
formacao = prompt(`Digite a formação do candidato:`).toLowerCase()
cidade = prompt(`Digite a cidade em que o candidato reside:`).toLowerCase()

if (cidade != `florianópolis` || cidade != `florianopolis`){
    alert(`Não apto a concorrer.`)
}else if (idade >=25 && idade <= 50 && formacao =="biologia"){
    alert(`O candidato ${nome} é apto a concorrer à vaga para Equipe de Resgate.`)
}else if (idade >=25 && idade <= 50 && formacao == "ecologia"){
    alert(`O candidato ${nome} é apto a concorrer à vaga para Equipe de Resgate.`)
}else if (idade >=22 && idade <= 60 && formacao == "veterinária"){
    alert(`O candidato ${nome} é apto a concorrer à vaga para Equipe de Tratamento.`)
}else{
    alert(`Não apto a concorrer.`)
}
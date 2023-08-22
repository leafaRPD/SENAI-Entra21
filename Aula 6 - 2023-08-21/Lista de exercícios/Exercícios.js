// 1) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, 
//     mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média.
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


// 2) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele 
//     recebe de acordo com o piso (salário mensal igual ou maior que o piso da categoria) ou se recebe abaixo do piso.
let salario2
let piso2

salario2 = Number(prompt(`Digite seu salário.`))
piso2 = Number(prompt(`Agora, digite o piso salarial desta categoria.`))

if(salario2<piso2){
    alert(`Exija um aumento! Você recebe ${salario2}, menos que o piso salarial de ${piso2}.`)
}else{
    alert(`Ok, você recebe ${salario2} e está de acordo com o piso salarial de ${piso2}.`)
}


// 3) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou 
//     tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

let nome3
let idade3
let comorbidade3

nome3 = prompt(`Digite o nome do paciente.`)
idade3 = Number(prompt(`Agora, digite a idade dele.`))
comorbidade3 = prompt(`Informe "S" caso o paciente tenha comorbidades, e se não tiver informe "N".`)

if(idade3 >= 60 || comorbidade3 == "S" || comorbidade3 == "s"){
    alert(`O paciente ${nome3} pode se vacinar!`)
}else{
    alert(`O paciente ${nome3} NÃO pode se vacinar!`)
}



// 4) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"

let numero4

numero4 = Number(prompt(`Digite um número.`))
resto4 = numero4%2

if(resto4 != 0){
    alert(`O número ${numero4} é ímpar.`)
}else{
    alert(`O número ${numero4} é par.`)
}


// 5) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e 
//     uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).



// 6) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.

// 7) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. 
//     Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, 
//     de password ou de ambos).

// 8) Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). 
//     Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, são classificadas 
//     como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!"

// 9) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) 
//     dividida pela área (metros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

// 10) O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema que receba os dados dos 
//     candidatos (nome, idade, formação e cidade) para sinalizar se eles podem concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para 
//     qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

// Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
// Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos, possuir formação em "Veterinária" e residir em Florianópolis.
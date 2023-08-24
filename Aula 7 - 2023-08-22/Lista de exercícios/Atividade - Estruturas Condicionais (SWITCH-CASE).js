                                                                    // Atividade - Estruturas Condicionais (SWITCH / CASE)
// 1) Fazer um programa onde o usuário pode acessar as seguintes opções:

// A) Falar com a atendente    B) Falar com o RH
// C) Falar com o gerente      D) Sair
// Mostrar mensagens para cada opção!

let opcaoMenu

opcaoMenu = prompt(`Digite uma das opções: \n A- Falar com a atendente \n B- Falar com o RH \n C- Falar com o gerente \n D- Sair`).toUpperCase()

switch(opcaoMenu){
    case 'A':

        alert(`Você escolheu a opção ${opcaoMenu}: Falar com a atendente.`)
        break

    case 'B':

        alert(`Você escolheu a opção ${opcaoMenu}: Falar com o RH.`)
        break

    case 'C':

        alert(`Você escolheu a opção ${opcaoMenu}: Falar com o gerente.`)
        break
    
    case 'D':

        alert(`Você escolheu a opção ${opcaoMenu}: Sair.`)
        break

    default:

        alert(`A opção ${opcaoMenu} é inválida.`)

}

// 2) Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:
// Sem Geração (até 1945)
// Baby Boomers (nascidos entre 1946 e 1964)
// Geração X (1965-1980)
// Geração Y ou Millennials (1981-1996)
// Geração Z (1997-2010)
// Geração Alfa (a partir de 2011)

let anoNasc // ano de nascimento da pessoa
anoNasc = Number(prompt(`Digite o ano de seu nascimento. Ex: 1981`))
        switch(true){
        case anoNasc <= 1945:
            alert('Você não faz parte da uma "Geração"')
            break
        case anoNasc > 1945 && anoNasc <= 1964:
            alert('Você faz parte da Geração dos Baby Boomers.')
            break
        case anoNasc > 1964 && anoNasc <= 1980:
            alert('Você faz parte da Geração X.')
            break
        case anoNasc > 1980 && anoNasc <= 1996:
            alert('Você faz parte da Geração Y (ou Millennials).')
            break
        case anoNasc > 1996 && anoNasc <= 2010:
            alert('Você faz parte da Geração Z.')
            break
        case anoNasc > 2010:
            alert('Você faz parte da Geração Alfa.')
            break
}

// nesse exercício, o professor usou apenas 1 alert no final, e definiu a variável 'geracao' para cada 'case'. Se satisfizer a condição (se for 'true'), geracao = "Geração X".
// alert (`A sua geração é ${geracao}.`)

// 3) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela `O mês possui 31 dias`.

let ano
ano = Number(prompt(`Digite o número correspondente ao mês: \n 1 - Janeiro \n 2 - Fevereiro \n 3 - Março \n 4 - Abril \n 5 - Maio \n 6 - Junho \n 7 - Julho \n 8 - Agosto \n 9 - Setembro \n 10 - Outubro \n 11 - Novembro \n 12 - Dezembro`))

switch(ano){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:

        alert(`O mês ${ano} têm 31 dias.`)
        break

    case 2:
        alert(`O mês ${ano} têm 28 dias.`)
        break

    case 4:
    case 6:
    case 9:
    case 11:
   
         alert(`O mês ${ano} têm 30 dias.`)
        break
    default:

        alert(`A opção ${ano} é inválida.`)
}

// 4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

let numeroConta
let menuBanco
let saldo
let saque
let deposito

numeroConta = Number(prompt(`Digite o número da sua conta.`))
if (numeroConta<1000) {
    numeroConta = (Math.random() * 621) // gera um número aleatório para o saldo.
}

saldo = Number((numeroConta * 7).toFixed(2))
menuBanco = Number(prompt(`Escolha uma das opções: \n 1 - Saldo \n 2 - Depósito \n 3 - Saque.`))

switch(menuBanco){
    case 1:
        alert(`Você escolheu a opção ${menuBanco}.\n Seu saldo é de R$${saldo}.`)
        break
    case 2:
        deposito = Number(prompt(`Você escolheu a opção ${menuBanco}.\n Digite o valor a ser depositado:`))
        saldo += Number(deposito.toFixed(2))
        alert(`Seu novo saldo é de R$${saldo}.`)
        break
    case 3:
        saque = Number(prompt(`Você escolheu a opção ${menuBanco}.\n Digite o valor a ser sacado:`))
        if (saque>saldo) {
        alert(`Saldo insuficiente:\n você tem R$${saldo} disponíveis.`)
        }else{
        saldo -= Number(saque.toFixed(2))
        alert(`Você sacou ${saque} e o seu saldo atual é de ${saldo}.`)
        }
        break
    default:
        alert(`A opção ${menuBanco} é inválida.`)
}


// 5) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.
let compra
let tipoAss // tipo de assinatura
let frete

frete = Number(12.50)
compra = Number(prompt(`Digite o valor da sua compra, utilizando ponto '.' e não vírgula ','.\n (ex: 71.23)`)
tipoass = Number(prompt(`Escolha uma das opções: \n 1 - Premium \n 2 - Gold \n 3 - Silver \n 4 - Não assinante.`))

switch(tipoass){
    case 1:
        compra = compra*0.8
        tipoAss = "Você é assinante Premium: ganha 20% de desconto e frete grátis!"
        break
    case 2:
        compra = compra*0.8+frete
        tipoAss = "Você é assinante Gold: ganha 20% de desconto!"
        break
    case 3:
        compra = compra*0.9+frete
        tipoAss = "Você é assinante Silver: ganha 10% de desconto!"
        break
    case 4:
        compra += frete
        tipoAss = "Você ainda não é nosso assinante. Quem sabe na próxima compra você aproveita os benefícios do nosso programa."
        break
    default:
        alert(`Você escolheu uma opção inválida.`)
}
alert(`${tipoAss} O valor total é de ${compra}.`)

// 6) Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca), de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro) e 0 pontos (nunca petequeiro).
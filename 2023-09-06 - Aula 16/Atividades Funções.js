/* Exercícios:
1- Crie uma função anônima para gerar uma mensagem de convite de casamento, que deve receber nomeConvidado, data, horário, local e nomeNoivos. E, a partir disso, monte uma mensagem convidando a pessoa para o casamento. Realize pelo menos 3 chamadas para ela e valide se o retorno foi o esperado. */

/* let desligar = function(parâmetros){
    //corpo da função
}
*/

let mensagemCasorio = function(nomeConvidado, data, horario, local, nomeNoivos){
    return (`Olá ${nomeConvidado}! Nós, ${nomeNoivos}, convidamos você a participar da nossa cerimônia de casamento no dia ${data}, às ${horario}. Local: ${local}.`)
}

let mensagem = mensagemCasorio ('Rafa', '18 de agosto', '13:14', 'Bistek', 'Adevir e Zeocleide')
console.log(mensagem)
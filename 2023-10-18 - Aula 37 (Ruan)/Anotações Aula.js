/* Aula do Ruan; iniciou a aula continuando a fazer exercícios que ficaram pendentes no final da aula anterior (Aula 34) 
Prova: métodos de array, funções e objetos.

Resolução de exercicios:

 ** * * * * * **    ¡TENHO QUE PEGAR ESSE CÓDIGO CORRIGIDO!
1 - Programe um sistema de gerenciamento de tarefas que permita aos usuários adicionar,
concluir e remover tarefas. Cada tarefa deve ser um objeto com pelo menos as
propriedades descrição (string), data de criação (Date) e status (boolean). */
let (continuar) = true
let listaTarefas =[
    {descricao:`escovar os dentes`,
    criacao: `18/10/2023`,
    status: false
    },
    {descricao:`lavar a louça`,
    criacao: `18/10/2023`,
    status: false
    }
]
while(continuar){
    let opcao = Number(prompt(`O que você deseja fazer?\n1) Adicionar tarefa\n2) Concluir\n3) Remover\n 4) Sair`))
    switch(opcao){
        case 1:
        // adicionar tarefa
        let descricao = prompt(`Qual a tarefa a ser adicionada?`)
        let criacao = new Date(prompt(`Qual a data de criação? (AAAA-MM-DD)`))
        let status = false
        let objetoTarefa = {
            descricao: descricao,
            criacao: criacao,
            status: status}
            /* Uma forma mais rápida de fazer seria: 
            let objetoTarefa = {descricao, criacao, status} */       
            listaTarefas.push(objetoTarefa)
            break
        case 2:
        // Concluir
        let nomeTarefaConclusao = prompt(`Qual tarefa você deseja concluir?`)
        let indiceParaConclusao = listaTarefas.findIndex(objetoAtual => objetoAtual.descricao == nomeTarefaConclusao)
        if (indiceParaConclusao) !== -1) {
            listaTarefas[indiceParaConclusao].status = true
        }else{
          alert(`Tarefa não encontrada`)
        }
            break
        case 3:
        // Remover
        let nomeTarefaExclusao = prompt(`Qual tarefa você deseja concluir?`)
        let indiceParaExclusao = listaTarefas.findIndex(objetoAtual => objetoAtual.descricao.toLocaleLowerCase().includes(nomeTarefaExclusao.toLocaleLowerCase()) == nomeTarefaExclusao)
        if (indiceParaExclusao) !== -1 {
            listaTarefas.splice(indiceParaExclusao, 1)
        }else{
          alert(`Tarefa não encontrada`)
        }
            break
        case 4:
            // listar tarefas. 
            // 1- Faz um map, transforma cada obj em string:
            const arrayStrings = listaTarefas.map(objetoAtual => `${onjetoAtual.descricao} - ${objetoAtual.status}`)
            // 2- transformar o array em uma string única:
            const listaString = arrayStrings.join()
            alert(listaString)
            break
        case 5:
            // finalizar
        continuar = false
            break
    }
}


/*
2 - Faça a criação de um catálogo de filmes em JavaScript com alguns objetos possuindo as
propriedades título, diretor, ano de lançamento e gênero.
Em seguida dê opção para o usuário pesquisar pelo título, diretor, ano ou gênero e faça
a filtragem, retornando os títulos em uma única string separada por vírgula.

3 - Crie um sistema que ajude os viajantes a planejar suas viagens. Peça para o usuário
inserir objetos para representar destinos, com propriedades como nome, custo
estimado e atrações.
Os viajantes podem escolher destinos e calcular o custo total da viagem.

4 - Crie um livro de receitas em JavaScript onde cada receita deve ser um objeto com
propriedades como nome, ingredientes e instruções.
Os usuários podem adicionar receitas, pesquisar por ingredientes e exibir receitas com
base em critérios específicos.

5 - Codifique um programa que permita aos usuários registrar suas despesas diárias.
Cada despesa deve ser representada como um objeto com propriedades como
descrição, valor e data. Em seguida, permita que os usuários calculem o total de
despesas para um determinado período de dias.

/*
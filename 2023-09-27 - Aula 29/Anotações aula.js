// Aula 29, quarta feira com o professor Ruan. Fizemos uma revisão, a prova e começamos a aula sobre objetos.

// Aula sobre objetos. Exemplo:

let pessoa = {
    "nome": "Rafael",
    "idade": 32,
    "gostoMusical": ["rock", "blues"],
    "filhos": {
        "nome": "Não existe",
        "idade": 0
    },
    "dizerOi": function(){
        alert("Oi")
    }
}

// simplificando o exemplo e continuando:
let pessoa = {
    "nome": "Rafael",
    "idade": 32
}

// ler um valor:
console.log(pessoa.nome) // traz 'Rafael'
// alterar um valor já existente:
pessoa.idade = 11 //alterará a idade 32 para 11
// criar um atributo:
pessoa.altura = 1.81 // criou um atributo que não existia e atribuiu valor a ela

// voltando ao exemplo mais complexo:

let pessoa = {
    "nome": "Rafael",
    "idade": 32,
    "gostoMusical": ["rock", "blues"],
    "profissao": "programador",
    "filhos": {
        "nome": "Adenonvir",
        "idade": 0
    },
    "dizerOi": function(){
        alert("Oi")
    },
    "saudacao": function(){
        console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.profissao}.`);
    }
}
pessoa.saudacao()



// ler nome do filho:
console.log(pessoa.filhos.nome)
// chamar a função interna:
pessoa.dizerOi()


// 
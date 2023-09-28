/* Lista de exercício dia 27/09.

Ex 1:
Crie um objeto chamado pessoa com as seguintes propriedades:
Nome, idade, email e apresentarPessoa (método que exiba um alerta trazendo as infos da pessoa.) Execute console.log para exibir o nome, a idade e email, além de executar o método apresentarPessoa para esse objeto. */

let pessoa1 = {
    "nome": "Jair",
    "idade": "136",
    "email": "napreda@papiro.god",
    "apresentarPessoa": function(){
        console.log(`Olá, meu nome é ${this.nome}, tenho apenas ${this.idade} anos e o meu email é o primeiro: ${this.email}.`);
    }
}

console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1.email)
pessoa1.apresentarPessoa()

/* 
Ex 2:
Crie um objeto chamado programador com nome, idade e linguagens. A propriedade 'linguagens' deve receber um Array de strings contendo as linguagens que você já estudou.
*/
let programador = {
    "nome": "Jair",
    "linguagens": ["javascript", "html", "python"]

}
//console.log(programador.linguagens)

/*
Ex 3:
Com base no objeto programador, crie um laço de repetição para exibir vários alertas mostrando individualmente cada linguagem de programação que está no Array de linguagens no seguinte formato:
Linguagem 1: JavaScript
Linguagem 2: HTML
*/

for (i=0; i<programador.linguagens.length; i++) {
    alert(`Linguagem ${i+1}: ${programador.linguagens[i]}`)
}


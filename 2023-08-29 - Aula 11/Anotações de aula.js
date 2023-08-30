// while e do while - > quando não se sabe quantas vezes se repetirá
// for -> quando se sabe quantas vezes o loop se repetirá

// Sintaxe do for:
// for (valor inicial; condição; iteração) {
//   código a ser repetido enquanto a condições for verdadeira
// > é aqui, no final do código que será executado o 'i++'/'i--'
// }

// for (i=0; i<42; i++)
// neste caso, o loop será repetido 42 vezes.

// for (i=33; i>0; i--)
// neste caso, o loop será repetido 33 vezes.

// o 42 ou 33 pode ser uma variável 'quantidade' que o usuário definirá através de um prompt. Ou seja, a quantidade de vezes que o loop será repetido pode ser variável.

for(i=0; i<10; i++){
    console.log(`Buu!`)
}

// exemplo em que a pessoa insere o número de repetições:
let nuBu = prompt(`Insira o número de "Bu" desejado:`)
let bu = "b"
for(i=0; i<nuBu; i++){
    bu = bu+"u"
    console.log(`${bu}!`)
}

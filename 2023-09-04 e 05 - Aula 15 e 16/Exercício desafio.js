// Dupla: Rafael Pazetto Damasio e Gian
// Jogo da bomba:
let matrizDoJogador = [[],[],[]]
let matriz = [[],[],[]]
let numRandom
let bombas=0 // 1
let pontos=0 // 0
let pontuacaoJogador = 0

for (i=0; i<3; i++){
    for (j=0; j<3; j++){
        matrizDoJogador[i][j] = "?"
        numRandom = Math.floor(Math.random()* (2 - 0) + 0)
        if(numRandom == 0){
            pontos++ // 0
        }else{
            bombas++ // 1
        }
        matriz[i][j] = (numRandom) // ou seja, ele vai entrar com i=0 e j=0, em seguida fará o loop do j mais 2 vezes (totalizando 3) antes de aumentar o i pela primeira vez. E repete 1 vez. E repete a última vez.
    }
}

for(i=0; i<pontos; i++){
    console.clear()
    console.log(`Número de bombas: ${bombas}`) // 1
    console.log(`Número de pontos: ${pontos}`) // 0
    console.table(matriz)
    console.table(matrizDoJogador)
    posicaoI = Number(prompt(`Qual a posição I do campo você quer arriscar?`))
    posicaoJ = Number(prompt(`Qual a posição J do campo você quer arriscar?`))
    if(matriz[posicaoI][posicaoJ] == 1){
        console.log(`Bomba! Fim de jogo.`)
        break
    }else{
        matrizDoJogador[posicaoI][posicaoJ] = 0
        console.table(matrizDoJogador)
        pontuacaoJogador ++
        console.log(`A pontuação do jogador é ${pontuacaoJogador}.`)
    }
}
if(i == pontos){
    console.log(`Você venceu!`)
}
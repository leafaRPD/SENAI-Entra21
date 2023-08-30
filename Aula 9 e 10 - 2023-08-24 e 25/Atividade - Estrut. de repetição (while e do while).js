// 1) Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
let popA // População do País A
let popB // População do País B
let txA // taxa crescimento País A ao ano
let txB // taxa crescimento País B a.a.
let i = 1 // i é o 'contador'

popA = 80000
txA = 0.03
popB = 200000
txB = 0.015
// popA < popB
// txA > txB

while(popA < popB) {
	popA = popA * (1+txA)
	popB = popB * (1+txB)
	if (popA<popB) {
	i++ //soma 1
	}else if (popA = popB){
		popA = popA.toFixed(0)
		popB = popB.toFixed(0)
	console.log(`A população do País A igualou a do País B após ${i} anos.\n São ${popB} habitantes em cada País.`)    
	}else{
		popA = popA.toFixed(0)
		popB = popB.toFixed(0)
	console.log(`A população do País A superou a do País B após ${i} anos.\n São espectivamente ${popA} e ${popB} habitantes.`)
	}
}


// 2) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça ao usuário para digitar um número e informe se ele é primo. Depois implemente um laço de repetição para solicitar cinco números inteiros e mostre na tela se são primos ou não.

let numUm //, numDois, numTres, numQuatro, numCinco
let i = 3
// alert(`Insira números para verificar se são primos.`)
numUm = Number(prompt(`Insira o primeiro número a ser verificado:`))
if (numUm == 2){
	alert(`${numUm} é primo.`)
}else if(numUm%2 == 0){
	alert(`${numUm} não é primo.`)
}else{
while(numUm>i) {
	if(numUm%i == 0){
	alert(`Não é Primo.`)
	break
	}else{
	i = i+2 //soma 2 para só pegar os números ímpares
	}}
if(i == numUm){
console.log(`${numUm} é primo.`)
}else{
console.log(`${numUm} não é primo.`)
}}

// 3) Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro digitado pelo usuário.
let numeroFinal = prompt(`Digite um número para verificação.`)
let numeroAtual = 2
while (numeroAtual <= numeroFinal){
		let ehPrimo = true;
		let divisor = 2;
	do {
	//verificação
		if(numeroAtual % divisor === 0){
			ehPrimo = false;
			break;
		}
		divisor++
	} while (divisor <= numeroAtual / 2)
		if(ehPrimo){
			alert(`Esses números são os primos: ${numeroAtual}`)
		}
   numeroAtual++
   console.log(`${numeroAtual}`)
}


// minha tentativa de resolução. Copiei o código do Exercício 2 e tentei modificá-lo.
let num // ex: 28
let i = 3
let lista
numUm = Number(prompt(`Insira o primeiro número a ser verificado:`))

while (num%i != 0) {
}

// 4) Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. Porém, você tem apenas R$200 para gastar. Faça um programa que pergunte o nome do vinil e o valor, repetidamente. Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). Mostrar na tela:

// a) O total gasto em reais dos vinis.
// b) O valor que sobrou em dinheiro.
// c) Quantos vinis foram comprados.
// d) A média de preço dos vinis.
// e) O vinil mais caro e o mais barato.

//variáveis do vinil
let dinheiroDisponivel = 200;
let totalGasto = 0;
let quantidadeVinis = 0;
let vinilMaisCaro = 0;
let vinilMaisBarato = 0;
// Fazer um programa que peça o nome e o valor do vinil 5x.
do {
  let nomeVinil = prompt("Digite o nome do vinil:");
  let precoVinil = parseFloat(prompt("Digite o preço do vinil:"));
// verificação: se o valor do vinil é menor que 200 (dinheiro que tenho).
	if (precoVinil > dinheiroDisponivel) {
		alert("Valor do vinil é maior que o dinheiro disponível. Compra encerrada.");
	 break;
	}
// Fazer com que o programa também crie a informação de quanto dinheiro eu gastei, além da quantidade de discos comprados.
  totalGasto += precoVinil;
  quantidadeVinis++;
// Verificação: qual vinil é o mais caro e qual o mais barato.
	if (precoVinil > vinilMaisCaro) {
	vinilMaisCaro = precoVinil;
	}
	if (precoVinil < vinilMaisBarato) {
	vinilMaisBarato = precoVinil;
	}
// Criar uma condição de parada do loop: se meu dinheiro acabar o programa se encerra. Para isso há a variável que reduz o custo do disco a partir dos 200 iniciais.
  dinheiroDisponivel -= precoVinil;
} while (dinheiroDisponivel > 0);   //condição para parar o programa
	let mediaPrecoVinil = totalGasto / quantidadeVinis;  //media do preço dos discos comprados
	let dinheiroSobrou = 200 - totalGasto; // dinheiro que sobrou.

//informações na tela
alert(`Total gasto: R$${totalGasto.toFixed(2)}
Dinheiro que sobrou: R$${dinheiroSobrou.toFixed(2)}
Quantidade de vinis comprados: ${quantidadeVinis}
Média de preço dos vinis: R$${mediaPrecoVinil.toFixed(2)}
Vinil mais caro: R$${vinilMaisCaro.toFixed(2)}
Vinil mais barato: R$${vinilMaisBarato.toFixed(2)}`);

// 5) Santa Catarina é conhecida por suas quatro estações bem definidas, o que o torna um estado com alta amplitude térmica (diferença entre a maior e a menor temperatura, registrada em um período). O INMET, Instituto Nacional de Meteorologia, pretende ter os dados de amplitude térmica de uma cidade ou estado. Desenvolva um programa que calcule e mostre os dados diários (segunda à sexta) e a média de amplitude térmica semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade ou estado, perguntar para os cinco dias da semana a maior temperatura do dia e a menor. Mostrar as amplitudes de cada dia e a média.

// variáveis: 
let estado
let diaSemana = 0;
let ampTerm = 0; // amplitude térmica
let mediaAmpTerm = 0

do {
	let maiorTemp = Number(prompt(`Qual a maior temperatura do dia?`))
	let menorTemp = Number(prompt(`Qual a menor temperatura do dia?`))
	ampTerm = maiorTemp - menorTemp;
	alert(`A amplitude térmica de hoje é ${ampTerm}.`)
	mediaAmpTerm += ampTerm

	diaSemana++
}while (diaSemana<5)

mediaAmpTerm = mediaAmpTerm/5
console.log(`A média semanal da amplitude térmica é de ${mediaAmpTerm}`)


// 6) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. Após calculado o número de sprints (média), arredondando o número para baixo, cadastrar para cada sprint um título e um objetivo.
// um programa que precise passar o tempo total do projeto em dias 
// pedir também o número de sprints 
// calcular media de sprints , usar math round
// ainda pedir um titulo e um objetivo após o calculo da media e exibir tudo 
// Solicitação das informações da sprint:
let tempoTotalProjeto = Number(prompt ("Digite o número total do projeto em dias: "));
let periodoSprint = Number(prompt("Digite o período de tempo de cada sprint: "))

let mediaSprint = Math.floor( tempoTotalProjeto / periodoSprint); //calculamos a media, usei o Math.floor que ele arredonda números para baixo.


alert(`Teremos ${mediaSprint} sprint(s)`)

//crio um contador pois temos que incrementar para cada sprint
let contador = 0;

//condição de parada. Iremos pedir o titulo e o objetivo apenas para as sprints existentes
while (contador < mediaSprint) {

let tituloProjeto = prompt("Cadastre o titulo do projeto:")
let objetivoProjeto = prompt("Cadastre o objetivo do projeto:")

contador ++ //incrementamos o contador

//passamos as informações na tela
alert(`O tempo total do projeto foi estimado em ${tempoTotalProjeto} dias
Cada sprint terá ${periodoSprint} dias
Teremos na sprint ${contador}:
	O título = ${tituloProjeto}
	O objetivo = ${objetivoProjeto} `)

}
// 7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um D20. A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores da segunda e terceira jogadas. Ao final mostrar a soma de cada jogador e suas posições. (DESAFIO: validar os valores de 1 a 20, ou seja, caso um valor digitado não esteja entre dentro dos valores do dado, repetir a pergunta)

// utilizou a ideia de " jogador+i "

let numeroJogadores
let i = 0
numeroJogadores = Number(prompt("Digite o número de jogadores:"))

while(i<numeroJogadores) {
	let jogadorNome = "Jogador "+(1+i); // Aqui foi o pulo do gato: inserir o i dentro de uma variável declarada dentro do while. É um while dentro do outro.
	let somaPontuação = 0;
	let quantidadeDeJogadas = 0;
	
	while (quantidadeDeJogadas < 4){ // porque são 4 jogadas
		let dado = Number(prompt(`Insira o valor obtido no dado para o ${jogadorNome}.`));
	
		while(dado > 20 || dado < 0 ) {
			dado = Number(prompt(`Valor inválido. Insira novamente o valor obtido no dado para o ${jogadorNome}.`))
		}
		quantidadeDeJogadas++
		if (quantidadeDeJogadas === 2 || quantidadeDeJogadas === 3) {
			somaPontuação += dado;
		}
	}
	console.log(`${jogadorNome} - Pontuação: ${somaPontuação}.`);
	i++
}

// 8) Na maioria das linguagens de programação, é possível contar caracteres de uma string (palavra, frase, etc). Criar um sistema no qual o usuário digite 5 palavras e ao final mostre o tamanho em número de caracteres, de cada uma delas. (Pesquisar sobre o comando length, para solução).

// também utilizou a ideia de " palavra + i "
let lista = ''// lista de palavras com número de caracteres
let i = 1
let palavra
let novaPalavra
alert(`Digite 5 palavras:`)
while (i<6){
	palavra = "palavra "+i
	novaPalavra = prompt(`Digite a ${palavra}:`)
	i++
	lista = `${lista}'${novaPalavra}' tem ${novaPalavra.length} caracteres. `
}

// 9) Um determinado restaurante trabalha com limite de lotação de 50 pessoas. Porém, mesmo com esse limite, o restaurante pode encerrar seu atendimento antes do horário por falta de insumos para produção das refeições. Criar um programa que receba os dados da quantidade de pessoas que chegam ao restaurante (repetidamente) e se os insumos estão "ok" ou "insuficientes". Caso alguma das duas possibilidades aconteça, encerrar o programa e mostrar ao final o motivo do encerramento (atingiu limite de pessoa ou faltaram insumos).


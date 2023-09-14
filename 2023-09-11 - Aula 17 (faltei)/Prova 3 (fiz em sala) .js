/*(1,0) Criar uma mensagem de boas-vindas explicando o sistema.
(1,0) Criar menu funcional (com loop) com as opções do CRUD e a opção "sair".
(1,0) Implementar a opção "cadastrar produto".
(1,0) Implementar a opção "deletar produto".
(1,0) Implementar a opção "editar produto".
(1,0) Implementar a opção "listar produtos".
(1,0) Mostrar a lista organizada com as marcas, nomes e valores de todos produtos
(1,0) Criar mensagens de feedback para o usuário após as ações.
(1,0) Validar para não permitir cadastro de um produto com mesmo nome.
(1,0) Validar para não permitir valores negativos ou zero.

marca, nome e valor

listaMarcas -> coluna 0; terá valores repetidos caso uma marca tenha mais de 1 produto
listaProduto -> coluna 1; terá o nome do produto. Só pode se repetir se mais de uma marcar produzir o mesmo produto.
listaPreço   -> coluna 2: porerá ter qualquer valor numérico, com 2 casas decimais.

Nos itens 3 a 6, onde pede para implementar opções, provavelmente terei que criar 1 função para da opção.
No item 10, tem que colocar um loop caso o usuário digite um valor não permitido com uma opção de 'abortar missão' após o primeiro erro.
*/

// organização da lista de produtos : ['MARCA', 'NOME DO PRODUTO', 'VALOR']
listaProdutos = [[`KICHUTE`, `SAPATO`, 16.99],[`PLASTIQUARE`, `POTE`, 1.50],[`JAYUNG`, `PESO DE PORTA`, 66.66]]

//console.table(listaProdutos)

//alert(`Bem vindo ao CRUD v1.0 do programa Entra21. Você pode realizar diversas funções no banco de dados, que contém as informações marca, nome do produto e valor.`)
let A = `cadastrar produto`
let B = `deletar produto`
let C = `editar produto`
let D = `listar produtos`
let opcaoMenu, marca, nomeDoProduto, valor
let listaDeProdutosNoAlert = [`A lista de produtos está organizada por marca, nome do produto e valor.\nA lista de produtos é:\n`]

// lista de funções:
// função de cadastrar um novo produto (cp):
function cp(marca, nomeDoProduto, valor) {
	let novoProduto = [`${marca}`, `${nomeDoProduto}`, valor]
	listaProdutos.push(novoProduto)
	// tem que arrumar isso; dar um jeito de fazer um push na lista do alert. listaDeProdutosNoAlert.push(novoProduto) 
}
// função para mostrar a lista de produtos (ml):
function ml(){
	listaDeProdutosNoAlert = [`A lista de produtos está organizada por marca, nome do produto e valor.\nA lista de produtos é:\n`]
	for(i=0; i<listaProdutos.length; i++) {
		listaDeProdutosNoAlert += `${listaProdutos[i]} \n`
	}
	console.table(listaProdutos)
	alert(listaDeProdutosNoAlert)
}
	


do{
	opcaoMenu = prompt(`Digite uma das opções: \n A- ${A} \n B- ${B} \n C- ${C} \n D- ${D} \n 0- sair`).toUpperCase()

	switch(opcaoMenu){
		case '0':
			alert(`Você escolheu a opção ${opcaoMenu}: Sair.`)
			break

		case 'A':
			alert(`Você escolheu a opção ${opcaoMenu}: ${A}.`)
			//abrir função para cadastrar o produto. Penso que pode ser uma função que pergunta as 3 características e faz um push.
			marca = prompt(`Digite a marca do produto:`).toUpperCase()
			nomeDoProduto = prompt(`Digite o nome do produto:`).toUpperCase()
			valor = Number(prompt(`Digite o valor do produto, utilizando \nponto '.' e 2 casas decimais (ex: 16.39):`)).toFixed(2)
			valor = Number(valor)
			cp(marca, nomeDoProduto, valor) // função Cadastrar Produto.
			alert(`Você cadastrou um novo produto da marca ${marca}, \nde nome ${nomeDoProduto}, \nvalor ${valor}`)
			console.table(listaProdutos)
			opcaoMenu = 'Z'
			break
		
		case 'B':
			alert(`Você escolheu a opção ${opcaoMenu}: ${B}.`)
			// abrir função para deletar. Abrir a lista de produtos e perguntar qual a linha e qual a coluna do produto a ser deletado.
			ml()
			// inserir os prompts para selecionar qual produto será deletado.
			opcaoMenu = 'Z'
			break

		case 'C':
			alert(`Você escolheu a opção ${opcaoMenu}: ${C}.`)
			// similar à anterior, abrir a lista, perguntar qual a linha e coluna e depois os novos valores a serem inseridos.
			opcaoMenu = 'Z'
			break

		case 'D':
			alert(`Você escolheu a opção ${opcaoMenu}: ${D}.`)
			// abre a função de listar produtos, que será usada novamente nos casos B e C. A questão é como organizar essa lista.
			ml() // função Mostrar Lista.
			opcaoMenu = 'Z'
			break

		default:
			opcaoMenu = 'Z'
			alert(`A opção escolhida é inválida.`)

	}
} while (opcaoMenu == 'Z')

console.log(opcaoMenu)

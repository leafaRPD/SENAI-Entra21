/* Faltei esta aula pois estávamos no aeroporto em SP. O professor realizou a avaliação 2 (0,2 da nota final) e lançou a avaliação 3 (0,6 da nota final).
*/

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
	let listaProdutos = [[`KICHUTE`, `SAPATO`, 16.99],[`PLASTIQUARE`, `POTE`, 1.50],[`JAYUNG`, `PESO DE PORTA`, 66.66], [`M`,`P`, 3], [`M`,`PP`, 23]]

//console.table(listaProdutos)

//alert(`Bem vindo ao CRUD v1.0 do programa Entra21. Você pode realizar diversas funções no banco de dados, que contém as informações marca, nome do produto e valor.`)
let A = `cadastrar produto`
let B = `deletar produto`
let C = `editar produto`
let D = `listar produtos`
let opcaoMenu, marca, nomeDoProduto, valor
let listaDeProdutosNoAlert // para a função mostrar lista de produtos
let listaFiltrada // para as funções deletar produto

// lista de funções:
// função de cadastrar um novo produto (cp):
function cp(marca, nomeDoProduto, valor) {
	let novoProduto = [`${marca}`, `${nomeDoProduto}`, valor]
	listaProdutos.push(novoProduto)
}

// funções para deletar produtos: (filtrarProduto e outra anônima, dentro do menu)
function filtrarProduto() {
    listaFiltrada = listaProdutos.filter(produtoSelecionado => {
      return produtoSelecionado[0] === marca && produtoSelecionado[1] === nomeDoProduto && produtoSelecionado[2] === valor;
    })
  }
  
// função editar produtos (edt): será uma composição das funções de cadastrar e deletar produto.

// função para mostrar a lista de produtos (ml):
function ml() {
	listaDeProdutosNoAlert = [`A lista de produtos está organizada por marca, nome do produto e valor.\nA lista de produtos é:\n`]
	for(i=0; i<listaProdutos.length; i++) {
		listaDeProdutosNoAlert += `${listaProdutos[i]} \n`
	}
	console.table(listaProdutos)
	alert(listaDeProdutosNoAlert)
}

							// início do corpo do código:

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
			alert(`Você cadastrou um novo produto da \nmarca ${marca}, \nde nome ${nomeDoProduto}, \nvalor ${valor}`)
			console.table(listaProdutos)
			opcaoMenu = 'Z'
			break
		
		case 'B':
			alert(`Você escolheu a opção ${opcaoMenu}: ${B}.`)
			ml()
			marca = prompt(`Digite a marca do produto:`).toUpperCase()
			nomeDoProduto = prompt(`Digite o nome do produto:`).toUpperCase()
			valor = Number(prompt(`Digite o valor do produto, utilizando \nponto '.' e 2 casas decimais (ex: 16.39):`)).toFixed(2)
			valor = Number(valor)
			filtrarProduto()
  			// Outra função para remover da listaProdutos apenas o item selecionado pela listaFiltrada:
  			listaProdutos = listaProdutos.filter(produtoSelecionado => !listaFiltrada.includes(produtoSelecionado))
  			alert(`Você deletou o  produto da \nmarca ${marca}, \nde nome ${nomeDoProduto}, \nvalor ${valor}`)
			console.table(listaProdutos)
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
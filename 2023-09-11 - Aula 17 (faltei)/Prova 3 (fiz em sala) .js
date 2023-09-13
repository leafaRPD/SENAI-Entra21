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

// listaProdutos = ['MARCA', 'NOME DO PRODUTO', 'VALOR']
listaProdutos = [[`KICHUTE`, `SAPATO`, 16.99],[`PLASTIQUARE`, `POTE`, 1.50],[`JAYUNG`, `PESO DE PORTA`, 66.66]]
//console.table(listaProdutos)

//alert(`Bem vindo ao CRUD v1.0 do programa Entra21. Você pode realizar diversas funções no banco de dados, que contém as informações marca, nome do produto e valor.`)
let A = `cadastrar produto`
let B = `deletar produto`
let C = `editar produto`
let D = `listar produtos`
let opcaoMenu



do{
	opcaoMenu = prompt(`Digite uma das opções: \n A- ${A} \n B- ${B} \n C- ${C} \n D- ${D} \n 0- sair`).toUpperCase()

	switch(opcaoMenu){
		case '0':

			alert(`Você escolheu a opção ${opcaoMenu}: Sair.`)
			break

		case 'A':
			alert(`Você escolheu a opção ${opcaoMenu}: ${A}.`)
			//abrir função para cadastrar o produto. Penso que pode ser uma função que pergunta as 3 características e faz um push.
			let marca = prompt(`Digite a marca do produto:`).toUpperCase()
			let nomeDoProduto = prompt(`Digite o nome do novo produto:`).toUpperCase()
			let valor = Number(prompt(`Digite o valor do produto, utilizando ponto '.' e 2 casas decimais (ex: 16.39):`)).toFixed(2)
			valor = Number(valor)
			function cd(marca, nomeDoProduto, valor) {
    			let novoProduto = [`${marca}`, `${nomeDoProduto}`, valor]
				listaProdutos.push(novoProduto)
			}
			cd(marca, nomeDoProduto, valor)
			console.table(listaProdutos)
			break
		
		case 'B':
			alert(`Você escolheu a opção ${opcaoMenu}: ${B}.`)
			// abrir função para deletar. Abrir a lista de produtos e perguntar qual a linha e qual a coluna do produto a ser deletado.
			break

		case 'C':
			alert(`Você escolheu a opção ${opcaoMenu}: ${C}.`)
			// similar à anterior, abrir a lista, perguntar qual a linha e coluna e depois os novos valores a serem inseridos.
			break

		case 'D':
			alert(`Você escolheu a opção ${opcaoMenu}: ${D}.`)
			// abre a função de listar produtos, que será usada novamente nos casos B e C. A questão é como organizar essa lista.
			break

		default:
			opcaoMenu = 'Z'
			alert(`A opção escolhida é inválida.`)

	}
} while (opcaoMenu == 'Z')

console.log(opcaoMenu)

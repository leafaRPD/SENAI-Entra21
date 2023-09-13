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

let opcaoMenu
do{
	opcaoMenu = prompt(`Digite uma das opções: \n A- cadastrar produto \n B- deletar produto \n C- editar produto \n D- listar produtos \n 0- sair`).toUpperCase()

	switch(opcaoMenu){
		case '0':

			alert(`Você escolheu a opção ${opcaoMenu}: Sair.`)
			break

		case 'A':

			alert(`Você escolheu a opção ${opcaoMenu}: cadastrar produto.`)
			break
		
		case 'B':

			alert(`Você escolheu a opção ${opcaoMenu}: Falar com o RH.`)
			break

		case 'C':

			alert(`Você escolheu a opção ${opcaoMenu}: Falar com o gerente.`)
			break

		case 'D':

			alert(`Você escolheu a opção ${opcaoMenu}: Sair.`)
			break

		default:
			opcaoMenu = 'Z'
			alert(`A opção escolhida é inválida.`)

	}
} while (opcaoMenu == 'Z')


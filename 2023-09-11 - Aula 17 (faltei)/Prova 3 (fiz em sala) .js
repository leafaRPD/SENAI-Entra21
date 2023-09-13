/*
(1,0) Criar uma mensagem de boas-vindas explicando o sistema.
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
*/

/*
listaMarcas -> coluna 0; terá valores repetidos caso uma marca tenha mais de 1 produto
listaProduto -> coluna 1; terá o nome do produto. Só pode se repetir se mais de uma marcar produzir o mesmo produto.
listaPreço   -> coluna 2: porerá ter qualquer valor numérico, com 2 casas decimais.
*/ 


/* para criar o menu, usar switch case, conforme exemplo:
let opcaoMenu

opcaoMenu = prompt(`Digite uma das opções: \n A- Falar com a atendente \n B- Falar com o RH \n C- Falar com o gerente \n D- Sair`).toUpperCase()

switch(opcaoMenu){
	case 'A':

		alert(`Você escolheu a opção ${opcaoMenu}: Falar com a atendente.`)
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

		alert(`A opção ${opcaoMenu} é inválida.`)

}*/
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
*/

				// organização da lista de produtos : ['MARCA', 'NOME DO PRODUTO', 'VALOR']
				
let listaProdutos = [[`KICHUTE`, `SAPATO`, 16.99],[`PLASTIQUARE`, `POTE`, 1.50],[`JAYUNG`, `PESO DE PORTA`, 66.66], [`M`,`P`, 3], [`M`,`PP`, 23]]

//console.table(listaProdutos)

alert(`Bem vindo ao CRUD v1.0 do programa Entra21. Você pode realizar diversas funções no banco de dados, que contém as informações marca, nome do produto e valor.`)
let A = `cadastrar produto`
let B = `deletar produto`
let C = `editar produto`
let D = `listar produtos`
let opcaoMenu, marca, nomeDoProduto, valor
let listaDeProdutosNoAlert // para a função mostrar lista de produtos
let listaFiltrada // para as funções deletar e editar produto

				// lista de funções:

// funções de cadastrar um novo produto (cp) e de verificar se o produto já existe:
function cp(marca, nomeDoProduto, valor) {
	if (!produtoExiste(nomeDoProduto)) { // Verifica se o produto já existe ou não na lista.
        let novoProduto = [`${marca}`, `${nomeDoProduto}`, valor]
        listaProdutos.push(novoProduto)
		alert(`Você cadastrou o produto da \nmarca ${marca}, \nde nome ${nomeDoProduto}, \nvalor ${valor}`)
    } else {
        alert(`Produto já está cadastrado. A lista não foi modificada.`)
    }
}

function produtoExiste(nomeDoProduto) {
    return listaProdutos.some(produto => produto[1].toUpperCase() === nomeDoProduto.toUpperCase());
}

// funções para deletar produtos: (filtrarProduto e outra anônima, dentro do menu)
function filtrarProduto() {
    listaFiltrada = listaProdutos.filter(produtoSelecionado => {
      return produtoSelecionado[0] === marca && produtoSelecionado[1] === nomeDoProduto && produtoSelecionado[2] === valor
    })
}

// função editar produtos: será uma composição das funções de cadastrar e deletar produto.

// função para mostrar a lista de produtos (ml):
function ml() {
	listaDeProdutosNoAlert = [`A lista de produtos está organizada por marca, nome do produto e valor.\nA lista de produtos é:\n`]
	for(i=0; i<listaProdutos.length; i++) {
		listaDeProdutosNoAlert += `${listaProdutos[i]} \n`
	}
	console.table(listaProdutos)
	alert(listaDeProdutosNoAlert)
}
// função para validação; para não permitir valores negativos ou zero.
function pedirValor() {
    do {
        valor = Number(prompt(`Digite o valor do produto maior que zero, utilizando \nponto '.' e 2 casas decimais (ex: 16.39):`)).toFixed(2)
        valor = Number(valor)
        if (valor <= 0) {
            alert("Valor inválido. Por favor tente novamente, utilizando um valor maior que zero.")
        }
    } while (valor <= 0)
    return valor
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
			valor = pedirValor() // função com loop para impedir que venham valores inválidos
			cp(marca, nomeDoProduto, valor) // função Cadastrar Produto.
			console.table(listaProdutos)
			opcaoMenu = 'Z'
			break
		
		case 'B':
			alert(`Você escolheu a opção ${opcaoMenu}: ${B}.`)
			ml()
			marca = prompt(`Digite a marca do produto:`).toUpperCase()
			nomeDoProduto = prompt(`Digite o nome do produto:`).toUpperCase()
			valor = pedirValor() // função com loop para impedir que venham valores inválidos
			filtrarProduto()
  			// Outra função para remover da listaProdutos apenas o item selecionado pela listaFiltrada:
  			listaProdutos = listaProdutos.filter(produtoSelecionado => !listaFiltrada.includes(produtoSelecionado))
  			alert(`Você deletou o produto da \nmarca ${marca}, \nde nome ${nomeDoProduto}, \nvalor ${valor}`)
			console.table(listaProdutos)
			opcaoMenu = 'Z'
			break

		case 'C':
			alert(`Você escolheu a opção ${opcaoMenu}: ${C}.`)
			marca = prompt(`Digite a marca do produto a ser editado:`).toUpperCase()
			nomeDoProduto = prompt(`Digite o nome do produto:`).toUpperCase()
			valor = pedirValor() // função com loop para impedir que venham valores inválidos
			filtrarProduto()
			listaProdutos = listaProdutos.filter(produtoSelecionado => !listaFiltrada.includes(produtoSelecionado))
			alert(`Você selecinou o produto da \nmarca ${marca}, \nde nome ${nomeDoProduto}, \nvalor ${valor}. \nDigite a seguir com quais dados você quer editá-lo.`)
			marca = prompt(`Digite o nome da nova marca do produto. Se for igual, apenas repita-a.`).toUpperCase()
			nomeDoProduto = prompt(`Digite o novo nome do produto:`).toUpperCase()
			valor = pedirValor() // função com loop para impedir que venham valores inválidos
			cp(marca, nomeDoProduto, valor) // função Cadastrar Produto.
			console.table(listaProdutos)
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




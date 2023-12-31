// Atividade - Vetores (Lista II)

// 1) Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor com 6 números digitados pelo usuário e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e com palavras).
let palavra
let comprimento

palavra = prompt(`Digite uma palavra:`)
comprimento = palavra.length // usar isso para saber o valor de 'i', para realizar o loop de verificação.


// 2) Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.

// 3) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

// a) A quantidade de produtos com preço inferior a R$50;
// b) O nome dos produtos com preço de R$50 a R$100;
// c) A média dos preços dos produtos com preço superior a R$100.

// 4) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

// ======== MENU ========
// 1- Cadastrar nome
// 2- Excluir um nome
// 3- Editar um nome
// 4- Pesquisar se um nome está cadastrado
// 5- Listar todos os nomes cadastrados
// 0- Sair do programa

// 5) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). Criar um programa que simule esse sistema.

// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// ======== MENSAGENS e VALIDAÇÕES ========
// Opção 1-> “Sabor adicionado!”   OU   “Limite de sabores atingido, remova um sabor!”
// Opção 2-> “Sabor removido!”   OU   “Não existem sabores adicionados!”
// Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.”   OU   “Seu sorvete não possui sabores!”
// Opção 4-> “Pedido realizado!”   OU   “Adicione pelo menos um sabor!”

// 6) Você está fazendo um mochilão pela Europa e precisa saber qual a distância que vai percorrer em determinada viagem ou trecho da viagem, utilizando trem. De Bruxelas até Berlim são 764km e de Berlim até Praga são 350km. De Praga até Viena são mais 292km. De Viena até Budapeste, são outros 242km. Faça um sistema no qual o usuário digite a cidade de origem, em seguida a cidade de destino. Mostrar na tela a distância total (km) da viagem.

// Bruxelas <-> Berlim = 764km
// Berlim <-> Praga = 350km
// Praga <-> Viena = 292km
// Viena <-> Budapeste = 242km
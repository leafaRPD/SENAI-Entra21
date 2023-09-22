/* Prof Rafael Ventura; marcada prova semana que vem. Case fechado; modelagem conceitual, lógica e física.
baixar banco de dados disponibilizado, abrir no Bloco de Notas, copiar e colar na aba "Editor de Grupo" do site abaixo. Após isso, rolar pra baixo e clicar no 
link azul "Use Grupo no Editor".
link site para executar consulta SQL online: https://dbis-uibk.github.io/relax/calc/local/uibk/local/0

Exemplo:
π nome, email (σ cidade = 'Rio de Janeiro' (CLIENTE)) 
-- comentário: primeiro a Sigma seleciona apenas os cliente do RJ, então a Pi seleciona, dentre estes clientes, apenas seus nome e email.

Lista da aula de hoje:
1- Quais são os nomes dos livros que possuem preço maior que R$50?
π nome_livro (σ preco > 50 (LIVRO))

2- Quais são os livros com estoque menor que 20 unidades?
π cod_livro (σ qtd_estoque < 20 (ESTOQUE))
// retornará apenas o código do livro. Mais adiante no curso aprendemos formas de retornar o nome do livro a partir do cod_livro, conforme código abaixo:
σ qtd_estoque < 20 (π nome_livro, nome, qtd_estoque (LIVRO ⨝ ESTOQUE ⨝ EDITORA))
// olhando os parênteses: primeiro juntará as colunas nome_livro, nome e qtd_estoque das tabelas LIVRO, ESTOQUE e EDITORA. Como cada coluna dessa não tem conflito, não precisamos usar a notação EDITORA.nome, por exemplo, pois nesse caso 'nome' só tem em EDITORA. Após essa junção, é feita a filtragem em que mostram apenas as linhas cujo valor para qtd_estoque seja menor que 20.

3- Quais são os livros com preço entre R$30 e R$50?
π nome_livro, preco (σ preco < 50 (LIVRO) ∩ σ preco > 30 (LIVRO))

4- Existem livros sem exemplar em estoque? Quais?
π cod_livro, qtd_estoque (σ qtd_estoque = 0 (ESTOQUE))

5- Quais são os livros que custam mais de R$ 50 e contém mais de 5 unidades no estoque?
π cod_livro (σ qtd_estoque > 5 (ESTOQUE)) ∩ π cod_livro (σ preco > 50 (LIVRO))
// retornará apenas o cod_livro, e só tem mesmo 1 livro nesta condição, o cod_livro = 2
σ ESTOQUE.qtd_estoque>5 ( π cod_livro, LIVRO.preco, ESTOQUE.qtd_estoque (LIVRO⨝ESTOQUE)) ∩ σ LIVRO.preco>50 ( π cod_livro, LIVRO.preco, ESTOQUE.qtd_estoque (LIVRO⨝ESTOQUE))
// outra solução:
σ ESTOQUE.qtd_estoque>5 ∧ LIVRO.preco>50 ( π LIVRO.cod_livro, LIVRO.preco, ESTOQUE.qtd_estoque(LIVRO ⨝ cod_livro = ESTOQUE.cod_livro ESTOQUE))

6- Quais livros atendem os requisitos do amigo oculto do cliente André: ser um livro de George Orwell ou de qualquer outra autoria que seja mais caro que 30 reais?
π nome_livro, preco (σ autor = 'George Orwell' (LIVRO)) ∪ π nome_livro, preco (σ preco > 30 (LIVRO))

7- Quais os pedidos que possuem compra maior que R$ 100?
π cod_pedido, valor_pedido (σ valor_pedido > 100 (PEDIDO))


8- Existe algum pedido com quantidade de livros igual a 5?
π cod_pedido (σ qtd_pedido = 5 (ITEM_PEDIDO))
//retornar o cod_pedido. Para saber qual o livro, dá um trabalho maior.


9- Que pedidos foram feitos entre a data de 09/09/2023 e 15/09/2023?
falta terminar o código
σ data > date('2023-09-09') (PEDIDO)

10- Quais livros que possuem como editora a Companhia das Letras ?
σ nome = 'Companhia das Letras' (π nome_livro, nome (LIVRO ⨝ cod_editora = EDITORA.cod_editora EDITORA))

*/

/*Continuação da matéria: produto cartesiano
(LIVRO) ⨯ (CLIENTE) -> 20 x 20 = 400 colunas
// é o botão de produto na barra de ferramentas, entre subtração e join.


Como selecionar quais os clientes que mais fizeram pedidos: 
π CLIENTE.nome, PEDIDO.cod_pedido, PEDIDO.cod_cliente (σ CLIENTE.cod_cliente = PEDIDO.cod_cliente (CLIENTE ⨯ PEDIDO))
// o código acima pegará 3 informações de 2 tabelas, quando o cod_cliente for igual nas duas.
// Esse código levou 3ms para ser executado no PC do Senai. Testar em casa

Mas é mais negócio fazer isso com o 'join' (ícone da 'gravatinha'), conforme exemplo abaixo:
π CLIENTE.nome, PEDIDO.cod_pedido, PEDIDO.cod_cliente (CLIENTE ⨝ cod_cliente = PEDIDO.cod_cliente PEDIDO)
// No final há vários 'PEDIDO' porque o cod_cliente está presente nas 2 tabelas.
// Esse código levou 1ms para ser executado no PC do Senai.





*/
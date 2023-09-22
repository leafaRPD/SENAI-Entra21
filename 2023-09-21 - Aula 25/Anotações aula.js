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
// retornará apenas o código do livro. Mais adiante no curso aprenderemos formas de retornar o nome do livro a partir do cod_livro.

3- Quais são os livros com preço entre R$30 e R$50?
π nome_livro, preco (σ preco < 50 (LIVRO) ∩ σ preco > 30 (LIVRO))

4- Existem livros sem exemplar em estoque? Quais?
π cod_livro, qtd_estoque (σ qtd_estoque = 0 (ESTOQUE))

5- Quais são os livros que custam mais de R$ 50 e contém mais de 5 unidades no estoque?
π cod_livro (σ qtd_estoque > 5 (ESTOQUE)) ∩ π cod_livro  (σ preco > 50 (LIVRO))
// retornará apenas o cod_livro, e só tem mesmo 1 livro nesta condição, o cod_livro = 2

6- Quais livros atendem os requisitos do amigo oculto do cliente André: ser um livro de George Orwell ou de qualquer outra autoria que seja mais caro que 30 reais?
π nome_livro, preco (σ autor = 'George Orwell' (LIVRO)) ∪ π nome_livro, preco (σ preco > 30 (LIVRO))

7- Quais os pedidos que possuem compra maior que R$ 100?

8- Existe algum pedido com quantidade de livros igual a 5?

9- Que pedidos foram feitos entre a data de 09/09/2023 e 15/09/2023?
falta terminar o código
σ data > date('2023-09-09') (PEDIDO)

10- Quais livros que possuem como editora a Companhia das letras ?


*/

/*Continuação da matéria: produto cartesiano
(LIVRO) ⨯ (CLIENTE) -> 20 x 20 = 400 colunas
// é o botão de produto na barra de ferramentas, entre subtração e join.


Como selecionar quais os clientes que mais fizeram pedidos: 
π CLIENTE.nome, PEDIDO.cod_pedido, PEDIDO.cod_cliente (σ CLIENTE.cod_cliente = PEDIDO.cod_cliente (CLIENTE ⨯ PEDIDO))
o código acima pegará 3 informações de 2 tabelas, quando o cod_cliente for igual nas duas.

*/
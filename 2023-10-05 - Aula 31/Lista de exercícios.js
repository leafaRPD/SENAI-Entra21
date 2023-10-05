/*
Professor postou lista de exercícios abaixo:

1- Quais são os nomes dos livros que possuem preço maior que R$50?
select LIVRO.nome_livro, LIVRO.preco
from LIVRO
where LIVRO.preco > 50


2- Quais são os livros com estoque menor que 20 unidades?
select ESTOQUE.qtd_estoque
from ESTOQUE
where ESTOQUE.qtd_estoque < 20


3- Quais são os livros com preço entre R$30 e R$50?
select LIVRO.nome_livro, LIVRO.preco
from LIVRO
where LIVRO.preco < 50 and LIVRO.preco > 30


4- Existem livros sem exemplar em estoque? Quais?
select LIVRO.cod_livro, LIVRO.nome_livro, ESTOQUE.qtd_estoque
from LIVRO
inner join ESTOQUE
on LIVRO.cod_livro = ESTOQUE.cod_livro
where ESTOQUE.qtd_estoque = null


5- Quais são os livros que custam mais de R$ 50 e contém mais de 5 unidades no estoque?
select LIVRO.cod_livro, LIVRO.nome_livro, LIVRO.preco, ESTOQUE.qtd_estoque
from LIVRO
inner join ESTOQUE
on LIVRO.cod_livro = ESTOQUE.cod_livro
where ESTOQUE.qtd_estoque > 5 and LIVRO.preco > 50


6- Quais livros atendem os requisitos do amigo oculto do cliente André: ser um livro de George Orwell ou de qualquer outra autoria que seja mais caro que 30 reais?
select LIVRO.cod_livro, LIVRO.nome_livro, LIVRO.autor, LIVRO.preco
from LIVRO
where LIVRO.autor = 'George Orwell' or LIVRO.preco >30


7- Quais os pedidos que possuem compra maior que R$ 100?
select PEDIDO.cod_pedido, PEDIDO.valor_pedido 
from PEDIDO
where PEDIDO.valor_pedido > 100


8- Existe algum pedido com quantidade de livros igual a 5?
select ITEM_PEDIDO.cod_pedido, ITEM_PEDIDO.qtd_pedido
from ITEM_PEDIDO
where ITEM_PEDIDO.qtd_pedido = 5

9- Que pedidos foram feitos entre a data de 09/09/2023 e 15/09/2023?

10- Quais livros que possuem como editora a Companhia das letras ?

11- Qual o nome e preço dos livros que custam até 30 reais?

12- Quantos livros do “Harry Potter” o clube do livro registrou como pedido?

13- Quais livros Rick Riordan venderam mais de 3 unidades em um único pedido?

14- Quais são os livros que tiveram vendas acima de 10 unidades em um único pedido OU possuem preço total igual a R$20?

15- Quais livros possuem estoque esgotado com o nome da editora?

16- Quantos pedidos foram feitos na data de 12/09 até 19/09 ?

17- Quantos pedidos tiveram valor total maior que 100 reais?

18- Qual o pedido com maior valor total com o nome do cliente?

19- Quais clientes da cidade do Rio de Janeiro fizeram mais de um pedido com valor por pedido acima de 50 reais? 

*/
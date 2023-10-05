/*
Dia 03/10, prova do Lucas e em seguida fui embora. Teve aula de responsividade, que cairá na prova de segunda feira.
Dia 04/10, era pra ser aula do Ruan mas não foi. O de inglês substituiu e eu não fui.
Dia 05/10, aula do Rafael. 
Ele mudou o trabalho para apenas 3 dos 5 exercícios, e a data de entrega para domingo da outra semana.

Comandos, em ordem de complexidade:
select from where      group by    having      order by 

Usamos novamente o RelaX:
https://dbis-uibk.github.io/relax/landing

E o banco de dados do clube do livro, postado dia 21/09 (copiar e colar lá no site)

1º exercicio: (na aba SQL)
select * // seleciona todas as colunas
from LIVRO 

Mudando o cód:
select cod_livro, nome_livro, autor // seleciona apenas essas colunas
from LIVRO 
where preco>0


livro x estoque

Exe 2:
select LIVRO.cod_livro, LIVRO.nome_livro, LIVRO.preco, ESTOQUE.qtd_estoque
from LIVRO
inner join ESTOQUE
on LIVRO.cod_livro = ESTOQUE.cod_livro

mostrou as 20 linhas resultantes, com 3 colunas. 
Vamos agora adicionar uma condição com o where:

select LIVRO.cod_livro, LIVRO.nome_livro, LIVRO.preco, ESTOQUE.qtd_estoque
from LIVRO
inner join ESTOQUE
on LIVRO.cod_livro = ESTOQUE.cod_livro
where ESTOQUE.qtd_estoque > 50 // filtrou para mostrar apenas os livros cujo estoque é maior que 50



*/
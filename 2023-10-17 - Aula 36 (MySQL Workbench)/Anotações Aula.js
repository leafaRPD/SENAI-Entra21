/* não vim ontem, dia 16/10, na aula do Rafael. 
Hoje é aula do Rafael de novo.

Dia 23/10 será a última aula e prova deste módulo/matéria.

Aula no MySQL, com comandos para gerar usuário DBA (abaixo do root, mas com todos os privilégios). */
/*
CREATE USER 'admin_dba'@'localhost' IDENTIFIED BY 'admin_dba';
GRANT ALL privileges ON *.* TO 'ADMIN_dba'@'LOCALHOST' WITH GRANT OPTION;

select * from mysql.user;

#Usuário Normal
CREATE USER 'usuario_normal'@'LOCALHOST' identified by 'usuario_normal';
GRANT SELECT, INSERT, DELETE, update ON *.* TO 'usuario_normal'@'LOCALHOST';

# USUÁRIO DE 'MODO LEITURA'; que só pode consultar e não inserir nem deletar:
CREATE USER 'usuario_leitura'@'LOCALHOST' identified by 'usuario_leitura';
GRANT SELECT ON *.* TO 'usuario_leitura'@'LOCALHOST';
select * from mysql.user;

show grants for 'usuario_normal'@'LOCALHOST';
revoke all privileges, grant option from 'usuario_normal'@'LOCALHOST';
show grants for 'usuario_normal'@'LOCALHOST';
*/

/* Após esses códigos, continuamos nos exeercícios sobre o clube do livro:
group by (sum, max, min, avg, count)

1 - Qual a maior venda do clube do livro?
2 - Qual o vendedor que mais vendeu?
3 - A quantidade de livros que cada vendedor vendeu?
4 - Qual o livro mais vendido?
5 - Quais livros não foram vendidos?
6 - Existe algum livro que teve vendas e não faz mais parte da lista de livros comercializados (null em 'IDdolivro')
7 - Qual a média de vendas entre os vendedores?
8 - Qual foi o total de todas as vendas feitas?
9 - Qual o maior pedido em termos de valor?
10 - Quais livros têm apenas 1 exemplar em estoque?

*/
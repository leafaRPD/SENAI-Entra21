/* Aula do Rafael Ventura, no software MySQL workbench. Usamos a sequência de códigos abaixo. 
Anotações minhas:
Clicar 2 vezes no tabela para usá-la (comando 'use clube_livro' é a forma de acessar isso quando não se tem uma IDE gráfica.)
Ele passou um arquivo .txt no Classroom para facilitar a construção do banco de dados; o arquivo tem algumas listas que adicionamos com ctrl+c e ctrl+v.


create database clube_livro;
use clube_livro;
create table livros(
id_livro int not null, 
nome_livro varchar(100) not null,
autoria varchar(100) not null,
editora varchar(100) not null,
categoria varchar(100) not null,
preco decimal(5,2) not null,
primary key (id_livro)
);
create table estoque(
id_livro int not null,
qtd_estoque int not null,
primary key (id_livro)
);
create table vendas(
id_pedido int not null,
id_vendedor int not null,
id_livro int not null,
qtd_vendida int not null,
data_venda date not null,
primary key (id_vendedor, id_pedido)
);
create table vendedores(
id_vendedor int not null,
nome_vendedor varchar(255) not null,
primary key (id_vendedor)
);

alter table vendas add constraint vendas_livros_fk
foreign key (id_livro)
references livros (id_livro)
on delete no action
on update no action;

alter table estoque add constraint estoque_livros_fk
foreign key (id_livro)
references livros (id_livro)
on delete no action
on update no action;

alter table vendas add constraint vendas_vendedores_fk
foreign key (id_vendedor)
references vendedores (id_vendedor)
on delete no action
on update no action;

set foreign_key_checks = 0;

insert into livros values(
1,
'Percy Jackson e o Ladrão de Raios',
'Rick Riordan',
'Intrínseca',
'Aventura',
34.45)
;

INSERT INTO LIVROS VALUES(
2, 'A Volta ao Mundo em 80 Dias',    'Júlio Verne',         'Principis',     'Aventura',    21.99),
(3, 'O Cortiço',                     'Aluísio de Azevedo',  'Panda Books',   'Romance',    47.8),
(4,    'Dom Casmurro',                     'Machado de Assis',    'Via Leitura',   'Romance',    19.90),
(5,    'Memórias Póstumas de Brás Cubas',    'Machado de Assis',    'Antofágica',    'Romance',    45),
(6,    'Quincas Borba',                 'Machado de Assis',    'L&PM Editores', 'Romance',    48.5),
(7,    'Ícaro',                             'Gabriel Pedrosa',     'Ateliê',          'Poesia',    36),
(8,    'Os Lusíadas',                     'Luís Vaz de Camões',  'Montecristo',   'Poesia',    18.79),
(9,    'Outros Jeitos de Usar a Boca',    'Rupi Kaur',          'Planeta',          'Poesia',    34.8)
;

INSERT INTO VENDEDORES VALUES(
1,'Paula Rabelo'),
(2,'Juliana Macedo'),
(3,'Roberto Barros'),
(4,'Barbara Jales')
;

INSERT INTO VENDAS VALUES(
1, 3, 7, 1, '2020-11-02'),
(2, 4, 8, 2, '2020-11-02'),
(3, 4, 4, 3, '2020-11-02'),
(4, 1, 7, 1, '2020-11-03'),
(5, 1, 6, 3, '2020-11-03'),
(6, 1, 9, 2, '2020-11-04'),
(7, 4, 1, 3, '2020-11-04'),
(8, 1, 5, 2, '2020-11-05'),
(9, 1, 2, 1, '2020-11-05'),
(10, 3, 8, 2, '2020-11-11'),
(11, 1, 1, 4, '2020-11-11'),
(12, 2, 10, 10, '2020-11-11'),
(13, 1, 12, 5, '2020-11-18'),
(14, 2, 4, 1, '2020-11-25'),
(15, 3, 13, 2,'2021-01-05'),
(16, 4, 13, 1, '2021-01-05'),
(17, 4, 4, 3, '2021-01-06'),
(18, 2, 12, 2, '2021-01-06')
;

INSERT INTO ESTOQUE VALUES
(1,  7),
(2,  10),
(3,  2),
(8,  4),
(10, 5),
(11, 3),
(12, 3)
;

INSERT INTO LIVROS (CATEGORIA, AUTORIA, NOME_LIVRO, EDITORA, ID_LIVRO, PRECO) VALUES
('Biografia' ,    'Malala Yousafzai', 'Eu sou Malala'       , 'Companhia das Letras', 11, 22.32),
('Biografia' ,    'Michelle Obama'  , 'Minha história'      , 'Objetiva'            ,    12,    57.90),
('Biografia' ,    'Anne Frank'      , 'Diário de Anne Frank', 'Pe Da Letra'         , 13, 34.90);

create database paraSerExcluida;
drop database paraSerExcluida;

create table vendedores2(
id_vendedor int not null,
nome_vendedor varchar(255) not null,
primary key (id_vendedor)
);

drop table vendedores2;

alter table livros add column (ano_publicacao int);
alter table livros drop column ano_publicacao;

set foreign_key_checks = 0;

delete from livros where (nome_livro = 'Lusíadas');

// alterando os preços de todos os livros em uma promoção:
update livros set preco = preco*0.9; // se colocar parênteses NÃO funciona.

// com este código, retornará 3 resultados de id_vendedor: 2, 4 e 4.
select  id_vendedor from vendas where id_livro = 4;
// Ou seja: o vendedor 4 vendeu este livro 2 vezes.
// Para eliminar esta informação duplicada (pois eu queria saber quem vendeu e não quantas vezes/quantas vendas deste livro o vendedor fez.):
select distinct id_vendedor from vendas where id_livro = 4;
// Foi adicionada a condição 'distinct', que elimina os resultados repetidos.


consultar quais foram os 3 vendedores com maior quantidade (soma) de vendas:

select * from vendas;
select * from vendedores;

select vendas.id_vendedor, vendedores.nome_vendedor, sum(vendas.qtd_vendida)
from vendas
inner join vendedores
on vendas.id_vendedor = vendedores.id_vendedor
group by vendas.id_vendedor
order by sum(vendas.qtd_vendida) desc // 'desc' é descendente
limit 3
;

*/
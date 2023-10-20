/* Faltei esta aula pois estávamos no aeroporto em SP. O professor realizou a avaliação 2 (0,2 da nota final) e lançou a avaliação 3 (0,6 da nota final).
*/



/* >>>>>>>>>>> Avaliação III (Prática) <<<<<<<<<<

##### Desenvolvimento de CRUD de Produto #####

CRUD é um acrônimo para Creat, Read, Update, Delete. Quando falamos desta "sigla" na programação, pensamos diretamente na combinação dessas funções (criar, ler, atualizar e deletar) com dados estruturados, seja um banco de dados, localStorage ou mesmo um vetor ou lista local.

Trazendo para para abordagem mais simplista, um CRUD bem programado deve permitir ao usuário:

-> criar (cadastrar, adicionar, gravar, salvar) um dado
-> ler (ver, acessar, listar, visualizar) um dado ou a lista de dados
-> atualizar (alterar, editar, modificar) um dado
-> deletar (apagar, excluir) um dado

A atividade "Desenvolvimento de CRUD de Produto" irá avaliar a programação de um CRUD no qual o usuário possa criar, ler, atualizar e deletar produtos e suas propriedades. As propriedades (informações) de cada produto são: marca, nome e valor. É aconselhável uso de métodos de vetores para manipulação dos dados e implementação do CRUD e funções para organização do código.


((((( Critérios de Avaliação )))))

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

// Forma da estrutura: a maior lista chama-se ListaMarca, dentro dela tem a listaProdutos, e cada produto da marca tem sua ListaValor.

ListaMarca = [[`Adidas`], [`Nike`]]

let listaProdutos = [[]] // marca, nome e valor
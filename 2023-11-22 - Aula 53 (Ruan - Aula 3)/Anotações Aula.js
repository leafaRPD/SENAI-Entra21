/* para iniciar um projeto em Node, rodar o comando 'npm init' no terminal.

criar pasta 'app',
'cd app' no terminal para mudar para a nova pasta 'app'
'npm init' no terminal.


'npm start'

criando o script chamado 'start' (no package.json):
"start": "node index.js",

agora no terminal podemos digitar 'npm start' e ele rodar o index.js automaticamente. 

Agora criaremos outro script chamado 'dev':
"dev": "node index.js",
No terminal, para rodar esse script temos que rodar 'npm run dev'. O único que não precisa do 'run' no meio é o 'start'.

para ativar um atualização automática, fazemos a adição de '--watch' entre o 'node' e o 'index.js':
node --watch index.js


npm i -> comando que lê o package.json, baixa e já instala todos os pacotes necessários para que o código funcione.

para criar o gitignore, entramos no site https://www.toptal.com/developers/gitignore
e nele digitei 'node' e depois em 'criar'.
Copiei o que ele gerou, voltei no terminal do VS, criei um arquivo .gitignore novo, zerado, e colei o texto que o site criou.


                            A P I s
POSTMAN: sistema/site/app usado para fazer as pesquisas. 
https://jsonplaceholder.typicode.com/guide/


host: site base (mercadolivre.com.br)
host/algo: algo já é uma forma de pesquisa, mais exata.
host.algo.1: abrirá a página específica da coisa '1'.
host.algo/post?userid=3: pesquisará os posts do usuário cujo id é 3.

post: adiciona um arquivo, uma nova página (ex: um post)
put: atualiza toda a informação dentro de uma página. (ex: todos os dados do post como: nome usuário, a mensagem, id do user e id do post)
patch: atualiza uma das informações (exemplo: atualizar status de entrega, ou atualizar a mensagem sem alterar o user, o id do post e tal)
delete: deleta. 







figurinha de alguém:
1 - pescando com linha e boia
2 - tirando um marlin no meio do mar
3 - um Gyaradus indo em direção a um sabre de luz do Darth Vader
4 - uma posta de salmão caindo num prato, visto de cima (bird eye).
*/

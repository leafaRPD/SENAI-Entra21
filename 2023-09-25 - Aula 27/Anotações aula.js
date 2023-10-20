// Aula 26 de sexta dia 22/9 foi de inglês com o Adrian. Fiz a prova de validação e fui embora.
// Hoje, dia 25/9, aula do Lucas.

/*site interessantes de dicas  
https://css-tricks.com/
https://flukeout.github.io/

*/


Também não. O que eu estou fazendo é colar manualmente, no campo de entrada 1 (CE1), uma coordenada GPS do tipo Geodésica Decimal (que sempre é diferente), no seguinte formato:
-26.863249963274157, -49.126157599312656 (o primeiro número é a coordenada vertical e o segundo, a longitudinal.)
A quantidade de casas decimais varia. Por isso eu criei aquela sequência de passos naquele formato.
Quando eu clico no CE1 e faço ctrl V, o cursor do mouse (que representarei aqui como '@') fica no final do CE1, conforme exemplo abaixo:
-26.863249963274157, -49.126157599312656@
Então eu fiz o seguinte passo a passo:

Passo 1: ctrl <-
isso faz o '@' ir para o início da coordenada longitude, ignorando o sinal:
-26.863249963274157, -@49.126157599312656

Passo 2: 2x->
isso faz o '@' ir 2 passos para a direita:
-26.863249963274157, -49@.126157599312656

Passo 3: del
deleta o ponto 
-26.863249963274157, -49@126157599312656

Passo 4:,
insere uma vírgula -26.863249963274157, -49,@126157599312656

Passo 5:ctrl <--
volta o '@' para o início da coordenada longitude, ignorando o sinal:
-26.863249963274157, -@49.126157599312656

Passo 6:<--
volta o '@' para o início da coordenada longitude, antes do sinal:
26.863249963274157, @-49.126157599312656

Passo 7:shift end
seleciona toda a coordenada longitudinal e em seguida recorta (armazena) na memória:
-26.863249963274157, @-49.126157599312656/@

Passo 8:ctrl x
-26.863249963274157, @

Passo 9:2x backspace
apaga os 2 úlimos algorismos, o espaço e a vírgula: 
-26.863249963274157@

E assim por diante. A intenção é trocar os pontos por vírgula para que as coordenadas funcionem, pois o site é brasileiro. E colar cada uma em seu respectivo campo.
Passo 10:ctrl <--26.863249963274157, -49.126157599312656
Passo 11:2x->-26.863249963274157, -49.126157599312656
Passo 12:del-26.863249963274157, -49.126157599312656
Passo 13:,-26.863249963274157, -49.126157599312656
Passo 14:tab-26.863249963274157, -49.126157599312656
Passo 15:ctrl v-26.863249963274157, -49.126157599312656
Passo 16:tab-26.863249963274157, -49.126157599312656


ChatGPT




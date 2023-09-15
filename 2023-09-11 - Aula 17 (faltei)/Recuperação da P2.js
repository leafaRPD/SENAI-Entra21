/*Uma aplicação necessita de maior segurança através uma autenticação, para confirmação de cadastro de usuário. Você como programador deve desenvolver um sistema de CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart), que consiste em autenticação por desafio e resposta, o qual o usuário deve utilizar.

O CAPTCHA deve gerar uma sequência aleatória de 4 figuras geométricas (não repetidas), dentre 8 figuras geométricas possíveis, que deve ser armazenada. Para autenticação o usuário deve repetir o CAPTCHA gerado, digitando a sequência de 4 figuras na ordem correta, uma por vez.

Receber os dados de cadastro do usuário (nome de usuário e senha) e em seguida gerar o CAPTCHA. Solicitar ao usuário que repita o CAPTCHA gerado. Caso a sequência esteja correta, mostrar mensagem de cadastro realizado. Caso a sequência esteja errada, mostrar a sequência gerada e a sequência digitada "A sequência gerada era X, você digitou Y" (exemplo) e perguntar ao usuário se deseja gerar um novo CAPTCHA ou voltar ao menu principal.

Figuras geométricas possíveis: círculo, triângulo, quadrado, retângulo, losango, pentágono, hexágono, trapézio.

Critérios de avaliação:

(1,0) Mensagem de boas vindas explicando o sistema e a autenticação por CAPTCHA.
(1,0) Criar menu funcional (loop) com opções 1) Cadastrar 2) Listar usuários e senhas 2) Sair
(1,0) Para a opção 1, receber os dados do usuário (nome de usuário e senha).
(2,0) Gerar um CAPTCHA aleatório (sequência de 4 figuras geométricas) não repetidos e mostrar na tela.
(1,0) Receber os dados de autenticação digitados pelo do usuário (figuras geométricas).
(2,0) Validar o CAPTCHA, caso esteja correto armazenar nome de usuário e senha em vetores.
(1,0) Caso a validação falhe, criar opção de gerar novo CAPTCHA ou retornar ao menu.
(1,0) Para a opção 2, mostrar dados dos usuários (usuários e senhas) ou "Não existem usuários cadastrados!"

Aconselhável uso de estruturas de repetição (WHILE, DO WHILE e FOR), Math functions e vetores.
Boa sorte! :D
*/

// resolução do GP:
let figuras = ['circulo', 'triangulo', 'quadrado', 'retangulo', 'losango', 'pentagono', 'hexagono', 'trapezio']
let usuarios = []
let senhas = []

function gerarCaptcha() { // gera um captcha de texto.
    let figurasCopia = figuras
    let captcha = []
    
    for (let i = 0; i < 4; i++) {
        let indiceAleatorio = Math.floor(Math.random() * figurasCopia.length)
        captcha.push(figurasCopia[indiceAleatorio])
        figurasCopia.splice(indiceAleatorio, 1)
    }
    return captcha
}

alert(`Bem-vindo ao sistema! Digite usuário, senha e CAPTCHA para autenticar o acesso.`)

while (true) {
    let opcao = prompt(`Escolha uma opção:\n1 - Cadastrar\n2 - Listar usuários e senhas\n3 - Sair`)
    
    if (opcao === `1`) {
        let nomeUsuario = prompt(`Digite seu nome de usuário:`)
        let senha = prompt(`Digite sua senha:`)
        
        let captcha = gerarCaptcha()
        //console.log(`O captcha é` + captcha) // porque estava difícil memorizar.    |
        alert(`Seu CAPTCHA é: ` + captcha.join(`, `)) //.join(`, `) | (´ ,´)nioj.
//                                                                  |
        let tentativas = []
        for (let i = 0; i < 4; i++) {
            tentativas.push(prompt(`Digite a figura ${i + 1}:`))
        }
        //console.log(`O tentativas é` + tentativas)
        if (JSON.stringify(tentativas) === JSON.stringify(captcha)) {// foi a solução que deu certo. Não entendi.
            usuarios.push(nomeUsuario)
            senhas.push(senha)
            alert(`Cadastro realizado com sucesso!`)
        } else {
            alert(`A sequência gerada era ${captcha.join(`, `)}, você digitou ${tentativas.join(`, `)}.`)
            if (prompt(`Deseja gerar um novo CAPTCHA? (s/n)`) === `s`) {
                continue
            }
        }
    } else if (opcao === `2`) {
        if (usuarios.length === 0) {
            alert(`Não existem usuários cadastrados!`)
        } else {
            let lista = ``
            for (let i = 0; i < usuarios.length; i++) {
                lista += `Usuário: ${usuarios[i]}, Senha: ${senhas[i]}\n`
            }
            alert(lista)
        }
    } else if (opcao === `3`) {
        alert(`Até logo!`)
        break
    } else {
        alert(`A opção escolhida é inválida.`)
    }
}

// Exercício DO WHILE
let dinheiro
let i = 0 
let valorProduto
dinheiro = Number(prompt(`Digite o valor disponível para gastar no mercado:`))

do {
    alert(`Você tem ${dinheiro} reais para gastar e foi ao mercado fazer compras.`)
    valorProduto = Number(prompt(`Digite o valor do ${i+1}º produto no carrinho:`))
    
    dinheiro = dinheiro - valorProduto
    if (dinheiro < 0){
        alert(`Você não tem dinheiro suficiente para comprar este item.`)
        dinheiro = dinheiro + valorProduto
        break
    }
    i++
    
} while (dinheiro > 0)
console.log(`Você gastou ${300-dinheiro}, comprou ${i} produtos e sobrou ${dinheiro} Reais.`)
alert(`Você gastou ${300-dinheiro}, comprou ${i} produtos e sobrou ${dinheiro} Reais.`)


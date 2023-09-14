listaProdutos = [[`KICHUTE`, `SAPATO`, 16.99],[`PLASTIQUARE`, `POTE`, 1.50],[`JAYUNG`, `PESO DE PORTA`, 66.66], [`M`,`P`, 3]]
marca = prompt(`Digite a marca do produto:`).toUpperCase()
//nomeDoProduto = prompt(`Digite o nome do produto:`).toUpperCase()
valor = Number(prompt(`Digite o valor do produto, utilizando \nponto '.' e 2 casas decimais (ex: 16.39):`)).toFixed(2)
valor = Number(valor)
let listaFiltrada
function dp(marca) { //, nomeDoProduto, valor
	listaFiltrada = listaProdutos.filter((marca) => {return true
	}
	)
}
dp(marca)
listaFiltrada




let listaProdutos = [[`KICHUTE`, `SAPATO`, 16.99],[`PLASTIQUARE`, `POTE`, 1.50],[`JAYUNG`, `PESO DE PORTA`, 66.66], [`M`,`P`, 3], [`M`,`PP`, 23]]
  
  let marca = prompt('Digite a marca do produto:').toUpperCase()
  let nomeDoProduto = prompt(`Digite o nome do produto:`).toUpperCase()
  let valor = Number(prompt(`Digite o valor do produto, utilizando \nponto '.' e 2 casas decimais (ex: 16.39):`)).toFixed(2)
  valor = Number(valor)
  let listaFiltrada
  
  function dpUm(marca) {
    listaFiltrada = listaProdutos.filter((atributoDoProdutoEm) => {
      return atributoDoProdutoEm[0] === marca
    })
  }
  function dpDois(nomeDoProduto) {
    listaFiltrada = listaFiltrada.filter((atributoDoProdutoEm) => {
      return atributoDoProdutoEm[1] === nomeDoProduto
    })
  }
  function dpTres(valor) {
    listaFiltrada = listaFiltrada.filter((atributoDoProdutoEm) => {
      return atributoDoProdutoEm[2] === valor
    })
  }
  dpUm(marca)
  dpDois(nomeDoProduto)
  dpTres(valor)
  
  listaFiltrada
  





  let listaProdutos = [
    ['KICHUTE', 'SAPATO', 16.99],
    ['PLASTIQUARE', 'POTE', 1.50],
    ['JAYUNG', 'PESO DE PORTA', 66.66],
    ['M', 'P', 3],
    ['M', 'PP', 23]
  ];
  
  let marca = prompt('Digite a marca do produto:').toUpperCase();
  let nomeDoProduto = prompt('Digite o nome do produto:').toUpperCase();
  let valor = Number(prompt('Digite o valor do produto, utilizando \nponto \'.\' e 2 casas decimais (ex: 16.39):')).toFixed(2);
  valor = Number(valor);
  
  let listaFiltrada;
  
  function filtrarProduto() {
    listaFiltrada = listaProdutos.filter(produtoSelecionado => {
      return produtoSelecionado[0] === marca && produtoSelecionado[1] === nomeDoProduto && produtoSelecionado[2] === valor;
    })
  }
  
  filtrarProduto()
  
  // Outra função para remover da listaProdutos apenas o item selecionado pela listaFiltrada:
  listaProdutos = listaProdutos.filter(produtoSelecionado => !listaFiltrada.includes(produtoSelecionado))
  
  console.log(listaProdutos)
  
  
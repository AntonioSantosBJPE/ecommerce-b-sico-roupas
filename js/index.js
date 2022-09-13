let tagUlVitrine = document.querySelector(".vitrine")
let carrinhoCompras = document.querySelector(".carrinho-compras")
let contadorCarrinho = 0 
let valorTotalCompras = 0

// cria o card do produto na section vitrine, lendo os dados no array
// data atraves da posição recebido pelo paramentro n
function criarElementoCard (n){
    
    // criando os elementos html
    let tagLiCard = document.createElement("li")
    let tagFigure = document.createElement("figure")
    let tagImgCard = document.createElement("img")
    let tagDivCardTag = document.createElement("div")
    let tagPtag = document.createElement("p")
    let tagPnomeProduto = document.createElement("p")
    let tagPdescricao = document.createElement("p")
    let tagPpreco = document.createElement("p")
    let tagPaddCarinho = document.createElement("p")

    // imprementando valores as propriedades Html
    tagImgCard.src = data[n].img
    // Se o produto tiver mais de uma tag vai da BO, é preciso criar um if aqui para solucionar o BO
    tagPtag.innerText = data[n].tag 
    tagPnomeProduto.innerText = data[n].nameItem
    tagPdescricao.innerText = data[n].description
    tagPpreco.innerText = `R$ ${data[n].value},00`
    tagPaddCarinho.innerText =  "Adicionar carrinho"

    // criando a hieraquia no html 
    tagUlVitrine.appendChild(tagLiCard)
    tagLiCard.appendChild(tagFigure)
        tagFigure.appendChild(tagImgCard)
    tagLiCard.appendChild(tagDivCardTag)
        tagDivCardTag.appendChild(tagPtag)
    tagLiCard.appendChild(tagPnomeProduto)
    tagLiCard.appendChild(tagPdescricao)
    tagLiCard.appendChild(tagPpreco)
    tagLiCard.appendChild(tagPaddCarinho)

    // adicionando classes as tags html criadas
    tagLiCard.classList.add("cards")
    tagFigure.classList.add("card-img")
    tagDivCardTag.classList.add("card-tag")
    tagPnomeProduto.classList.add("card-nome-produto")
    tagPdescricao.classList.add("card-descriçao")
    tagPpreco.classList.add("card-preço")
    tagPaddCarinho.classList.add("card-add-carrinho")

    //Criando evento para add o produto no carrinho de compra
    tagPaddCarinho.addEventListener("click", function(e){

        criarElementoCardCarrinhoCompras(n)

    })

}
//Cria todos os cards dos produtos na section vitrine, recebendo como para
// a tag a qual queremos filtrar os produtos
function criarVitrine (tag){
    
    //limpando o html dentro da ul vitrine de produtos
    tagUlVitrine.innerHTML=""
    let itemNoFiltro = false
    //percorrendo o array data 
    for (let i=0; i<data.length;i++){
        
        if (data[i].tag.length>1){
            // If criado pensando em um futuro aceitar mais de uma tag por produto
            //fato que vai necessitar um incremento de codigo aqui
        } else { // entra aqui sempre que o produto tiver apenas uma tag (padrao utilizado)
            if (tag==="Todos"){         
                criarElementoCard(i)
                itemNoFiltro = true
            } else {
                if (data[i].tag[0]===tag){
                    criarElementoCard(i)
                    itemNoFiltro = true
                }
            }
            
        }
         
    }

    if (itemNoFiltro===false){
        alert(" Nenhum item foi encontrado no filtro!")
    }


}

//cria a section carrinhos de compras no formato sem produtos
function criarCarrinhoComprasOff (){

    //limpando o html dentro da ul carrinhos de compras
    carrinhoCompras.innerHTML=""

    // criando os elementos html
    let tagDivCarrinhoComprasTitulo = document.createElement("div")
    let tagPtitulo = document.createElement("p")
    let tagDivCarrinhoOff = document.createElement("div")
    let tagH2 = document.createElement("h3")
    let tagP = document.createElement("p")

    // imprementando valores as propriedades Html
    tagPtitulo.innerText = "Carrinho de compras"
    tagH2.innerText = "Carrinho vázio"
    tagP.innerText = "Adicione itens"

    // criando a hieraquia no html 
    carrinhoCompras.appendChild(tagDivCarrinhoComprasTitulo)
    tagDivCarrinhoComprasTitulo.appendChild(tagPtitulo)
    carrinhoCompras.appendChild(tagDivCarrinhoOff)
    tagDivCarrinhoOff.appendChild(tagH2)
    tagDivCarrinhoOff.appendChild(tagP)

    // adicionando classes as tags html criadas
    tagDivCarrinhoComprasTitulo.classList.add("carrinho-compras-titulo")
    tagDivCarrinhoOff.classList.add("carrinho-compras-off-itens")

}
//cria a section carrinhos de compras no formato com produtos adicionados
function criarCarrinhoComprasOn () {
    
    //limpando o html dentro da ul carrinhos de compras
    carrinhoCompras.innerHTML=""

    // criando os elementos html
    let tagDivCarrinhoComprasTitulo = document.createElement("div")
    let tagPtitulo = document.createElement("p")
    let tagDivCarrinhoOn = document.createElement("div")
    let tagUl = document.createElement("ul")
    let tagDivCarrinhoComprasInfos = document.createElement("div")
    let tagDivInfosQuantidade = document.createElement("div")
    let tagPquantidade = document.createElement("p")
    let tagPquantidadeValue = document.createElement("p")
    let tagDivInfosValor = document.createElement("div")
    let tagPtotal = document.createElement("p")
    let tagPtotalValue = document.createElement("p")

    // imprementando valores as propriedades Html
    tagPtitulo.innerText = "Carrinho de compras"
    tagPquantidade.innerText = "Quantidade:"
    tagPquantidadeValue.innerText = contadorCarrinho
    tagPtotal.innerText="Total:"
    tagPtotalValue.innerText = `R$ ${valorTotalCompras},00`

     // criando a hieraquia no html 
    carrinhoCompras.appendChild(tagDivCarrinhoComprasTitulo)
    tagDivCarrinhoComprasTitulo.appendChild(tagPtitulo)
    carrinhoCompras.appendChild(tagDivCarrinhoOn)
    tagDivCarrinhoOn.appendChild(tagUl)
    carrinhoCompras.appendChild(tagDivCarrinhoComprasInfos)
    tagDivCarrinhoComprasInfos.appendChild(tagDivInfosQuantidade)
    tagDivInfosQuantidade.appendChild(tagPquantidade)
    tagDivInfosQuantidade.appendChild(tagPquantidadeValue)
    tagDivCarrinhoComprasInfos.appendChild(tagDivInfosValor)
    tagDivInfosValor.appendChild(tagPtotal)
    tagDivInfosValor.appendChild(tagPtotalValue)

    // adicionando classes as tags html criadas
    tagDivCarrinhoComprasTitulo.classList.add("carrinho-compras-titulo")
    tagDivCarrinhoOn.classList.add("carrinho-compras-on-itens")
    tagUl.classList.add("carrinho-compras-cards")
    tagDivCarrinhoComprasInfos.classList.add("carrinho-compras-infos")
    tagDivInfosQuantidade.classList.add("carrinho-compras-infos-quantidade")
    tagDivInfosValor.classList.add("carrinho-compras-infos-valor")
    tagPquantidadeValue.classList.add("contador-quantidade-produtos-carrinho")
    tagPtotalValue.classList.add("valor-total-carrinho-compras")


}

function criarElementoCardCarrinhoCompras (n){
    
    //garantindo criar a section carrinho de compras apenas uma vez
    if (contadorCarrinho===0){
        criarCarrinhoComprasOn()
    }

    contadorCarrinho++
    
    let tagPquantidadeValue = document.querySelector(".contador-quantidade-produtos-carrinho")
    tagPquantidadeValue.innerText = contadorCarrinho
    
    valorTotalCompras += data[n].value
    let tagPtotalValue = document.querySelector(".valor-total-carrinho-compras")
    tagPtotalValue.innerText = `R$ ${valorTotalCompras},00`


    let tagUl = document.querySelector(".carrinho-compras-cards")

    // criando os elementos html
    let tagLi = document.createElement("li")
    let tagFigure = document.createElement("figure")
    let tagImg = document.createElement("img")
    let tagDivCardInfos = document.createElement("div")
    let tagPnome =  document.createElement("p")
    let tagPpreco =  document.createElement("p")
    let tagPremoveProduto = document.createElement("p")

    // imprementando valores as propriedades Html
    tagImg.src = data[n].img
    tagPnome.innerText = data[n].nameItem
    tagPpreco.innerText = `R$ ${data[n].value},00`
    tagPremoveProduto.innerText = "Remover Produto"

    // criando a hieraquia no html 
    tagUl.appendChild(tagLi)
    tagLi.appendChild(tagFigure)
    tagFigure.appendChild(tagImg)
    tagLi.appendChild(tagDivCardInfos)
    tagDivCardInfos.appendChild(tagPnome)
    tagDivCardInfos.appendChild(tagPpreco)
    tagDivCardInfos.appendChild(tagPremoveProduto)

    // adicionando classes as tags html criadas
    tagLi.classList.add("carrinho-card")
    tagFigure.classList.add("carrinho-card-img")
    tagDivCardInfos.classList.add("carrinho-card-infos")
    tagPnome.classList.add("carrinho-card-nome")
    tagPpreco.classList.add("carrinho-card-preco")
    tagPremoveProduto.classList.add("carrinho-card-remove-produto")

    // criando evento de click para remover os itens do carrinho de compras
    tagPremoveProduto.addEventListener("click", function(e){
        
        tagLi.remove() // removendo o item do carrinho de compra apagando a tag li do mesmo

        contadorCarrinho--

        //criando a troca automatica do carrinho de comrpras ao ficar vazio
        if (contadorCarrinho===0){  
            carrinhoCompras.innerHTML=""
            criarCarrinhoComprasOff ()
            valorTotalCompras=0
        } else{
            let tagPquantidadeValue = document.querySelector(".contador-quantidade-produtos-carrinho")
            tagPquantidadeValue.innerText = contadorCarrinho
            
            valorTotalCompras -= data[n].value
            let tagPtotalValue = document.querySelector(".valor-total-carrinho-compras")
            tagPtotalValue.innerText = `R$ ${valorTotalCompras},00`
        }

       
    })

}
//criando o filtro de produtos por click no menu superior
function selecionarTagProdutos (){
    
    let liBold = document.querySelector(".menu-todos")

    // criando evento de carregamento do DOM, para gerar a vitrine de produtos
    //pela primeira vez
    window.addEventListener("DOMContentLoaded", function(event){
        
        liBold.style = "font-weight:bold ;"
        criarVitrine("Todos")
        criarCarrinhoComprasOff()

    })

    let menu = document.querySelectorAll(".menu")
    
    for ( let j=0; j<menu[0].children.length; j++){

        // criando lógica para garantir existir o efeito de atividado apenas na tag selecionada
        // ou tirando a seleção de bold do menu superior
        menu[0].children[j].addEventListener("click", function(event){
            
                for ( let k=0; k<menu[0].children.length; k++){
                    menu[0].children[k].style = ""
                }
        //-------
            event.target.style = "font-weight:bold ;"
            criarVitrine(event.target.innerText)
           
        })

    }
    
}


function pesquisarPorNome(){

    let input = document.querySelector(".input-pesquisar")
    let button = document.querySelector(".button-pesquisar")

    button.addEventListener("click", function(event){

        //usando a funcao toUpperCase para evitar o problema da diferença entre letras maiusculas e minusculas
        let textoPesquisar = input.value.toUpperCase()
        textoPesquisar = textoPesquisar.trim()
        input.value=""
        
        if (textoPesquisar !==""){
            let cont=0
            for (let i=0; i<data.length; i++){
                
                let itemAtual=data[i].nameItem.toUpperCase()
                
                //usando indexof para tornar possível pesquisar por 1 ou mais letras
                if (itemAtual.indexOf(textoPesquisar)>=0){
                   
                  // criando lógica para garantir existir o efeito de atividado apenas na tag selecionada
                 // ou tirando a seleção de bold do menu superiorr
                   let menu = document.querySelectorAll(".menu")
                   
                   for ( let k=0; k<menu[0].children.length; k++){
                    menu[0].children[k].style = ""
                    }
                 //-------  
                    if (cont===0){
                        tagUlVitrine.innerHTML=""
                        criarElementoCard(i)
                        cont++
                    } else{
                        
                        criarElementoCard(i)
                        cont++
                    }
                    

                }

            }

            if (cont===0){ // caso nenhum item seja encontrado na pesquisa
                alert(" Nenhum item foi encontrado na busca!")
            }

        }else{
            alert(" O campo de pesquisa está vázio!")
        }
       

    })

}

selecionarTagProdutos ()
pesquisarPorNome()







let tagUlVitrine = document.querySelector(".vitrine")
let carrinhoCompras = document.querySelector(".carrinho-compras")
let contadorCarrinho = 0
let valorTotalCompras = 0

function criarElementoCard (n){
    
    let tagLiCard = document.createElement("li")
    let tagFigure = document.createElement("figure")
    let tagImgCard = document.createElement("img")
    let tagDivCardTag = document.createElement("div")
    let tagPtag = document.createElement("p")
    let tagPnomeProduto = document.createElement("p")
    let tagPdescricao = document.createElement("p")
    let tagPpreco = document.createElement("p")
    let tagPaddCarinho = document.createElement("p")

    tagImgCard.src = data[n].img
    // Se o produto tiver mais de uma tag vai da BO, é preciso criar um if aqui para solucionar o BO
    tagPtag.innerText = data[n].tag 
    tagPnomeProduto.innerText = data[n].nameItem
    tagPdescricao.innerText = data[n].description
    tagPpreco.innerText = `R$ ${data[n].value},00`
    tagPaddCarinho.innerText =  "Adicionar carrinho"

    tagUlVitrine.appendChild(tagLiCard)
    tagLiCard.appendChild(tagFigure)
        tagFigure.appendChild(tagImgCard)
    tagLiCard.appendChild(tagDivCardTag)
        tagDivCardTag.appendChild(tagPtag)
    tagLiCard.appendChild(tagPnomeProduto)
    tagLiCard.appendChild(tagPdescricao)
    tagLiCard.appendChild(tagPpreco)
    tagLiCard.appendChild(tagPaddCarinho)

    tagLiCard.classList.add("cards")
    tagFigure.classList.add("card-img")
    tagDivCardTag.classList.add("card-tag")
    tagPnomeProduto.classList.add("card-nome-produto")
    tagPdescricao.classList.add("card-descriçao")
    tagPpreco.classList.add("card-preço")
    tagPaddCarinho.classList.add("card-add-carrinho")

    tagPaddCarinho.addEventListener("click", function(e){

        criarElementoCardCarrinhoCompras(n)

    })

}

function criarVitrine (tag){
  
    tagUlVitrine.innerHTML=""
    for (let i=0; i<data.length;i++){
        
        if (data[i].tag.length>1){
            
        } else {
            if (tag==="Todos"){
                criarElementoCard(i)
            } else {
                if (data[i].tag[0]===tag){
                    criarElementoCard(i)
                }
            }
            
        }
         
    }
}

function criarCarrinhoComprasOff (){

    carrinhoCompras.innerHTML=""

    let tagDivCarrinhoComprasTitulo = document.createElement("div")
    let tagPtitulo = document.createElement("p")
    let tagDivCarrinhoOff = document.createElement("div")
    let tagH2 = document.createElement("h3")
    let tagP = document.createElement("p")

    tagPtitulo.innerText = "Carrinho de compras"
    tagH2.innerText = "Carrinho vázio"
    tagP.innerText = "Adicione itens"

    carrinhoCompras.appendChild(tagDivCarrinhoComprasTitulo)
    tagDivCarrinhoComprasTitulo.appendChild(tagPtitulo)
    carrinhoCompras.appendChild(tagDivCarrinhoOff)
    tagDivCarrinhoOff.appendChild(tagH2)
    tagDivCarrinhoOff.appendChild(tagP)

    tagDivCarrinhoComprasTitulo.classList.add("carrinho-compras-titulo")
    tagDivCarrinhoOff.classList.add("carrinho-compras-off-itens")

}

function criarCarrinhoComprasOn () {
    
    carrinhoCompras.innerHTML=""
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

    tagPtitulo.innerText = "Carrinho de compras"
    tagPquantidade.innerText = "Quantidade:"
    tagPquantidadeValue.innerText = contadorCarrinho
    tagPtotal.innerText="Total:"
    tagPtotalValue.innerText = `R$ ${valorTotalCompras},00`

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

    let tagLi = document.createElement("li")
    let tagFigure = document.createElement("figure")
    let tagImg = document.createElement("img")
    let tagDivCardInfos = document.createElement("div")
    let tagPnome =  document.createElement("p")
    let tagPpreco =  document.createElement("p")
    let tagPremoveProduto = document.createElement("p")

    tagImg.src = data[n].img
    tagPnome.innerText = data[n].nameItem
    tagPpreco.innerText = `R$ ${data[n].value},00`
    tagPremoveProduto.innerText = "Remover Produto"

    tagUl.appendChild(tagLi)
    tagLi.appendChild(tagFigure)
    tagFigure.appendChild(tagImg)
    tagLi.appendChild(tagDivCardInfos)
    tagDivCardInfos.appendChild(tagPnome)
    tagDivCardInfos.appendChild(tagPpreco)
    tagDivCardInfos.appendChild(tagPremoveProduto)

    tagLi.classList.add("carrinho-card")
    tagFigure.classList.add("carrinho-card-img")
    tagDivCardInfos.classList.add("carrinho-card-infos")
    tagPnome.classList.add("carrinho-card-nome")
    tagPpreco.classList.add("carrinho-card-preco")
    tagPremoveProduto.classList.add("carrinho-card-remove-produto")

    tagPremoveProduto.addEventListener("click", function(e){
        
        tagLi.remove()

        contadorCarrinho--

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

function selecionarTagProdutos (){
    
    let liBold = document.querySelector(".menu-todos")

    window.addEventListener("DOMContentLoaded", function(event){
        
        liBold.style = "font-weight:bold ;"
        criarVitrine("Todos")
        criarCarrinhoComprasOff()

    })

    let menu = document.querySelectorAll(".menu")
    
    for ( let j=0; j<menu[0].children.length; j++){

        menu[0].children[j].addEventListener("click", function(event){
          
                for ( let k=0; k<menu[0].children.length; k++){
                    menu[0].children[k].style = ""
                }

            event.target.style = "font-weight:bold ;"
            criarVitrine(event.target.innerText)
           
        })

    }
    
}


function pesquisarPorNome(){

    let input = document.querySelector(".input-pesquisar")
    let button = document.querySelector(".button-pesquisar")

    button.addEventListener("click", function(event){

        let textoPesquisar = input.value.toUpperCase()
        input.value=""
        
        if (textoPesquisar !==""){
            let cont=0
            for (let i=0; i<data.length; i++){
                
                let itemAtual=data[i].nameItem.toUpperCase()
                
                if (itemAtual.indexOf(textoPesquisar)>=0){
                   
                   //tirando a seleção de bold do menu superior
                   let menu = document.querySelectorAll(".menu")
                   
                   for ( let k=0; k<menu[0].children.length; k++){
                    menu[0].children[k].style = ""
                }
                   
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
        }else{
            alert(" O campo de pesquisa está vázio")
        }
       

    })

}

selecionarTagProdutos ()
pesquisarPorNome()







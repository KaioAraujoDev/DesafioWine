//Chamando API
FindProductsApi();

//Exibindo as informações de produto na tela

function displayProducts(products){
    const sliderListProducts = document.querySelector('#SliderProducts');
    const list = document.createElement('ul');
    list.classList.add('listProducts');


    sliderListProducts.appendChild(list);

    for(let product of products.items){
        const item = document.createElement('li');
        item.innerHTML = `
        <section class="cardItem">
            <div class="img">
                <button class="btnFavorite">
                    <figure>
                        <img class="imgFavorite" src="assets/icons/heart.svg" alt="Icone Favoritar"/>
                    </figure>
                </button>
                <div class="infoProduct">
                    <div class="flag infoFlag">

                    </div>
                    <figure>
                        <img class="flag imgFlag"src=${product.flag} alt="Imagem país de origem"/>
                    </figure>
                </div>
                <figure class="figureImgProduct">
                    <img class="imgProduct" src=${product.image} alt="imagem de produto" />
                </figure>
            </div>
            <div class="description">
                <h3>${product.name}</h3>
                
                <div class="prices">
                    <div class="priceDiscount">
                        R$${
                           
                            formatValue(product.price)
                        }
                    </div>
                    <div class="Discount">   
                        ${product.discount}% OFF
                    </div>
                </div>

                <div class="priceMember">
                    <div>
                        SÓCIO WINE
                    </div>
                    <div class="price">
                        <span class="coin">R$</span>
                        <div>
                            <span>${formatValue(product.priceMember).substring(0,formatValue(product.priceMember). length - 2)}</span>
                            <span class="cents">
                            ${ formatValue(product.priceMember).trim().substring(formatValue(product.priceMember). length - 2, formatValue(product.priceMember).length)}
                            </span>
                        </div>
                    </div>
                </div>

                <p>NÃO SÓCIO R$${ formatValue(product.priceNonMember)}</p>
            </div>
        </section>
        
        <button class="btnAddProduct">Adicionar</button>
        `;
        list.appendChild(item);
    }
    
}
//Formatando valor de preço do produto

function formatValue(value){
    let valueFormated = value.toFixed(2).toString();
    valueFormated = valueFormated.replace('.' , ',');
    
    return valueFormated.trim();
}



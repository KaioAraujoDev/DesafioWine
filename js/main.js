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
                        R$${product.price}
                    </div>
                    <div class="Discount">   
                        ${product.discount}% OFF
                    </div>
                </div>

                <div class="priceMember">
                    <div>
                        SÓCIO WINE
                    </div>
                    <div>
                        <span class="coin">R$</span>${product.priceMember}
                    </div>
                </div>

                <p>NÃO SÓCIO R$${product.priceNonMember}</p>
            </div>
        </section>
        
        <button>Adicionar</button>
        `;
        list.appendChild(item);
    }
    
}
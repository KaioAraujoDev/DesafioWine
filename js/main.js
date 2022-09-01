FindProductsApi();

//Exibindo as informações de produto na tela

function displayProducts(products){
    const containerListProducts = document.querySelector('#containerListProducts');
    const list = document.createElement('ul');
    containerListProducts.appendChild(list);

    for(let product of products.items){
        const item = document.createElement('li');
        item.innerHTML = `
        <section class="cardItem">
            <div class="img">
                <button>
                    <figure>
                        <img src="assets/icons/heart.svg" alt="Icone Favoritar"/>
                    </figure>
                </button>
                <div class="infoProduct">
                    <div class="typeProduct">

                    </div>
                    <figure>
                        <img src=${product.flag} alt="Imagem país de origem"/>
                    </figure>
                </div>
                <figure>
                    <img src=${product.image} alt="imagem de produto" />
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
                        R$${product.priceMember}
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
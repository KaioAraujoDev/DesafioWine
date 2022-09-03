
//Busca na Produtos na API 
//A função retorna um objeto com itens de produtos
//Emitindo um alerta caso a conexão falhe

function FindProductsApi() {
    fetch("https://wine-back-test.herokuapp.com/products?page=1&limit=5")
        .then(async (res) => {
            const result = await res.json();
            console.log(result);
            displayProducts(result);
            createSliderProducts();
        })
        .catch(err => {
            alert("Não foi possível estabelecer uma conexão com a API.  \n" + err);
        });
}
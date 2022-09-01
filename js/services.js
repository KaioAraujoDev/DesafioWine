
//Busca na Produtos na API 
//A função retorna um objeto com itens de produtos
//Emitindo um alerta caso a conexão falhe

function buscaProdutosApi() {
    fetch("https://wine-back-test.herokuapp.com/products?page=1&limit=5")
        .then(async (res) => {
            const resultado = await res.json();
            console.log(resultado);

            return resultado;

        })
        .catch(err => {
            alert("Não foi possível estabelecer uma conexão com a API.  \n" + err);
        });
}
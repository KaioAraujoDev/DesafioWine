
//Adicionando lógica de slick de apresentação

$(document).ready(function () {
    $('.SliderPresentation').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

});

//Slider de serviços 

function createSlideServices() {
    $('.SliderServices').slick({
        centerMode: true,
        centerPadding: '12.5%',
        dots: true,
        arrows: false,
    });
}

//Slider de produtos 
//Será chamado quando a API terminar de buscar os produtos

function createSliderProducts() {

    $('.listProducts').slick({
        centerMode: true,
        centerPadding: '15%',
        infinite: false,
        arrows: false,
        unslick:false
    });
    //Verificar a necessidade de alterar o comportamento de responsividade
    
    addEventsSliderProducts();
}

//Evento de produto favorito

function addEventsSliderProducts() {
    const btnFavorite = document.querySelectorAll('.btnFavorite');

    for (let btn of btnFavorite) {
        btn.addEventListener('click', (event) => {


            if (event.target.src.includes('heart-selected')) {
                event.target.src = "assets/icons/heart.svg"
            } else {
                event.target.src = "assets/icons/heart-selected.svg"
            }

        })
    }
}

//Eventos multimedia javascript
//O valor de breakpoint será exatamente o tamanho do dispositivo utilizado


function changeBackground(match) {
    if (match.matches) {
        $('#banner01')[0].attributes.src.nodeValue = "assets/bannersMobile/banner-01-mobile.png"
        $('#banner02')[0].attributes.src.nodeValue = "assets/bannersMobile/banner-02-mobile.png"
        $('#banner03')[0].attributes.src.nodeValue = "assets/bannersMobile/banner-03-mobile.png"

    } else {
        $('#banner01')[0].attributes.src.nodeValue = "assets/bannersDesktop/banner-01-desktop.png"
        $('#banner02')[0].attributes.src.nodeValue = "assets/bannersDesktop/banner-02-desktop.png"
        $('#banner03')[0].attributes.src.nodeValue = "assets/bannersDesktop/banner-03-desktop.png"
    }
}


function changeSliderServices(match) {
    //Se a largura for no máximo 1024 crie slider
    if (match.matches) {
        createSlideServices();
    } else {
        //Remova slider
        $('.SliderServices').slick('unslick');
      
    }
    
}

function changeSliderProducts(match) {
    if (match.matches) {
        createSliderProducts();
    } else {
        $(".listProducts").slick('unslick');
    }
}



//Objeto multimedia irá servir de referencia ao tamanho de tela atua do dispositivo

const mmObjMax = window.matchMedia("(max-width: 1024px)");
const mmObjMin = window.matchMedia("(min-width: 1025px)");


changeBackground(mmObjMax);
changeSliderServices(mmObjMax);

mmObjMax.addEventListener('change', () => {
    changeBackground(mmObjMax);
});

mmObjMax.addEventListener('change', () => {
    changeSliderServices(mmObjMax);
});

 mmObjMax.addEventListener('change', () => {
    changeDescriptionPodcast(mmObjMin);
 });

 mmObjMax.addEventListener('change', () => {
    changeSliderProducts(mmObjMax);
 });

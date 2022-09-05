
//Adicionando lógica de slick de apresentação

$(document).ready(function () {
    $('.SliderPresentation').slick({
        autoplay: true,
        dots: false,
        arrows:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows:false,
                }
            }
        ]
    });

    //Evento ao atingir o breakpoint

    $('.SliderPresentation').on('breakpoint', (event , slick ,breakpoint)=>{
        if(breakpoint === null){
          
        }else{
            
        }

    })
});

//Slider de serviços 

function createSlideServices(){
    $('.SliderServices').slick({
        centerMode: true,
        centerPadding: '12.5%',
        dots: true,
        arrows:false
    });
}
   

//Slider de produtos 
//Será chamado quando a API terminar de buscar os produtos

function createSliderProducts() {
    $('.listProducts').slick({
        centerMode: true,
        centerPadding: '15%',
        infinite: false,
        arrows:false
    });

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


function changeBackground(match){
    console.log('match');
    if(match.matches){
        
        $('#banner01')[0].attributes.src.nodeValue = "assets/bannersDesktop/banner-01-desktop.png" 
        $('#banner02')[0].attributes.src.nodeValue = "assets/bannersDesktop/banner-02-desktop.png"
        $('#banner03')[0].attributes.src.nodeValue = "assets/bannersDesktop/banner-03-desktop.png"     
    }else{
        $('#banner01')[0].attributes.src.nodeValue = "assets/bannersMobile/banner-01-mobile.png" 
        $('#banner02')[0].attributes.src.nodeValue = "assets/bannersMobile/banner-02-mobile.png"
        $('#banner03')[0].attributes.src.nodeValue = "assets/bannersMobile/banner-03-mobile.png"     
    }
}

const mmObjMin = window.matchMedia("(min-width:1024px)");
const mmObjMax = window.matchMedia("(max-width:1023px)");

changeBackground(mmObjMin);

mmObjMin.addEventListener(changeBackground());

mmObjMax.addEventListener(createSlideServices());


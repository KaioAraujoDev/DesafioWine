$(document).ready(function() {
    $('.SliderPresentation').slick({
        autoplay:true,
        dots:true
    });
});

$(document).ready(function() {
    $('.SliderServices').slick({
        centerMode:true,
        centerPadding:'12.5%',
        dots:true
    });
});

function createSliderProducts(){
    $('.listProducts').slick({
        centerMode:true,
        centerPadding:'15%',
        infinite:false
    });

    addEventsSliderProducts();
    
} 

function addEventsSliderProducts(){
    const btnFavorite = document.querySelectorAll('.btnFavorite');

     for(let btn of btnFavorite){
        btn.addEventListener('click',(event)=>{
           
           
            if(event.target.src.includes('heart-selected')){
                 event.target.src = "assets/icons/heart.svg"
            }else{
                event.target.src = "assets/icons/heart-selected.svg"
            }
            
         })
     }
}